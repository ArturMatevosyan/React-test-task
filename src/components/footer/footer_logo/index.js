import React from "react";
import footerlogo from "../../../assets/images/footerlogo.png";
const FooterLogo = ()=>{
    
    return(
        <div className="footer_logo-container">
            <div className="footer_logo">
                <img src={footerlogo}/>
            </div>
            <span></span>
        </div>
    )
}
export default FooterLogo;