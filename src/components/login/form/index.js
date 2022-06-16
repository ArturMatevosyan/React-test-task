import React from "react";
import FormBottom from "./form-bottom";
import FormButton from "./form-button";
import FormInpText from "./form-inp_text";


const Form = ()=>{
    
    return(
        <form>
            <FormInpText/>
            <FormButton/>
            <FormBottom/>
        </form>
    )
}
export default Form;