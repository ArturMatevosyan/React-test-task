import React from "react";

const AboutTable = ({about})=>{
    
    return(
        <table className="about_table">
            <tbody>
            {about.DATA.map((e)=>{
                return <tr className="about_table" key={e.id}>
                    <td className="dataTitle">{e.dataTitle}</td>
                    <td className="dataText">{e.dataText}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}
export default AboutTable;