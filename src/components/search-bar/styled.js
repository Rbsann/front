import styled from 'styled-components'


export const SearchContainer = styled.div `
width: 40%;
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
@media only screen and (max-width: 768px) and (min-width: 768px){
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -300px;
}
`

export const SearchDiv = styled.div `
width: 100%;
position: relative;
display: flex;
`

export const SearchInput = styled.input `
width: 100%;
border: 3px solid #F5C3C1;
padding: 5px;
height: 36px;
border-radius: 5px 0 0 5px;
outline: none;
color: #9DBFAF;
:focus {
  color: #F5C3C1;
}
`