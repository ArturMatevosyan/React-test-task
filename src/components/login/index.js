import React, { useState } from "react";
import { Login_State } from "../../constants";
import Form from "./form";


export const LoginGroupContext=React.createContext();
export const setLoginContext=React.createContext();
const Login = ()=>{
    
    const[login,setLogin] =useState(Login_State.Login_);
    
    
    return(
        <div className="login-cont">
            <div className="login-cont_child">
                <h3>{login.title}</h3>
                <div className="form-cont">
                    <LoginGroupContext.Provider value={login}>
                        <setLoginContext.Provider value={setLogin}>
                            <Form login={login}/>
                        </setLoginContext.Provider>
                    </LoginGroupContext.Provider>
                </div>
            </div>
        </div>
    )
}
export default Login;