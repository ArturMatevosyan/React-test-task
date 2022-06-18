import React from "react";

const ItemWrraperTitle = ({item})=>{
    return(
        <div className="item_title_container">
            <h3>{item.itemTitle}</h3>
        </div>
     )
}
export default ItemWrraperTitle;