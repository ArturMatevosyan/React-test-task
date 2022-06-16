import React from "react";

const SectionItem = ({item})=>{
    return(
        <div className="section-item">
            <a href="*">
                <img src={item.imgMain}/>
            </a>
            <div className="item-title">{item.subtitle}</div>
        </div>
     )
}
export default SectionItem;