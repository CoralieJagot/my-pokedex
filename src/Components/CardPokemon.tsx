import React, { FunctionComponent } from "react";
import styled from "styled-components";

import CardFooter from "./CardComponents/Footer";
import CardHeader from "./CardComponents/Header";
import CardMain from "./CardComponents/Main";
import CardImage from "./CardComponents/Image";

import { Ability } from "./PokemonCardContainer";

export type PokemonType = 'fire' | "grass" | 'water' | 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'flying' | 'ghost' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel'

type DivProps ={
  type?: PokemonType;
}

const getBackgroundByType = (type?: PokemonType) => {
  switch (type) {
    case 'grass':
        return '#98E0B1'
    case 'fire':
        return '#FFC3B0'
    case 'water':
        return '#BCECFF'
    case 'bug':
        return '#9BCBC4'
    case 'dark':
        return '#54636F'
    case 'dragon':
        return '#FEE8AE'
    case 'electric':
        return '#FDFFB3'
    case 'fairy':
        return '#FFB3D6'
    case 'fighting':
        return '#FDD4A8'
    case 'flying':
        return '#C4E0DC'
    case 'ghost':
        return '#80AF9D'
    case 'ground':
        return '#DBCEB5'
    case 'ice':
        return '#C0FFEC'
    case 'normal':
        return '#ECE5D0'
    case 'poison':
        return '#E0C9FF'
    case 'psychic':
        return '#FFBCEF'
    case 'rock':
        return '#C9C8AC'
    case 'steel':
        return '#FF9C9B'
    default:
      return 'white'
  }
}

const DivCard = styled.div<DivProps>`
  width: 21rem;
  height: 31rem;
  margin: auto;
  padding: 0.8rem;
  border-radius: 1rem;
  border: 0.8rem solid #ffe617;
  font-family: 'Gill Sans';
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0.5rem 0.5rem 0.5rem grey;
  padding-bottom: 0;
  background: ${(props) => getBackgroundByType(props.type)};
  @media (max-width: 400px) {
    width: 12rem;
    height: 20rem;
    font-size: 0.5rem;
    padding: 0.5rem;
  }
  transition: box-shadow 0.4s ease-in-out;
  &:hover {
      box-shadow: 0.5rem 0.5rem 2rem grey;   
}
`;

type CardPokemonProps = {
    pokeData: {
      img?: string;
      height?: number;
      weight?: number;
      type?: PokemonType;
      base_experience?: string;
      abilities?: Ability[];
      order?: number;
      moveOneName: string;
      moveOneUrl: string;
      moveTwoName: string;
      moveTwoUrl: string;
      frenchName?: string;
      evoluted?: string | null;
      colorBackground?: string;
      storyPokemon?: string;
      typeSpecies?: string;
      frenchNameMoveOne?: string;
      typeIconOne?: PokemonType;
      powerAttackOne?: number;
      descriptionAttackOne?: string;
      frenchNameMoveTwo?: string;
      typeIconTwo?: PokemonType;
      powerAttackTwo?: number;
      descriptionAttackTwo?: string;
      textAbility?: string;
    }
    pokemonId?: number;
};

const CardPokemon: FunctionComponent<CardPokemonProps> = (props) => {
    const {pokeData, pokemonId} = props;
    const {type} = pokeData;

    return (  
      <>
        <DivCard type={type}>
            
            <CardHeader pokeData={pokeData}/>

            <CardImage pokeData={pokeData} pokemonId={pokemonId}/>

            <CardMain pokeData={pokeData}/>

            <CardFooter order={pokeData?.order} storyPokemon={pokeData?.storyPokemon}/>

        </DivCard>
      </>
    );
};

export default CardPokemon;

