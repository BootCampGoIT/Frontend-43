import React from "react";
import data from "../../data";
import CarsListItem from "./carsListItem/CarsListItem";



const CarsList = () => {
  return (
    <ul
      className='carsList'
      style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }}>
      {data.cars.map((car) => (
        <CarsListItem {...car} key={car.id} />
      ))}
    </ul>
  );
};

export default CarsList;


