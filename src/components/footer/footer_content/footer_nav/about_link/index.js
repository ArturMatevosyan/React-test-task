import React from "react";
import { About_Data } from "../../../../../constants/";
import AboutTable from "./about_table";
import GoogleMap from "./google_map";

const about = About_Data;

const AboutLink =()=>{
    return(
        <div className="about_link">
            <div className="subtitle">
                <h4>{about.subtitle}</h4>
            </div>
            <div className="text_data">
                {about.text_Data.map((e)=>{
                    return <p key={e.id}>{e.text}</p>
                })}
            </div>
            <span>{about.text_sub}</span>
            <div className="subtitle">
                <h4>{about.subtitle1}</h4>
            </div>
            <AboutTable about={about}/>
            <GoogleMap/>
        </div>
    )
}
export default AboutLink;
