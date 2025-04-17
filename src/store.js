export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    people: [],
    planet: [],
    fav: [],
    vehicles: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
 
        case 'set_people':
       
          return {
            ...store,
           people: action.payload
          };

          case 'set_planet':
       
          return {
            ...store,
           planet: action.payload
          };

          case 'set_vehicles':
       
          return {
            ...store,
           vehicles: action.payload
          };


          // case 'toggle_favorites':
          //   let favs = store.fav
          // if (favs.includes(action.payload)) {
          //   favs = favs.filter((fav, index) => fav.name !== action.payload)
          // }else{
          //   favs = [... favs, action.payload]
          // }
          // return {
          // ...store,
          // fav: favs
          // }

          case "toggle_favorites":
            let favs = store.fav;
            const newFav = action.payload;
            const exists = favs.some(
              (fav) => fav.name === newFav.name && fav.cat === newFav.cat
            );
            if (exists) {
              favs = favs.filter(
                (fav) => !(fav.name === newFav.name && fav.cat === newFav.cat)
              );
            } else {
              favs = [...favs, action.payload];
            }
      
            return {
              ...store,
              fav: favs,
            };


    default:
      throw Error('Unknown action.');
  }    
}



