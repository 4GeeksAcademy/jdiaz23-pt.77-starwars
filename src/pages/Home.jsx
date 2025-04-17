import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PeopleCards } from "../components/PeopleCards.jsx";
import { getPlanet } from "./actions.js";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { VehicleCard } from "../components/VehicleCard.jsx";

export const Home = () => {
  const [people, setPeople] = useState();
  const [planet, setPlanet] = useState();
  const [vehicle, setVehicle] = useState();

  const { store, dispatch, getPeople, getPlanet, getVehicle } = useGlobalReducer();

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    getPlanet();
  }, []);

  useEffect(() => {
    getVehicle();
  }, []);

  useEffect(() => {
    setPeople(store.people);
  }, [store.people]);

  useEffect(() => {
    setPlanet(store.planet);
  }, [store.planet]);

  useEffect(() => {
    setVehicle(store.vehicles);
  }, [store.vehicles]);

  return (
    <div className="text-center mt-5">
     
      <h2 className="text-white mt-4">Characters</h2>
      <div className="people d-flex col-10 overflow-auto  mx-auto">
        {people?.map((people, index) => (
          <PeopleCards key={people.uid} name={people.name} uid={people.uid} />
        ))}
      </div>
      

     
      <h2 className="text-white mt-4">Planets</h2>
      <div className="planet d-flex col-10 overflow-auto mx-auto">
        {planet?.map((planet, index) => (
          <PlanetCard key={planet.uid} name={planet.name} uid={planet.uid} />
        ))}
      </div>
     
      <h2 className="text-white mt-4">Vehicles</h2>
      <div className="people d-flex col-10 overflow-auto mx-auto">
        {vehicle?.map((vehicle, index) => (
          <VehicleCard key={vehicle.uid} name={vehicle.name} uid={vehicle.uid} />
        ))}
      </div>

    </div>
  );
};
