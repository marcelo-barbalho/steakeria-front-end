import React, {useState, useEffect} from 'react'
import {getProducts, deleteProducts, postProducts, patchProducts, getCategory} from '../../services/admin'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import {Form, Button, Table, ProgressBar} from 'react-bootstrap'

export default () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [formProducts, setFormProducts] = useState({})
    const [category, setCategory] = useState([])
    const [progress, setProgress] =useState(0)

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
  
    useEffect(()=> {
        setRefresh(false)
        let get = async () => { 
            const c = await getCategory()
              setCategory(c.data)
          
            }
            get()
        

        return () => get =() =>{}
   
    }, [])
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
    const {value, name, checked} = attr.target

    const isChecked = name ==='status' || name==='highlight'
    
    if (name === 'photo') {
      let file = attr.target.files[0]
      setFormProducts({
        ...formProducts,
        'photo' : file
      })  
    }

    setFormProducts({
      ...formProducts,
      [name]:isChecked ? checked : value
    })
    return
}

const FormProduct = () => (
  <>
  <Button onClick={()=> {setIsForm(false); setRefresh(true)}}>Lista</Button>
  <hr />
      <Form>
          <Form.Group >
              <Form.Label>Título</Form.Label>
              <Form.Control onChange={handleChange} name='title' value={formProducts.title || ''} type="text" />
          </Form.Group>
          <Form.Group >
              <Form.Label>Descrição curta</Form.Label>
              <Form.Control onChange={handleChange} name='description' value={formProducts.description || ''} type="text" />
          </Form.Group>
          <Form.Group >
              <Form.Label>Descrição completa</Form.Label>
              <Form.Control onChange={handleChange} as='textarea' name='complete_description' value={formProducts.complete_description || ''} type="text"/>
          </Form.Group>
          <Form.Group controlId="SelectCustomSizeSm">
            <Form.Label>Selecione uma categoria</Form.Label>
            <Form.Control as="select" size="sm" name='category' custom onChange={handleChange}>
              {category.map((catg, i) => (
                <option defaultValue='0' selected={formProducts.category?._id === catg._id} key ={i} value={catg._id}>{catg.name}</option>

              ))}
            </Form.Control>
          </Form.Group>
          <hr/>
          <Form.Group >
              <Form.Label>Preço</Form.Label>
              <Form.Control onChange={handleChange}  name='price' value={formProducts.price || ''} type="number" />
          </Form.Group>
          <Form.Group >
              <Form.Label>Preço com desconto</Form.Label>
              <Form.Control onChange={handleChange} name='discount_price' value={formProducts.discount_price || ''} type="number" />
          </Form.Group>
          <Form.Group >
              <Form.Label>Percentagem de desconto</Form.Label>
              <Form.Control onChange={handleChange} name='discount_price_percent' value={formProducts.discount_price_percent || ''} type="number" />
          </Form.Group>
          <Form.Group>
          <Form.File label="Carregar foto" name='photo' type='file' onChange={handleChange}/>
          </Form.Group>
          <Form.Check 
            onChange={handleChange}
            type="checkbox"
            label="Destaque"
            id="custom-switch"
            name="highlight"
            checked={Boolean(formProducts.highlight || false)}
          />
          <Form.Check 
            onChange={handleChange}
            type="checkbox"
            label="Status"
            id=""
            name="status"
            checked={Boolean(formProducts.status || false)}
          />
          <hr/>
          {progress >0 ?<> <ProgressBar now={progress} />
          <hr/></>:""}
           
          <Button variant="primary" onClick={submitProduct}>
              Enviar
          </Button>
      </Form>
  </>

)
const reqType = (data, config) => data._id ? patchProducts(data._id,data, config) : postProducts(data, config) 
const submitProduct = async () => {
  let data = new FormData()
console.log(formProducts)

Object.keys(formProducts)
      .forEach(key => data.append(key,formProducts[key]))

const config = {
  onUploadProgress: function (progressEvent) {
    let sucessPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total)
    setProgress(sucessPercent)
  },
  headers:{
      'Content-type':'multipart/form-data'
  }
}


  reqType(data, config)
          .then((res) => (console.log(res)))
          .catch((err) => (console.log(err)))
  //   const obj = {
  //     ...formProducts,
  //     highlight:false,
  //     status:true
  //   }

  // try {
  //     await reqType(obj)
  //     message('Sucesso!',obj._id ? `O produto ${obj.title} foi alterado com sucesso.`:`O produto ${obj.title} foi criado com sucesso.`,'success')
  //     }
      
  //  catch (error) {
  //     message('Erro!',obj._id ? 'Seu Produto não foi alterado.':'Seu Produto não foi criado.','error') 
  // }
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
:nth-child(1){width:05%}
:nth-child(2){width:20%}
:nth-child(3){width:20%}
:nth-child(4){width:10%}
:nth-child(5){width:10%}
:nth-child(6){width:10%}
:nth-child(7){width:10%}

`


