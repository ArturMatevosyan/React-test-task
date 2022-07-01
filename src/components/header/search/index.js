import React from "react";
import search from "../../../assets/images/search.jpg"
import SearchInput from "./search-input";

const Search = ({searchInp,setSearchInp})=>{
    return(
        <div className="search">
            <SearchInput searchInp={searchInp}/>
            {searchInp ? <img src={search} onClick={()=>{
                setSearchInp(false)
            }}/> : <span onClick={()=>{
                setSearchInp(true)
            }}>X</span>}
            
        </div>
    )
}
export default Search;