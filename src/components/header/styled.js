import styled from 'styled-components'

export const Header = styled.header `
width: 100%;
height: 150px;
background-color: #F7DDA1;
display: flex;
flex-direction: column;
`

export const TopDiv = styled.div `
height: 60%;
background-color: #F7DDA1;
`
export const MainDiv = styled.div `
height: 40%;
background-color: #A4E8EB;
display: flex;
align-items: center;
justify-content: center;
`
export const IconDiv = styled.div `
width: 100px;
height: 100px;
background: #A4E8EB;
display: block;
border-radius: 100px / 100px;
position: relative;
top: -22px;
display: flex;
align-items: center;
justify-content: center;
`

export const IconBackground = styled.div `
width: 260px;
border-radius: 10px;
padding-left: 8px;
padding-right: 8px;
.fa-times {
  display: block;
}
`

export const Image = styled.img `
width: 60px;
margin-left:11px;

`