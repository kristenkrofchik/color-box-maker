import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
      setBoxes(boxes => [...boxes, box]);
    };

    const removeBox = id => {
      setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const renderBoxes = () => {
        return (
          <ul>
            {boxes.map(box => (
              <Box 
                width={box.width} 
                height={box.height} 
                backgroundColor={box.backgroundColor} 
                id={box.id} 
                key={box.id}
                removeBox={removeBox}/>
            ))}
          </ul>
        );
      };

    return (
        <div className="BoxList">
          <NewBoxForm addBox={addBox} />
          {renderBoxes()}
        </div>
      );
};

export default BoxList;