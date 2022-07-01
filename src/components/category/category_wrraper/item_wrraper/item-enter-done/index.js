import React, { useEffect, useState } from "react";
import ItemPrice from "../item-price";
import ItemWrraperTitle from "../item-wrraper_title";
import ItemQuantity from "../item_quantity";
import AddButton from "./add-button";
import Counter from "./counter";
import TotalPrice from "./total-price";


const ItemEnterDone = ({item})=>{
    const [count, setCount] = useState(item.itemPrice);
    const [quantity, setQuantity] = useState(item.itemQuantity);

    
    
    return(
        <div className="section-item-enter_done">
            <div className="item-enter_done_top">
                <div className="title_inner">
                    <ItemWrraperTitle item={item}/>
                    <div className="quantity-price-inner">
                        <ItemQuantity item={item}/>
                        <ItemPrice item={item}/>
                    </div>
                </div>
            </div>
            <div className="product_actions">
                <div className="product_counter-container">
                    <Counter count={count} quantity={quantity} setQuantity={setQuantity} setCount={setCount} item={item}/>
                    <TotalPrice count={count} item={item}/>
                    <AddButton item={item}/>
                    </div>
                </div>
            </div>
     )
}
export default ItemEnterDone;