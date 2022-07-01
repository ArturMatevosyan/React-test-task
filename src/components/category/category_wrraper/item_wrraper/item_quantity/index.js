import React from "react";

const ItemQuantity = ({item})=>{
    return(
        <div className="item_quantity">
            <span>{item.itemQuantity} {item.weight}</span>
        </div>
     )
}
export default ItemQuantity;