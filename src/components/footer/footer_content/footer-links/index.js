import React from "react";
import message from "../../../../assets/images/message.png";
import facebook from "../../../../assets/images/facebook.png";
import insta from "../../../../assets/images/insta.png";

const FooterLinks = ()=>{
    
    return(
        <div className="footer_links">
            <a href="mailto:artmatevosyan98@gmail.com">
                <img src={message}/>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook}/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <img src={insta}/>
            </a>
        </div>
    )
}
export default FooterLinks;