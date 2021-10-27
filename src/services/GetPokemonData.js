import axios from "axios"

export const getPokemonData = async (page) => {
	const requestUrl =`${process.env.REACT_APP_API_URL}?page=${page}` ;
	const response = await axios.get(requestUrl)
	return response.data
}
