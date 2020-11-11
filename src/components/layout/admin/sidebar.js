import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



export default ({Menu}) => {
  return (
    <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link to ='/admin' className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">Steakeria Admin</div>
      </Link>
      <UnderLine className="sidebar-divider my-0" />        
        {Menu.map((item, i) =>(
          <SideBarStyle key ={i}>
          <li  className="nav-item">
            <Link to= {'/admin' + item.path} className="nav-link">
          <Icon> {item.icon ? item.icon : ""} </Icon>
            <span>{item.name}</span>
            </Link>
          </li>
          </SideBarStyle>
        ))}
    </ul>
    </>
  )
}

const UnderLine  =  styled.hr`
padding:5px;
`

const SideBarStyle = styled.div`
.nav-link{
 padding: 0.4rem 1rem !important;
 display:flex !important;
 align-items:center,
}
`
const Icon = styled.div`
margin: -0.3rem 0.5rem 0 0.5rem !important

`

