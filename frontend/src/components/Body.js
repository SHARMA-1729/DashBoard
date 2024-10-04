import React from 'react'
import Login from './Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
// import "react-toastify/dist/ReactToastify.css";
import Wallet from './wallet.js'
import Register from './signup.js';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Browse from './browse.js';
import Update from './updateprof.js';
import Account from './account';
import Menu from './menu.js'
import Cart from './cart.js';
import Payment from './paymentpage.js'
import Order from './order.js'
import OderDetail from './OrderDetails.js'
// import MenuItem from './menuitem.js'
// import ABS from './abs.js';
import Dash from './Dashboard.js'

const Body = () => {

    const appRouter=createBrowserRouter([{
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    {
        path:"/update",
        element:<Update/>
    },
    {
        path:"/account",
        element:<Account/>
    },
        
    {
        path:"/restaurant/:id/menu",
        element:<Menu/>
    },
    {
        path:"/cart",
        element:<Cart/>
    },
    {
        path:"/payment",
        element:<Payment/>
    },
    {
        path:"/order",
        element:<Order/>
    },
    {
        path:"/orderdetail",
        element:<OderDetail/>
    },

    // {
    //     path:"/restaurant/:id",
    //     element:<MenuItem/>
    // },
    {
        path:"/dashboard",
        element:<Dash/>
    },
    {
        path:"/wallet",
        element:<Wallet/>
    },
    
    ])

  return (
  <div>
   <RouterProvider router={appRouter}/>
  </div>
  )
}

export default Body