import React, { FunctionComponent } from 'react';
import styled from "styled-components";

import fireType from "../../img/Fire.png";
import waterType from "../../img/Water.png";
import bugType from "../../img/Bug.png";
import darkType from "../../img/Dark.png";
import dragonType from "../../img/Dragon.png";
import electricType from "../../img/Electric.png";
import fairyType from "../../img/Fairy.png";
import fightingType from "../../img/Fighting.png";
import flyingType from "../../img/Flying.png";
import ghostType from "../../img/Ghost.png";
import grassType from "../../img/Grass.png";
import groundType from "../../img/Ground.png";
import iceType from "../../img/Ice.png";
import normalType from "../../img/Normal.png";
import poisonType from "../../img/Poison.png";
import psychicType from "../../img/Psychic.png";
import rockType from "../../img/Rock.png";
import steelType from "../../img/Steel.png";

import { PokemonType } from '../CardPokemon';

const ImgIcone = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    @media (max-width: 400px) {
        width: 1rem;
        height: 1rem;
      }
`;

const PokeType: FunctionComponent<{type?: PokemonType}> = (props) => {
    const {type} = props;

    switch (type) {
        case 'grass':
            return <ImgIcone src={grassType}/>
        case 'fire':
            return <ImgIcone src={fireType}/>
        case 'water':
            return <ImgIcone src={waterType}/>
        case 'bug':
            return <ImgIcone src={bugType}/>
        case 'dark':
            return <ImgIcone src={darkType}/>
        case 'dragon':
            return <ImgIcone src={dragonType}/>
        case 'electric':
            return <ImgIcone src={electricType}/>
        case 'fairy':
            return <ImgIcone src={fairyType}/>
        case 'fighting':
            return <ImgIcone src={fightingType}/>
        case 'flying':
            return <ImgIcone src={flyingType}/>
        case 'ghost':
            return <ImgIcone src={ghostType}/>
        case 'ground':
            return <ImgIcone src={groundType}/>
        case 'ice':
            return <ImgIcone src={iceType}/>
        case 'normal':
            return <ImgIcone src={normalType}/>
        case 'poison':
            return <ImgIcone src={poisonType}/>
        case 'psychic':
            return <ImgIcone src={psychicType}/>
        case 'rock':
            return <ImgIcone src={rockType}/>
        case 'steel':
            return <ImgIcone src={steelType}/>
        default:
            return <div>No type</div>
    };
};

export default PokeType;
