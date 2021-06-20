import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { height: 0, width: 0, backgroundColor: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
      };

    const handleChange = evt => {
        const { name, value }= evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      };

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="height">Height in Pixels:</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
    
          <label htmlFor="width">Width in Pixels:</label>
          <input
            type="number"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />

          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
    
          <button>Add a new box!</button>
        </form>
      );
}

export default NewBoxForm;