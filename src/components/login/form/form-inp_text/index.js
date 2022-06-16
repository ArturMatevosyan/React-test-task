import React, { useContext } from "react";
import {LoginGroupContext} from "../../../login/";
const FormInpText = ()=>{
    let log = useContext(LoginGroupContext);
    return(
    <>
            {log.inputTitle.map((e)=>{
                return( 
                    <div className="input-cont" key={e.id}>
                        <p>
                            {e.text}
                        </p>
                        <input placeholder={e.placeholder} className="type-text"/>
                    </div>
    )})}
            </>
    )
}
export default FormInpText;