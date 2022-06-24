import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChangePathContext, PathContext } from "../../../App";
import logo from "../../../assets/images/logo.png";

const Logo = ()=>{
    let setPath = useContext(ChangePathContext);
    let path = useContext(PathContext);
    return(
        <Link onClick={(()=>{
            setPath("/")
        })} to="/" className="logo" >
            <img src={logo}/>
        </Link>
    )
}
export default Logo;