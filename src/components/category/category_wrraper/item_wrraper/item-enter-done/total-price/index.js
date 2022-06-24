import React from "react";

const TotalPrice = ({item})=>{
    return(
        <div className="total-price-cont">
            <span className="total-price">Total {item.itemPrice}</span>
        </div>
                                
     )
}
export default TotalPrice;