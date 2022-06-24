import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChangePathContext, PathContext } from "../../../App";
const LoginButton = ()=>{
    let setPath = useContext(ChangePathContext);
    let path = useContext(PathContext);
    
    return(
        <div className="login-button">
            <Link onClick={(()=>{
                setPath("/login_Path")
            })} to="/login_Path" className="login_button-title">Login</Link>
        </div>
        
    )
}
export default LoginButton;