import React from "react";

const CategoryTitle = ({itemSect})=>{
    
    return(
        <div className="category_title">
        <h3>{itemSect.subtitle}</h3>
        </div>
     )
}
export default CategoryTitle;