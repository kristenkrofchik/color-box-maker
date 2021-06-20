import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox]); 
      };