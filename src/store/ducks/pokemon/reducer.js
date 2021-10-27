export const initialState = {
  pokemons: [],
  loading: false,
  error: false,
  total:0,
}

const pokemonReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_POKEMON':
      return {...state, loading: true}
    case 'SEARCH_POKEMON':
        return {...state, loading: true}
    case 'GET_POKEMON_SUCCESS':
      return {...state, loading:false, pokemons:action.data.pokemons, total:action.data.total}
    case 'GET_POKEMON_ERROR':
      return {...state, loading:false, error: action.error}
    default:
      return state
  }
}

export default pokemonReducer
