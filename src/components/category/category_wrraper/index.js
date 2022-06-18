import React from "react";
import ItemWrraper from "./item_wrraper";

const CategoryWrraper = ( {itemSect} )=>{
    return(
        <div className="category_section-content">
            {itemSect.item.map((item)=>{
                return(
                    <div key={item.id} className="product-items">
                        <ItemWrraper item={item}/>
                    </div>
                    )
                })}
            </div>
        )
}
export default CategoryWrraper;