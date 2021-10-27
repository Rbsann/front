import React from 'react'
import * as Styled from  './styled.js'

const Header = () => {
  return (
    <Styled.Header>
      <Styled.TopDiv />
        <Styled.MainDiv>
          <Styled.IconDiv id="icon_circle">
            <Styled.IconBackground id="icon_background">
              <Styled.Image alt="pokeball" src='/poke.png'/>
            </Styled.IconBackground>
          </Styled.IconDiv>
        </Styled.MainDiv>
    </Styled.Header>
    )
}

export default Header