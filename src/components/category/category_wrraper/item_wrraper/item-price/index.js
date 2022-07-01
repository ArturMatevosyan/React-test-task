import React from "react";

const ItemPrice = ({item})=>{
    return(
        <div className="item-price">
            <span>{item.itemPrice} AMD</span>
        </div>
     )
}
export default ItemPrice;