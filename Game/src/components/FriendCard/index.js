import React from "react";
import "./style.css";





const Card=(props)=>{
  
  return  <div id="topDiv">
    <div className="card">
      <div className="img-container" onClick={() => props.removeFriend (props.id) } >
        <img alt={props.name} id={props.id} src={props.image} />
      </div>
    </div>
    </div>
}

export default Card;
