import React, { useContext }  from "react";
import SectionItem from "./section-item";
import { Section } from "../../../constants";
import { ChangePathContext, PathContext } from "../../../App";


    
const MenuSection = () =>{
    let setPath = useContext(ChangePathContext);
    let path = useContext(PathContext);
    return(
        <div className={`menu-section ${path === '/' ? '' : 'empty'}`} >
            {Section.map((item)=>{
                return <SectionItem item={item} key={item.id}/>
            })}
        </div>
    )
}
export default MenuSection;