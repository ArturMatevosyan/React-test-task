import React  from "react";
import SectionItem from "./section-item";
import { Section } from "../../../constants";

    
const MenuSection = () =>{
    return(
        <div className="menu-section">
            {Section.map((item)=>{
                return <SectionItem item={item} key={item.id}/>
            })}
        </div>
    )
}
export default MenuSection;