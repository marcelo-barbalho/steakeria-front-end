import React from "react";
import Dash from "./dash";
import AdminProducts from './products'
import LayoutAdmin from "../../components/layout/admin"
import { Route } from "react-router-dom";
import {BsFillGearFill, BsReverseLayoutTextWindowReverse} from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'
import {BiBarcode} from 'react-icons/bi'
import {ImQrcode} from 'react-icons/im'
import Categories from './categories'



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
    component: Categories
  },
  {
      name: 'Produtos',
      path: '/products',
      icon: <BiBarcode/>,
      component: AdminProducts
  },
  {
      name: 'Serviços',
      path: '/services',
      icon: <BsFillGearFill/>,
      component: () => <h1>Serviços</h1>
  },
]


export default (props) => {
  return (
    <LayoutAdmin Menu={PainelMenu}>     
      {PainelMenu.map((item, i) =>(
        <Route key={i} exact baseName={props.match.path} path={props.match.path + item.path} component={item.component}/>
        ))}
    </LayoutAdmin>
  );
};
