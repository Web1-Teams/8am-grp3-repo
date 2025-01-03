import'./Body.css'
import'./Section.css'
   import React from "react"
   import Item from "./item";
   function Section({title,icon,text,duration}){
    return(
<div className="section">
    <h3>{title}</h3>
    <Item icon={icon} text={text} duration={duration}/>


</div>
    )
   }
   export default Section;