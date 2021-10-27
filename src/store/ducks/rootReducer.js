import { combineReducers } from "redux";

import pokemon from "./pokemon/reducer";

const rootReducer = combineReducers({
  pokemon,
});

export default rootReducer;
