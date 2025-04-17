import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetail = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    getEachPlanet()
  }, []);

  const getEachPlanet = async ()=>{
    let response = await fetch("https://swapi.tech/api/planets/" + uid)
    let data = await response.json()
    setPlanet(data.result.properties)
  }

  return (
<div className="text-center mt-5">
      <h1 className="text-warning">Planet Details</h1>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card  text-bg-primary mb-3" style={{  maxWidth: "40rem", width: "100%"}}>
          <img
            src="https://pm1.aminoapps.com/5932/4b87ebd304453742288a1b4ed8d3e0f03c5f66e6_hq.jpg"
            className="card-img-top"
            alt="planetImage"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">Terrain: {planet.terrain}</p>
            <p className="card-text">Orbital Period: {planet.orbital_period}</p>
            <p className="card-text">Rotational: {planet.rotation_period}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
