import React from "react";
//import "./Box.css";

function Box(props) {
    const removeBox = () => props.removeBox(props.id);
    return (
      <div className="Box">
        <div className="Box" 
           style={{ 
            backgroundColor: props.backgroundColor,
            width: `${props.width}px`,
            height: `${props.height}px`
        }}/>
        <button onClick={removeBox}>Remove this Box</button>
      </div>
    );
  }
  
  export default Box;