import React from 'react'
import {getUser, removeToken} from '../../../config/auth'
import {DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import history from '../../../config/history'


const userName = () => {
  let pdata = JSON.parse(getUser())


  return pdata.name
}
const logout = () => {
  removeToken()
  history.push('/')
}   

export default () => {
  return (
    <>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow">
              <div className="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span className="mr-2 d-none d-lg-inline text-gray-600 small"> {['Primary'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={userName()}
      >
        <Dropdown.Item eventKey="1">teste 1</Dropdown.Item>
        <Dropdown.Item eventKey="2">teste 2</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={()=>logout()} eventKey="4">Sair</Dropdown.Item>
      </DropdownButton>
    ),
  )}</span>
              
              </div>
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <div className="dropdown-item" >
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </div>
                <div className="dropdown-item" >
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </div>
                <div className="dropdown-item" >
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  Activity Log
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-item"  data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </div>
              </div>
            </li>
          </ul>
        </nav>
       
    </>
  )
}


