import React from 'react'

export default () => {
  return (
    <>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow">
              <div className="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                {/* <img className="img-profile rounded-circle" src="img/undraw_profile.svg" /> */}
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


