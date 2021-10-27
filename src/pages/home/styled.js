import styled from 'styled-components'

export const HomeContainer = styled.div `
display:flex;
flex-direction:column;
align-items:center;
`
export const SearchBarDiv = styled.div `
position: relative;
display: flex;
margin-top: -180px;
`

export const PaginateContainer = styled.div`
	& ul {
		display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-evenly;
		list-style:none
	}
	& li {
		cursor:pointer;
		border:black;
		border-radius:2px;
	}
`;