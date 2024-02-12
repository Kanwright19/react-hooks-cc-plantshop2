import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const showPlants = plants.map((plant) => {
    return <PlantCard 
    name = {plant.name} image = {plant.image} price = {plant.price} key = {plant.id} />
  })

  return (
    <ul className="cards">{showPlants}</ul>
  );
}

export default PlantList;
