import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPokemonData, triggerSearchPokemon } from '../../store/ducks/pokemon/actions';
import Card from '../../components/cards'
import Header from '../../components/header'
import SearchBar from '../../components/search-bar'
import Spinner from '../../components/spinner'
import * as Styled from  './styled.js';
import { useDebounce } from 'use-debounce';
import {isEmpty} from 'lodash'
import ReactPaginate from 'react-paginate';


const Home = () => {
	const dispatch = useDispatch()

	const pokemonData = useSelector(state => state.pokemon.pokemons)
	const loading = useSelector(state => state.pokemon.loading)
	const error = useSelector(state => state.pokemon.error)
	const pokemonPerPage = 10
	const totalPokemons = useSelector(state => state.pokemon.total)
	const [page,setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [pokemonInput, setPokemonInput] = useState('')
	const [debouncedSearchedPokemon] = useDebounce(pokemonInput, 700);

	const notFoundPokemon = 'No pokemon found'

	useEffect(() => {
		dispatch(triggerGetPokemonData(page))
	}, [dispatch,page])

	useEffect(() => {
		if(debouncedSearchedPokemon) {
			dispatch(triggerSearchPokemon(debouncedSearchedPokemon))
		}
	},[debouncedSearchedPokemon, dispatch])

	useEffect(() => {
    setTotalPages(Math.ceil(totalPokemons / pokemonPerPage));
	},[totalPokemons])

	const handlePokemonInput = (pokemonName) => {
		setPokemonInput(pokemonName)
	}

	const handlePageClick = (event) => {
		setPage(event.selected+1)
	}

	return (
		<>
				<div>
					<Header />
					<Styled.HomeContainer>
						<SearchBar inputValue={pokemonInput} handleChange={handlePokemonInput} className='search-bar-home' />
						{!isEmpty(pokemonData) && (
							!loading ? (
								<Card pokemon={pokemonData} />
							):(
								<div style={{marginTop:'80px'}}><Spinner/></div>
							)
						)
						}
					</Styled.HomeContainer>
					<Styled.PaginateContainer>
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={totalPages}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
					/>
					</Styled.PaginateContainer>
				</div>
			
		</>
	)
}

export default Home
