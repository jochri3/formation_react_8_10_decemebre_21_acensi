import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: () => ["Christian Lisangola", "Jean Blablabla"],
  produits: () => ["Mangue", "Pomme", "Ananas"],
});

export default rootReducer;
