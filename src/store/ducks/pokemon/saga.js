import { call, put, takeLatest } from 'redux-saga/effects';
import { getPokemonData } from '../../../services/GetPokemonData';
import { searchPokemon } from '../../../services/SearchPokemon';

import { triggerGetPokemonError, triggerGetPokemonSuccess } from './actions'

function* fetch({page}) {
	try {
		const data = yield call(getPokemonData,page)
		yield put(triggerGetPokemonSuccess(data))
	} catch(err) {
		yield put(triggerGetPokemonError(err))
		console.log(err)
	}
}

function* search({name}) {
	try {
		const data = yield call(searchPokemon,name)
		yield put(triggerGetPokemonSuccess(data))
	} catch(err) {
		yield put(triggerGetPokemonError(err))
		console.log(err)
	}
}

export default function* watchPokemon() {
	yield takeLatest('GET_POKEMON', fetch);
	yield takeLatest('SEARCH_POKEMON', search);

} 