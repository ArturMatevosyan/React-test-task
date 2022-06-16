import React, { useContext } from "react";
import { Login_State } from "../../../../constants";
import { LoginGroupContext, setLoginContext } from "../../../login";
    
const FormBottom = ()=>{
    
    let log = useContext(LoginGroupContext);
    let setLog = useContext(setLoginContext);
    
    return(
        <div className="button-bottom">
            <div onClick={(()=>{
                {log.buttonLeft==="Forgotten password?" ? setLog(Login_State.Forgotten_Password) : setLog(Login_State.Login_)}
            })}>
                {log.buttonLeft}
            </div>
            <div onClick={(()=>{
                setLog(Login_State.Sign_Up);
            })} >
                {log.buttonRight}
            </div>
        </div>
    )
}
export default FormBottom;