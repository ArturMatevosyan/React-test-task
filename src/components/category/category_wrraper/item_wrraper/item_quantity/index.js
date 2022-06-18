import React from "react";

const ItemQuantity = ({item})=>{
    return(
        <div className="item_quantity">
            <span>{item.itemQuantity}</span>
        </div>
     )
}
export default ItemQuantity;