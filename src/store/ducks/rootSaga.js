import { all, fork } from "redux-saga/effects";

import watchPokemon from "./pokemon/saga";

export default function* IndexSagas() {
  return yield all([fork(watchPokemon)]);
}