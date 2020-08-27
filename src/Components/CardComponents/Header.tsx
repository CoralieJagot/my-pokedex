import React, { FunctionComponent } from 'react';
import styled from "styled-components";

import PokeType from "./PokeType";
import Evolution from "./Evolution";
import { PokemonType } from '../CardPokemon';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 0 0.9rem;
    text-transform : capitalize;
    @media (max-width: 400px) {
        font-size: 0.8rem;
        padding: 0.5rem;
      }
`;
const PointsVie = styled.div`
    color: #d62411;
`;

type HeaderProps = {
    pokeData: {
        base_experience?: string;
        type?: PokemonType;
        frenchName?: string;
        evoluted?: string | null;
    }
}

const CardHeader: FunctionComponent<HeaderProps> = (props) => {
    const {pokeData} = props;
    const {base_experience, frenchName, evoluted} = pokeData;
    
    return (
        <>
        <Evolution evolution={evoluted} frenchName={frenchName}/>

        <Header>
            <strong>{frenchName}</strong>
            <PointsVie>{base_experience} PV <PokeType type={pokeData?.type}/></PointsVie> 
        </Header >
        </>
    );
};

export default CardHeader;
