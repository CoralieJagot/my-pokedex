import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import PokeType from "./PokeType";

import { Ability } from "../PokemonCardContainer";
import { PokemonType } from '../CardPokemon';

const DivIcone = styled.div`
    width: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
`;
const Description = styled.div`
    width: 25rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    text-transform : capitalize;
    @media (max-width: 400px) {
        padding: 0.1rem;
      }
`;
const Power = styled.div`
    font-size: 1.6rem;
    width: 3rem;
    padding: 0.5rem;
    @media (max-width: 400px) {
        padding: 0.1rem;
      }
`;
const Div = styled.div`
    border-bottom: 0.1rem solid;
    display: flex;
`;

type MainProps = {
    pokeData: {
        abilities?: Ability[];
        textAbility?: string;
        moveOneName: string;
        moveTwoName: string;
        frenchNameMoveOne?: string;
        typeIconOne?: PokemonType;
        powerAttackOne?: number;
        descriptionAttackOne?: string;
        frenchNameMoveTwo?: string;
        typeIconTwo?: PokemonType;
        powerAttackTwo?: number;
        descriptionAttackTwo?: string;
        type?: PokemonType;
    } 
}

const CardMain: FunctionComponent<MainProps> = (props) => {
    const {pokeData} = props;
    const {abilities, textAbility, frenchNameMoveOne, descriptionAttackOne, powerAttackOne, frenchNameMoveTwo, descriptionAttackTwo, powerAttackTwo} = pokeData;

    return (
        <>
        <em><strong>Attaques : </strong></em>
        <Div>    
            <DivIcone>
                <PokeType type={pokeData?.typeIconOne}/>
            </DivIcone>
            <Description>    
                <span><strong>{frenchNameMoveOne} </strong>{descriptionAttackOne}</span>
                <Power>{powerAttackOne}</Power>
            </Description>
        </Div>

        <Div>    
            <DivIcone>
                <PokeType type={pokeData?.typeIconTwo}/>
            </DivIcone>
            <Description>    
                <span><strong>{frenchNameMoveTwo} </strong>{descriptionAttackTwo}</span>
                <Power>{powerAttackTwo}</Power>
            </Description>
        </Div>
        
        <div style={{display: 'flex'}}>
            <Description>
                <em><strong>Talents : </strong></em>   
                {abilities?.map((ability, index) =>
                    <span key={index}>
                        <strong>{ability.name}</strong>
                    </span>
                )}         
            </Description>  
        </div>
        <em style={{borderBlockEnd: '0.1rem solid'}}>{textAbility}</em>
        </>
    );
};

export default CardMain;