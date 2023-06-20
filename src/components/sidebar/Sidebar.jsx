import React, {Children} from 'react'

import home from "../assets/UI icon/home/filled.svg"
import products from"../assets/UI icon/diamond/light.svg"
import customers from "../assets/UI icon/profile_circled/light.svg"
import shop from "../assets/UI icon/store/filled.svg"
import income from "../assets/UI icon/pie_chart/filled.svg"
import promote from "../assets/UI icon/promotion/filled.svg"
import "./Sidebar.css"
import { BrowserRouter, Link, NavLink, Router } from 'react-router-dom'
const Sidebar = ({Children}) => {

    const menuItems =[
        {
            path :"/home",
            name :" Home",
            icon : <img src={home} alt="home" /> 
        },

        {
            path :"/products",
            name :"Products ",
            icon :  <img src={products} alt="products" /> 
        },

        {
            path :"/customers",
            name :" Customers",
            icon : <img src={customers} alt="customers" /> 
        },

        {
            path :"/shop",
            name :" Shop",
            icon : <img src={shop} alt="shop" /> 
        },

        {
            path :"/income",
            name :" Income",
            icon : <img src={income} alt="income" /> 
        },

        {
            path :"/Promote",
            name :" promote",
            icon : <img src={promote} alt="promote" /> 
        },

        
    ]
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            {/* <ul className='sidebarList'> */}
                <ul className='sidebarList'>
                    

                    
                    <BrowserRouter>
                    <Link to="/home" className='link'>
                     <li className='sidebarListitem'>
                        
                        <img src={home} alt="home" /> 
                        
                        Home
                    
                        </li>
                        </Link>
                        

                       
                        
                        
                        <Link to="/products" className='link'>

                        <li className='sidebarListitem'>
                        <img src={products} alt="products" /> 
                        Products
                        </li>
                        </Link>

                        <Link to="/customers" className='link'>

                        <li className='sidebarListitem'>
                        <img src={customers} alt="customers" /> 
                        Customers
                        </li>
                        </Link>

                        <Link to="/shop" className='link'>

                        <li className='sidebarListitem'>
                        <img src={shop} alt="shop" /> 
                        Shop
                        </li>
                        </Link>

                        <Link to="/income" className='link'>

                        <li className='sidebarListitem'>
                        <img src={income} alt="income" /> 
                        Income
                        </li>
                        </Link>

                        <Link to="/promote" className='link'>

                        <li className='sidebarListitem'>
                        <img src={promote} alt="promote" /> 
                        promote





                    </li>
                    </Link>

                    </BrowserRouter>

                    

                </ul>
{/* {menuItems.map((item, index)=>(
    <BrowserRouter>
    <NavLink
    to={item.path}
    key={index}
    classname="link"
    activeclassName="active">

        <div className='icon'>
            {item.icon}
        </div>
        <div className='link-text'>
            {item.name}

        </div>
    </NavLink>
    </BrowserRouter>

    

    

))}

</ul> */}



            </div>
        </div>
      
{/* <main>{Children}</main> */}
       
    </div>
  )
}

export default Sidebar;
