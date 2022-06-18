import React from "react";

const ItemImages = ( {item} )=>{
    return(
        <div className="item_img-container">
                <img src={item.itemImage}/>
        </div>
     )
}
export default ItemImages;