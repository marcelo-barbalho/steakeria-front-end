import React, {useState, useEffect} from 'react'
import {getProducts, deleteProducts, postProducts, patchProducts} from '../../services/admin'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import {Form, Button, Table} from 'react-bootstrap'

export default () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [formProducts, setFormProducts] = useState({})

useEffect(()=> {
      setRefresh(false)
      let get = async () => { 
          const p = await getProducts()
            setProducts(p.data)
        }
      if (!refresh) {
          get()
      }

      return () => get =() =>{}
 
  }, [refresh])

  const sortProducts = products.sort((a,b)=>{
      if (a.name>b.name) {
          return 1
      }
      if (a.name<b.name) {
          return -1
      }
      return 0
  })
  const listMount = () => 
      sortProducts.map((item, i)=>(
          <tr key={i}>
          <td>{item.status ? "Ativo":"Inativo"}</td>
          <td>{item.title}</td>
          <td>{item.category.name}</td>
          <td>{item.price}</td>
          <td>{item.discount_price}</td>
          <td>{item.discount_price_percent}</td>
          <td><Button onClick={()=> updateProducts(item)}>Editar</Button>  |  <Button onClick={()=> deleteProd(item)}>Excluir</Button></td>
          </tr>
      ))
  const updateProducts = (item) => {
      setIsForm(true)
      setFormProducts(item)

  }
  
  const ListProducts = ()=>(
    <>
    <Button onClick={()=> {setIsForm(true); setFormProducts({})}}>Criar</Button>
    <hr />
    <Table bordered hover size="sm">
    <thead>
        <tr>
        <TableH>Status</TableH>
        <TableH>Título</TableH>
        <TableH>Categoria</TableH>
        <TableH>Preço</TableH>
        <TableH>Preço com desconto</TableH>
        <TableH>Percentual de desconto</TableH>
        <TableH>Ações</TableH>
        </tr>
    </thead>
    <tbody>
        {listMount()}
    </tbody>
    </Table>
    </>
)
  const handleChange = (attr) => {
    const {value, name} = attr.target
    setFormProducts({
      ...formProducts,
      [name]:value
    })
    return
}

const FormProduct = () => (
  <>
  <Button onClick={()=> {setIsForm(false); setRefresh(true)}}>Lista</Button>
  <hr />
      <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Status</Form.Label>
              <Form.Control onChange={handleChange} name='status' value={formProducts.status || ''} type="boolean" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Título</Form.Label>
              <Form.Control onChange={handleChange} name='title' value={formProducts.title || ''} type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Categoria</Form.Label>
              <Form.Control onChange={handleChange} name='category' value={formProducts.category?.name || ''} type="text"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Preço</Form.Label>
              <Form.Control onChange={handleChange} name='price' value={formProducts.price || ''} type="number" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Preço com desconto</Form.Label>
              <Form.Control onChange={handleChange} name='discount_price' value={formProducts.discount_price || ''} type="number" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Percentagem de desconto</Form.Label>
              <Form.Control onChange={handleChange} name='discount_price_percent' value={formProducts.discount_price_percent || ''} type="number" />
          </Form.Group>
          <Button variant="primary" onClick={submitProduct}>
              Enviar
          </Button>
      </Form>
  </>

)
const reqType = (data) => data._id ? patchProducts(data._id,data) : postProducts(data) 
const submitProduct = async () => {
  try {
      await reqType(formProducts)
      message('Sucesso!',formProducts._id ? `O produto ${formProducts.title} foi alterado com sucesso.`:`O produto ${formProducts.title} foi criado com sucesso.`,'success')
      }
      
   catch (error) {
      message('Erro!',formProducts._id ? 'Seu Produto não foi alterado.':'Seu Produto não foi criado.','error') 
  }
}
const message = (title, message, icon) => {
  Swal.fire(
      title,
      message, 
      icon
      )
}
const deleteProd = async (obj) => {
  Swal.fire({
      title: `Tem certeza que deseja deletar ${obj.title}?`,
      text: "Esta ação não é reversível!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then(async (result) => {
        if (result.isConfirmed) {
          deleteProducts(obj._id)
          .then(() => {                    
              message('Deletado!', `Produto ${obj.title} deletado com sucesso`,'success')
              setRefresh(true)
          })
          .catch(() => message('Erro!','A categoria não foi deletada','error'))
          }
          
    })
}
return (
  <>
  {isForm ? FormProduct() : ListProducts()}
  </>
)
}

// Styled Components
const TableH = styled.th`
background:#000;
color:#ccc; 
border:none;
:nth-child(1){width:10%}
:nth-child(2){width:20%}
:nth-child(3){width:20%}
:nth-child(4){width:10%}
:nth-child(5){width:10%}
:nth-child(6){width:10%}
:nth-child(7){width:10%}
`


