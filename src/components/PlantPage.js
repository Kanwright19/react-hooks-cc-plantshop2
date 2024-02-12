import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState , useEffect } from "react";

function PlantPage() {

  const [plants , setPlants] = useState([])
  const [search , setSearch] = useState("")

  useEffect(() => {
    fetch ('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((ogPlants) => setPlants(ogPlants))
  }, [])
    
 function onPlantFormSubmit (formData){
  let newPlants = [...plants , formData]
  setPlants(newPlants)
 }
 function handleSearch(e){
  setSearch(e.target.value)
 }

 const filterSearch = plants.filer((plant) => {
  const lowerCaseName = plant.name.toLowerCase()
  const findName = search.name.toLocaleLowerCase()
  if (search === "")
    return true 
  if (lowerCaseName === findName ){
    return plant
  }
 })
  return (
    <main>
      <NewPlantForm onPlantFormSubmit={onPlantFormSubmit} />
      <Search onSearch={handleSearch} search={search}/>
      <PlantList plants={filterSearch}/>
    </main>
  );
}

export default PlantPage;
