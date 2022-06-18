import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Logo = ()=>{
    return(
        <Link to="/" className="logo" >
            <img src={logo}/>
        </Link>
    )
}
export default Logo;