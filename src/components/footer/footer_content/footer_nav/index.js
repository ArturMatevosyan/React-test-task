import React from "react";
import { Link } from "react-router-dom";
const FooterNav = ()=>{
    
    return(
        <div className="footer_nav">
            <Link to="/about">About Us</Link>
            <Link to="privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
        </div>
    )
}
export default FooterNav;