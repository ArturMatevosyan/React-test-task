import React, { useContext } from "react";
import { LoginGroupContext } from "../../../login";
const FormButton = ()=>{
    let log = useContext(LoginGroupContext);
    
    return(
        <div className="button-cont">
            <input type="submit" className="button" value={log.button}/>
        </div>
    )
}
export default FormButton;