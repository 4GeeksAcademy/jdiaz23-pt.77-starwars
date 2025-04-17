export const getPeople = async (dispatch, payload) =>{
    let response = await fetch(`https://swapi.tech/api/people`)
    let data = await response.json()
    console.log("check here for data", data)
    dispatch({
        type: "set_people",
        payload: data.results
    })
}

export const getPlanet = async (dispatch, payload) =>{
    let response = await fetch(`https://swapi.tech/api/planets`)
    let data = await response.json()
    console.log("check here for data", data)
    dispatch({
        type: "set_planet",
        payload: data.results
    })
}

export const getVehicle  = async (dispatch, payload) =>{
    let response = await fetch(`https://swapi.tech/api/vehicles`)
    let data = await response.json()
    console.log("check here for data", data)
    dispatch({
        type: "set_vehicles",
        payload: data.results
    })
}