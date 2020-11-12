import React, {useState, useEffect} from 'react'
import {getCategory, deleteCategory} from '../../services/admin'
import {Table, Button, Form} from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'

export default () => {
    const [category, setCategory] = useState([])
    const [update, setUpdate] = useState(false)
    const [create, setCreate] = useState(false)
    const [formCategory, setFormCategory] = useState({})
    
    
    useEffect(()=> {
        setUpdate(false)
        let get = async () => { 
            const c = await getCategory()
              setCategory(c.data)
          }
        if (!update) {
            get()
        }

        return () => get =() =>{}
   
    }, [update])

    const List = ()=>(
        <>
        <Button onClick={()=> setCreate(true)}>Criar</Button>
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
        setFormCategory({
          ...formCategory,
          [attr.target.name]:[attr.target.value]
        })
    }

    const NewCatg = () => (
        <>
        <Button onClick={()=> setCreate(false)}>Lista</Button>
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
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </>

    )

    const listMount = () => 
        category.map((item, i)=>(
            <tr key={i}>
            <td>{item.name}</td>
            <td>Editar  |  <Button onClick={()=> deleteCatg(item)}>Excluir</Button></td>
            </tr>
            ))
    

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
                    setUpdate(true)
                    message('Deletado!','A categoria foi deletada com sucesso','success')
                })
                .catch(() => message('Erro!','A categoria não foi deletada','error'))
                }
                
          })
    } 

  return (
    <>
    {create ? <NewCatg /> : <List/>}
    </>
  )
}

const TableH = styled.th`
background:#000;
color:#ccc; 
border:none;
:nth-child(1){width:80%}
`

