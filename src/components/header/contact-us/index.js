import React from "react";
import phone from "../../../assets/images/phone.jpg";
const ContactUs = ()=>{
    return(
        <a href="*" className="contact-us">
            <div className="contact-us_cont">
                <span>077665460</span>
                <div className="phone-img">
                    <img src={phone}/>
                </div>
            </div>
            
            
        </a>
    )
}
export default ContactUs;