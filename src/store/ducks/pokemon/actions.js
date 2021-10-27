export function triggerGetPokemonData(page) {
  return {
		type: 'GET_POKEMON',
		page
	}
}

export function triggerGetPokemonSuccess(data) {
	return {
		type: 'GET_POKEMON_SUCCESS',
		data,
	}
}

export function triggerGetPokemonError(error) {
	return {
		type: 'GET_POKEMON_ERROR',
		error,
	}
}

export function triggerSearchPokemon(name) {
	return {
		type: 'SEARCH_POKEMON',
		name
	}
}
