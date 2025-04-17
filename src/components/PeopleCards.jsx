import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const PeopleCards = (props) => {
  const { store, dispatch } = useGlobalReducer();
  const handleFav = () =>{
    dispatch({type: "toggle_favorites", 
		payload:{ 
		name: props.name, 
		uid: props.uid,
		cat: "people"
	}
	})
}
  return (
	<div className="card text-bg-primary mb-3" style={{ minWidth: "18rem" }}>
	<div className="card-body">
	<img
            src="https://cdn.costumewall.com/wp-content/uploads/2018/09/star-wars-costumes.jpg"
            className="card-img-top"
            alt="characterImage"
            style={{ height: "300px", objectFit: "cover" }}
          />
	  <h5 className="card-title">{props.name}</h5>
	  <span onClick={()=>handleFav()}>❤️</span>
	  <Link to={`/people/${props.uid}`} className="btn btn-primary">
		More Info
	  </Link>
	</div>
  </div>
  );
};
