import React, { useEffect, useState,useContext} from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import UseOfffOn from "./useOfffOn";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

  const {loggedUser} = useContext(UserContext)
  const {loggedout} = useContext(UserContext)

  const OnlineStatus = UseOfffOn()
  console.log("header");
  const [loginbtn, setloginbtn] = useState("login");
  const [active, setactive] = React.useState("nav-menu")

  const CartItems = useSelector((store)=>store?.cart?.items)
  console.log(CartItems);

  useEffect(() => {
    console.log("useEffect called"); // use effect exxample
  }, [loginbtn])
  return (
    // NAV
    <div className="flex">
      <div className="logo-container">

        <img className="h-20" src={LOGO_URL} />
      </div>

      <ul className="flex bg-amber-500 w-[100%]	h-20 py-2 justify-between">
        <li className="px-4">Current Status : {OnlineStatus ? "🟢" : "🔴"}</li>
        <li className="px-4 hover:font-bold"><Link to='/'> HOME </Link></li>
        {/* USE LINK coz link does not load the pages but a tag loads the pages */}
        <li className="nav-item hover:font-bold"><Link to='/About'>About Us</Link></li>

        <li className="px-4 hover:font-bold"><Link to='/contact'>Contact</Link></li>

        <li className="px-4 hover:font-bold"><Link to='/yourorder'>Your Order
        </Link></li>
        <li className="px-4 hover:font-bold"><Link to='/Grocery'>Grocery
        </Link></li>
        <li className="px-4 hover:font-bold"><Link to='/Cart'>Cart - ({CartItems?.length} items)
        </Link></li>
       

        <button className="mb-44 px-4 hover:font-bold"
          onClick={() => {
            loginbtn === "login" ? setloginbtn("user logged out (Login again)") : setloginbtn("login")
          
          }}
        > 
          {loginbtn}
        </button>
<li>
  {loggedUser}
</li>

      </ul>
    
    </div>

  )
}
export default Header;