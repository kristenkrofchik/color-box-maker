import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const renderBoxes = () => {
        return (
          <ul>
            {boxes.map((width, height, backgroundColor, id) => (
              <Box width={width} height={height} backgroundColor={backgroundColor} id={id}/>
            ))}
          </ul>
        );
      };

    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
      };

    return (
        <div className="BoxList">
          <NewBoxForm addBox={addBox} />
          {renderBoxes()}
        </div>
      );
};

export default BoxList;