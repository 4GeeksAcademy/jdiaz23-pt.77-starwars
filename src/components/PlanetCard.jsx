import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetCard = (props) => {
  const { store, dispatch } = useGlobalReducer();
  const handleFav = () =>{
    dispatch({type: "toggle_favorites", 
		payload:{ 
		name: props.name, 
		uid: props.uid,
		cat: "planet"
	}
	})
}
  return (
    <div className="card text-bg-primary mb-3" style={{ minWidth: "18rem" }}>
      <div className="card-body">
      <img
            src="https://pm1.aminoapps.com/5932/4b87ebd304453742288a1b4ed8d3e0f03c5f66e6_hq.jpg"
            className="card-img-top"
            alt="planetImage"
            style={{ height: "300px", objectFit: "cover" }}
          />
        <h5 className="card-title">{props.name}</h5>
        <span onClick={() => handleFav()}>❤️</span>
        <Link to={`/planet/${props.uid}`} className="btn btn-primary">
          More Info
        </Link>
      </div>
    </div>
  );
};
