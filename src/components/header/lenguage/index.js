import React, { useState } from "react";
import globe from "../../../assets/images/globe.png"
import Country from "./Country";

const Lenguage = ()=>{
    const[countrySect,setCountrySect] = useState(false)
    return(
        <div className="lenguage">
            <img src={globe} onClick={()=>{
                setCountrySect(!countrySect)
            }}/>
            {countrySect ? <Country/> : ""}
        </div>
    )
}
export default Lenguage;