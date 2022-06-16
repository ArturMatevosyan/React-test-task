import React from "react";

const AboutTable = ({about})=>{
    
    return(
        <table className="about_table">
            {about.DATA.map((e)=>{
                return <tr key={e.id}>
                    <td className="dataTitle">{e.dataTitle}</td>
                    <td className="dataText">{e.dataText}</td>
                </tr>
            })}
        </table>
    )
}
export default AboutTable;