import axios from "axios"

export const searchPokemon = async (name) => {
	const requestUrl =`${process.env.REACT_APP_API_URL}?name=${name}` ;
	const response = await axios.get(requestUrl)
	return response.data
}
