import React from   "react"
import {Link} from "react-router-dom"


export default function Navbar(){
  return(
<>
<div className="navbar"> 
   <div>Medi-Timer</div>
    <div>
      <Link to= "www.github.com/Mekhadev2025" >Github</Link></div>
      
</div>
</>


  )
  ;
}