import React from "react";
import plus from "../../../../../../assets/images/plus.png";
import minus from "../../../../../../assets/images/minus.png";
const Counter = ({item})=>{
    return(
        <div className="product_counter">
            <div className="btn-minus">
                <img src={minus}/>
            </div>
            <div className="btn-quantity">{item.itemQuantity}</div>
            <div className="btn-plus">
                <img src={plus}/>
            </div>
        </div>
                                
     )
}
export default Counter;