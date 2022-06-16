import React from "react";
import { Link } from "react-router-dom";
const LoginButton = ()=>{
    return(
        <div className="login-button">
            <Link to="/login_Path" className="login_button-title">Login</Link>
        </div>
    )
}
export default LoginButton;