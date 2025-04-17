import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const handleRemoveFavorite =(favorite)=>{
    dispatch({
      type: "toggle_favorites",
      payload: favorite
    })
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <i className="fa-brands fa-galactic-republic"></i>
          </span>
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="favoritesDropdown"
          >
            {store.fav.length === 0 ? (
              <li>No Favorites</li>
            ) : (
              store.fav.map((favorite, index) => (
                <li key={`${favorite.cat}-${favorite.name}-${index + 1}`}
                className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <Link
                    to={`/${favorite.cat}/${favorite.uid}`}
                    className="text-decoration-none me-2"
                  >
                  {favorite.name}
                  </Link>
                  <span onClick={()=>handleRemoveFavorite(favorite)}>🗑️</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
