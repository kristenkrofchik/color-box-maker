import React from "react";
//import "./Box.css";

function Box(props) {
    return (
      <div className="Box" 
           style={{ 
            backgroundColor: props.backgroundColor,
            width: props.width + 'px',
            height: props.height + 'px'
        }}>
      </div>
    );
  }
  
  export default Box;