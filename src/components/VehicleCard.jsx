import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const VehicleCard = (props) => {
  const { store, dispatch } = useGlobalReducer();
  const handleFav = () => {
    dispatch({
      type: "toggle_favorites",
      payload: {
        name: props.name,
        uid: props.uid,
        cat: "vehicle",
      },
    });
  };
  return (
    <div className="card text-bg-primary mb-3 " style={{ minWidth: "18rem" }}>
      <div className="card-body">
      <img
          src="https://www.titlemax.com/media/100-vehicles-of-star-wars-thumb.png"
          className="card-img-top"
          alt="vehicleImage"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <h5 className="card-title">{props.name}</h5>
        <span onClick={() => handleFav()}>❤️</span>
        <Link to={`/vehicle/${props.uid}`} className="btn btn-primary">
          More Info
        </Link>
      </div>
    </div>
  );
};
