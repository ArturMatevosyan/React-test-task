import React, { useState } from "react";
import SectionItem from "./section-item";

import { Section } from "../../../constants";

    
const MenuSection = () =>{
    const[menuItem,setMenuItem] = useState(Section)
    return(
        <div className="menu-section">
            {menuItem.map((item)=>{
                return <SectionItem item={item} key={item.id}/>
            })}
        </div>
    )
}
export default MenuSection;