import { useState } from "react";
import React from "react";

function NewPlantForm({onPlantFormSubmit}) {
  
  const initialPlants =
  {
    name :  (" ") ,
    image : (" ") ,
    price : (" ")
  }

  const [formData, setFormData] = useState(initialPlants)
 

  function handlePlantChange(e) {
    const key = e.target.name
    const value = e.target.value

    setFormData ({...formData ,[key] : value }) 
  }

   function handlePlantSubmit(e) {
    e.preventDefault();
  
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(formData)
    })
      .then((resp) => resp.json())
      .then((showNewPlant) => {
        console.log(showNewPlant)
        onPlantFormSubmit(showNewPlant);
        // setFormData(...plants , initialPlants);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handlePlantChange}/>
        <input type="text" name="image" placeholder="Image URL" value = {formData.image} onChange={handlePlantChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value = {formData.price} onChange ={handlePlantChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
