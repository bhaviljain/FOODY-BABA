// import { info } from "autoprefixer";
import { Suspense, lazy, useEffect, usestate , useContext} from 'react';
import ReactDOM from 'react-dom/client';
import React from "react";
import Header from './components/Header';
import Body from './components/Body';
import Aboutus from './components/About';
import Contact from './components/Contact';
import {Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Error from './components/Error';
// import Layout from './Layout';
import { RestaurantMenu } from './components/RestaurantMenu';
import { Yourorder } from './components/Yourorder';
import Shimmer from './components/shimmer';
import UserContext from "../utils/userContext"
import { Provider } from 'react-redux';
import addStore from '../utils/addStore';
import { Cart } from './components/Cart';
// import Grocery from './components/Grocery';
// import Layout from './Layout';
//RESTAURANT DATA
const Grocery =lazy(()=>import('./components/Grocery'));

const AppLayout =()=>{

    const [username , setUsername] = React.useState()
useEffect = (() =>{
// // authentication
const data ={
    name: "Bhavil",
}
setUsername(data.name)
},[])

    return (
 
 <Provider store={addStore}>
     <UserContext.Provider value={{loggedUser: username,setUsername}}>
        <div className="app">
       
        <Header />
        <Outlet />
        </div>
        </UserContext.Provider>
   
        </Provider>

    )
}

const Router = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,
        children:[
            {
path: '/',
element: <Body />,
            },
         
{
path : "/About",
element: <Aboutus />,
errorElement: <Error />

},
{
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />

},
{
    path:"/restaurants/:resid",
    element: <RestaurantMenu />
},
{
    path:"/yourorder",
    element:<Yourorder />
},
{
    path:"/Grocery",
    element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>
},
{
path:'/Cart',
element:<Cart/>
},,
   
],
errorElement: <Error />

}
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={Router} />)