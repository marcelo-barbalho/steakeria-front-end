import React from "react";
import Dash from "./dash";
import LayoutAdmin from "../../components/layout/admin/"
import { Route } from "react-router-dom";
import {BsFillGearFill, BsReverseLayoutTextWindowReverse} from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'
import {BiBarcode} from 'react-icons/bi'
import {ImQrcode} from 'react-icons/im'



const PainelMenu = [  
  {
    name: 'Dashboard',
    path: '',
    icon: <RiDashboardFill/>,
    component: Dash
  },
  {
    name: 'Banner',
    path: '/banner',
    icon: <BsReverseLayoutTextWindowReverse/>,
    component: () => <h1>Banner</h1>
  },
  {
    name: 'Categorias',
    path: '/category',
    icon: <ImQrcode/>,
    component: () => <h1>Categorias</h1>
  },
  {
      name: 'Produtos',
      path: '/products',
      icon: <BiBarcode/>,
      component: () => <h1>Produtos</h1>
  },
  {
      name: 'Serviços',
      path: '/services',
      icon: <BsFillGearFill/>,
      component: () => <h1>Serviços</h1>
  },
]


export default (props) => {
  console.log()
  return (
    <LayoutAdmin Menu={PainelMenu}>
      {/* <Route exact baseName={props.match.path} path={props.match.path + "/"} component={Dash}/> */}
     
      {PainelMenu.map((item, i) =>(
        <Route key={i} exact baseName={props.match.path} path={props.match.path + item.path} component={item.component}/>
        ))}
    </LayoutAdmin>
  );
};
