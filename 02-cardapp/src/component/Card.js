import React from "react";
import Profile from '../assets/Profile.jpg'
function Card(){
    var ob = {width:'150px', height:'200px'}
    return(
    <div className="card">
        
        <img style={ob} src={Profile} alt="Profile Picture"></img>
        <h2>Aniket Ghodake</h2>
        <p>I'm Studying PG-DAC from CDAC ACTS Pune</p>
    </div>
    )
}
export default Card