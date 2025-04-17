import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const VehicleDetails = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    getEachVehicle()
  }, []);

  const getEachVehicle = async ()=>{
    let response = await fetch("https://swapi.tech/api/vehicles/" + uid)
    let data = await response.json()
    setVehicle(data.result.properties)
  }

  return (
    <div className="text-center mt-5">
    <h1 className="text-warning">Vehicle Details</h1>
    <div className="d-flex justify-content-center align-items-center ">
      <div className="card  text-bg-primary mb-3" style={{ maxWidth: "40rem", width: "100%" }}>
        <img
          src="https://www.titlemax.com/media/100-vehicles-of-star-wars-thumb.png"
          className="card-img-top"
          alt="vehicleImage"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
          <p className="card-text">Model: {vehicle.model}</p>
          <p className="card-text">Class: {vehicle.vehicle_class}</p>
          <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
        </div>
      </div>
    </div>
  </div>

  );
};
