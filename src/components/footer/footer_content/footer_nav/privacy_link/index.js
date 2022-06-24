import React from "react";
import { Privacy_Data } from "../../../../../constants/";
    const privacy = Privacy_Data;
const PrivacyLink =()=>{
    return(
        <div className="privacy_link">
            <div className="subtitle">
                <h4>{privacy.subtitle}</h4>
            </div>
            <p>{privacy.text}</p>
            <h4 >{privacy.subtitle1}</h4>
            <p>{privacy.text1}</p>
            <ul>{privacy.data1.map((e)=>{
                return <li key={e.id}>{e.textData}</li>
            })}</ul>
            <h4>{privacy.subtitle2}</h4>
            <p>{privacy.text2}</p>
            <ul>{privacy.data2.map((e)=>{
                return <li key={e.id}>{e.textData}</li>
            })}</ul>
            <div className="text_subtitle-3">
            <h4>{privacy.subtitle3}</h4>
            <p>{privacy.text3_1}</p>
            <p>{privacy.text3_2}</p>
            <p>{privacy.text3_3}</p>
            </div>
        </div>
    )
}
export default PrivacyLink;
