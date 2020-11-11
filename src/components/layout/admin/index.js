import React from 'react'
import "../../../assets/css/sb-admin-2.css"
import SideBar from "./sidebar"
import Header from "./header"

export default ({children, Menu}) => {
  return (      
    <div id="wrapper">
        <SideBar Menu={Menu}/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content"> 
                <Header/>
                <div className="container-fluid">
                    {children}
                </div>
            </div>        
        </div>
    </div>
    
  )
}

