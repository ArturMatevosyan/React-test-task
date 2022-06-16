import React from "react";
import FooterNav from "./footer_nav";
import ContactUs from "../../header/contact-us";
import FooterLinks from "./footer-links";

const FooterContent = ()=>{
    
    return(
        <div className="footer_content">
            <div className="footer_nav">
                <FooterNav/>
            </div>
            <div className="phone-links">
                <ContactUs/>
                <span className="line">|</span>
                <FooterLinks/>
            </div>
        </div>
    )
}
export default FooterContent;