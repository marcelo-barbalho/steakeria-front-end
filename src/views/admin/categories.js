import React, {useState, useEffect} from 'react'
import {getCategory, deleteCategory, postCategory, patchCategory} from '../../services/admin'
import {Table, Button, Form} from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'

export default (props) => {
    const [category, setCategory] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [formCategory, setFormCategory] = useState({})
   
    
    
    useEffect(()=> {
        setRefresh(false)
        let get = async () => { 
            const c = await getCategory()
              setCategory(c.data)
          }
        if (!refresh) {
            get()
        }

        return () => get =() =>{}
   
    }, [refresh])

    const sortCategory = category.sort((a,b)=>{
        if (a.name>b.name) {
            return 1
        }
        if (a.name<b.name) {
            return -1
        }
        return 0
    })
    const listMount = () => 
        sortCategory.map((item, i)=>(
            <tr key={i}>
            <td>{item.name}</td>
            <td><Button onClick={()=> updateCategory(item)}>Editar</Button>  |  <Button onClick={()=> deleteCatg(item)}>Excluir</Button></td>
            </tr>
        ))
    const updateCategory = (item) => {
        setIsForm(true)
        setFormCategory(item)

    }
    const List = ()=>(
        <>
        <Button onClick={()=> {setIsForm(true); setFormCategory({})}}>Criar</Button>
        <hr />
        <Table bordered hover size="sm">
        <thead>
            <tr>
            <TableH>Categorias</TableH>
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
        setFormCategory({
          ...formCategory,
          [name]:value
        })
        return
    }
    
    const FormCatg = () => (
        <>
        <Button onClick={()=> {setIsForm(false); setRefresh(true)}}>Lista</Button>
        <hr />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome da categoria</Form.Label>
                    <Form.Control onChange={handleChange} name='name' value={formCategory.name || ''} type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Url do ícone</Form.Label>
                    <Form.Control onChange={handleChange} name='icon' value={formCategory.icon || ''} type="text" />
                </Form.Group>
                <Button variant="primary" onClick={submitCategory}>
                    Enviar
                </Button>
            </Form>
        </>

    )
    const reqType = (data) => data._id ? patchCategory(data._id,data) : postCategory(data) 
    const submitCategory = async () => {
        try {
            await reqType(formCategory)
            message('Sucesso!',formCategory._id ? 'Sua categoria foi alterada com sucesso.':'Sua categoria foi criada com sucesso.','success')
            }
            
         catch (error) {
            message('Erro!',formCategory._id ? 'Sua categoria não foi alterada.':'Sua categoria não foi criada.','error') 
        }
    }
    const message = (title, message, icon) => {
        Swal.fire(
            title,
            message, 
            icon
            )
    }
    const deleteCatg = async (obj) => {
        Swal.fire({
            title: `Tem certeza que deseja deletar a categoria ${obj.name}?`,
            text: "Esta ação não é reversível!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'
          }).then(async (result) => {
              if (result.isConfirmed) {
                deleteCategory(obj._id)
                .then(() => {                    
                    message('Deletado!','A categoria foi deletada com sucesso','success')
                    setRefresh(true)
                })
                .catch(() => message('Erro!','A categoria não foi deletada','error'))
                }
                
          })
    }

  return (
    <>
    {isForm ? FormCatg() : List()}
    </>
  )
}

// Styled Components
const TableH = styled.th`
background:#000;
color:#ccc; 
border:none;
:nth-child(1){width:80%}
`

