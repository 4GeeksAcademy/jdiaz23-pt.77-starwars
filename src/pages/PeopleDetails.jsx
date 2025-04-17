import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PeopleDetails = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    getEachPerson();
  }, []);

  const getEachPerson = async () => {
    let response = await fetch("https://swapi.tech/api/people/" + uid);
    let data = await response.json();
    setPerson(data.result.properties);
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-warning">Character Details</h1>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card  text-bg-primary mb-3" style={{ maxWidth: "40rem", width: "100%" }}>
          <img
            src="https://cdn.costumewall.com/wp-content/uploads/2018/09/star-wars-costumes.jpg"
            className="card-img-top"
            alt="characterImage"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">Gender: {person.gender}</p>
            <p className="card-text">Skin Color: {person.skin_color}</p>
            <p className="card-text">Eye Color: {person.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
