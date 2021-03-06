import styled from 'styled-components'

export const Container = styled.div `
margin-top:100px;
width: 100%;
height:100%;
padding:5px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 0.5em;
grid-column-gap: 1em;
margin-left: 10px;
margin-top: 100px;
@media only screen and (max-width: 620px) and (min-width: 320px){
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 1.5em;
  grid-column-gap: 1em;
  margin-left: 25%;
  margin-top: 100px;
}
@media only screen and (max-width: 768px) and (min-width: 768px){
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 1.5em;
	grid-column-gap: 1em;
	margin-left: 10%;
	margin-top: 100px;
}
`