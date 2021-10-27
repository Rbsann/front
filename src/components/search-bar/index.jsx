import React from 'react'
import * as Styled from  './styled.js'


const SearchBar = ({  handleChange, inputValue }) => {

  return (
    <Styled.SearchContainer >
      <Styled.SearchDiv>
        <Styled.SearchInput
					value={inputValue} 
					onChange={(event) => handleChange(event.target.value)} 
					type="text" className="searchTerm" 
					placeholder="Search your pokemon" 
				/>
      </Styled.SearchDiv>
    </Styled.SearchContainer>
    )
}

export default SearchBar