import React, {useState} from 'react'
import loginImg from '../../assets/images/medium-rare-steak-shutterstock_706040446.jpg'
import styled from 'styled-components'
import {RiHome4Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import auth from '../../services/auth' 
import {saveToken} from '../../config/auth'
import history from '../../config/history'
import http from '../../config/config'

export default () => {

  const [form, setForm] = useState({
    email:'root@teste.com',
    password:'123456'
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (attr) => {
      setForm({
        ...form,
        [attr.target.name]:[attr.target.value]
      })
  }
  const isValidSubmit = () => form.email && form.password

  const submitLogin = async (e) => {
     e.preventDefault()
     if (isValidSubmit()) {
       setLoading(true)
       try {
         const {data} = await auth(form)
         const {token, user} = data
         http.defaults.headers['x-auth-token'] = token
         saveToken(token, user)
         history.push('/admin')
       } catch (error) {
        setLoading(true)
        console.log("não funcionou", error)
       }
     } 
  }


  return (
    <>
      <Login>
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Bem Vindo a Stakeria!</h1>
                      </div>
                      <Form className='user'>
                        <Form.Group controlId="formBasicEmail">                        
                          <Form.Control type="email" className="form-control form-control-user" onChange={handleChange} name='email' placeholder="Enter email" value={form.email || ""} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" >                        
                          <Form.Control type="password" className="form-control form-control-user" onChange={handleChange} name='password' placeholder="Password" value={form.password || ""} />
                        </Form.Group>
                        <Button onClick={submitLogin} disabled={!isValidSubmit()}  variant="primary" className="btn btn-primary btn-user btn-block" type="submit">
                          {loading ? 'Carregando…' : 'Enviar'}
                        </Button>
                      </Form>
                      <hr />
                      <div className="text-center">
                        <Link to={'/'} className="small">
                          <RiHome4Fill/>Página Inicial
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Login>

    </>
  )
}


const Login = styled.div.attrs({className:'container'}) `
.bg-login-image{
    background:url(${loginImg}) !important
}

`
