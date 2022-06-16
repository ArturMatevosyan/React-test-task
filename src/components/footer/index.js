import React from "react";
import FooterContent from "./footer_content";
import FooterLogo from "./footer_logo";

const Footer = ()=>{
    
    return(
        <div className="footer">
            <div className="footer_container">
                <FooterLogo/>
                <FooterContent/>
            </div>
        </div>
    )
}
export default Footer;