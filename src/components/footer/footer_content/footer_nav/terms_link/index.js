import React from "react";
import { Terms_Data } from "../../../../../constants";

const terms = Terms_Data;
const TermsLink =()=>{
    return(
        <div className="terms_link">
            <div className="subtitle">
                <h4>{terms.subtitle}</h4>
            </div>
            <ul>
                {terms.data.map((e)=>{
                    return <li key={e.id}>{e.textData}</li>
                })}
            </ul>
        </div>
    )
}
export default TermsLink;
