import React, { useState } from "react";
import ItemEnterDone from "./item-enter-done";
import ItemPrice from "./item-price";
import ItemWrraperTitle from "./item-wrraper_title";
import ItemImages from "./item_images";
import ItemQuantity from "./item_quantity";

const ItemWrraper = ({item})=>{
    const[active,setActive] = useState(false);
    return(
        <div className="container_item" onClick={()=>{
                setActive(true)
            }}>
            {active? <ItemEnterDone item={item} setActive={setActive}/> : <div className="section-item_container">
                <ItemImages item={item}/>
                <div className="content_wrraper">
                    <span className="border-left"></span>
                    <ItemWrraperTitle item={item}/>
                    <div className="quantity_price">
                        <ItemQuantity item={item}/>
                        <ItemPrice item={item}/>
                    </div>
                </div>
            </div>}
        </div>
     )
}
export default ItemWrraper;