import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChangePathContext, PathContext } from "../../../../App";
const FooterNav = ()=>{
    
    let setPath = useContext(ChangePathContext);
    let path = useContext(PathContext);
    
      
        
    return(
        <div className="footer_nav">
            <Link onClick={(()=>{
                setPath("/about");
            })} to="/about">About Us</Link>
            <Link onClick={(()=>{
                setPath("/privacy")
            })} to="privacy">Privacy</Link>
            <Link onClick={(()=>{
                setPath("/terms")
            })} to="/terms">Terms</Link>
        </div>
    )
}
export default FooterNav;