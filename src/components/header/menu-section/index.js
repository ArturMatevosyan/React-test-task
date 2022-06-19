import React, { useContext }  from "react";
import SectionItem from "./section-item";
import { Section } from "../../../constants";
import { pathContext } from "../../../App";

    
const MenuSection = () =>{
    return(
        <div className="menu-section"  >
            {Section.map((item)=>{
                return <SectionItem item={item} key={item.id}/>
            })}
        </div>
    )
}
export default MenuSection;