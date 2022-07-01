import React from "react";

const TotalPrice = ({item,count})=>{
    return(
        <div className="total-price-cont">
            <span className="total-price">Total {count} AMD</span>
        </div>
                                
     )
}
export default TotalPrice;