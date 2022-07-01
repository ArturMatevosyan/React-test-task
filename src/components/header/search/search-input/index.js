import React from "react";

const SearchInput = ({searchInp})=>{
    return(
        <div className="search-input" >
            <input type="text" placeholder="Search ..." style={{width: `${searchInp ? 0 : "95%"}`}}/>
        </div>
    )
}
export default SearchInput;