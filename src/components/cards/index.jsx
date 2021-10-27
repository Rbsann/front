import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import * as Styled from './styled'

const PokemonCard = ( {pokemon} ) => {
  return (
		<Styled.Container>
		{pokemon.map((poke) => {
			return (
				<Card>
				<Image src={poke?.image} wrapped ui={false} />
					<Card.Content>
						<Card.Header>{poke?.name}</Card.Header>
						<Card.Meta>
							<span className='date'>{poke?.id}</span>
						</Card.Meta>
						<Card.Description>
						{poke?.types.map((type,index) => {
							return (
								<span>{type} {' '}</span>
							)
						})}
						</Card.Description>
					</Card.Content>
				</Card>
			)
		})}
		</Styled.Container>
  )
}

export default PokemonCard