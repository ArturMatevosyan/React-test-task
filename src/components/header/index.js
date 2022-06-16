import React, { useState } from "react"; 
import ContactUs from "./contact-us";
import Logo from "./logo";
import Search from "./search";
import Lenguage from "./lenguage";
import ShoppingCart from "./shopping-cart";
import LoginButton from "./login-button";
import MenuSection from "./menu-section";

const Header = ()=>{ 
 
    const[searchInp,setSearchInp]= useState(true)

    return( 
    <div className="header-head">
                <div className="header">
                    <div className="header-cont">
                        <div className="header-left">
                            <Logo/>
                        </div>
                        <div className="header-right">
                            {searchInp? <div className="section-contact_cont">
                                <ContactUs/>
                                <MenuSection/>
                            </div> : ""}
                            <div className="src-lng-cart-log_cont">
                            <Search searchInp={searchInp} setSearchInp={setSearchInp}/>
                            <Lenguage/>
                            <ShoppingCart/>
                            <LoginButton/>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="media-section_container">
                    <div className="media-section">
                        {searchInp?<MenuSection/> : ""}
                    </div>
                </div> 
            </div> 
            
        ) 
 }
 export default Header;