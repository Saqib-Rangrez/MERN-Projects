import React, { useState } from "react";
import data from './data.js';
import Tours from "./components/Tours.js";



const App = () => {
  
  const [tours, setTours] = useState(data);

  function removeTourHandler(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
  }

  if(tours.length === 0){
    return (
    <div className="refresh">
      <h2>No Tours Left</h2>
      <button className="btn-white" onClick={() => {setTours(data)}}> Refresh </button> 
    </div>)
  }
  return (
    <div className="app">
      <Tours tours={tours} removeTour = {removeTourHandler}></Tours>
    </div>
  )

};

export default App;
