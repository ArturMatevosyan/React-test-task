import React from "react";
import plus from "../../../../../../assets/images/plus.png";
import minus from "../../../../../../assets/images/minus.png";
const Counter = ({item,setCount,count,quantity,setQuantity})=>{
const plusFunc = ()=>{
    if(item.weight==="p"){
        setCount(count+item.itemPrice);
        setQuantity(() => quantity+item.itemQuantity)
    }else{
        setCount(count+item.itemPrice/2);
        setQuantity(() => quantity+item.itemQuantity/2)
    }
        
};
const minusFunc = ()=>{
    if(item.weight==="p"){
        if(quantity>0 && quantity-item.itemQuantity !== 0){
            setCount(count-item.itemPrice);
            setQuantity(() => quantity-item.itemQuantity) 
        }
    }else if(quantity>0 && quantity-item.itemQuantity/2 !== 0){
        setCount(count-item.itemPrice/2);
        setQuantity(() => quantity-item.itemQuantity/2) 
    }
}
    
    return(
        <div className="product_counter">
            <div className="btn-minus" onClick={minusFunc}>
                <img src={minus}/>
            </div>
            <div className="btn-quantity">{quantity} {item.weight}</div>
            <div className="btn-plus" onClick={plusFunc}>
                <img src={plus}/>
            </div>
        </div>
                                
     )
}
export default Counter;