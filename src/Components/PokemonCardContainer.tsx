import React, { FunctionComponent, useState, useEffect } from "react";

import axios from "axios";

import CardPokemon, { PokemonType } from "./CardPokemon";

type Pokemon = {
  img?: string;
  height?: number;
  weight?: number;
  type?: PokemonType;
  base_experience?: string;
  abilities: Ability[];
  order?: number;
  textAbility?: string;
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
};

export type pokemonIdProps = {
  pokemonId?: number;
};
export type Ability = {
    name?: string;
    url?: string;
};

const PokemonCardContainer: FunctionComponent<pokemonIdProps> = (props) => {
  const { pokemonId } = props;
  const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
      const reqOne = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const reqTwo = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    axios
      .all([reqOne, reqTwo])
      .then(axios.spread((...res) => {
        const resOne = res[0];
        const resTwo = res[1];
        const abilities: Ability[] = resOne?.data?.abilities?.map((ability: {ability: Ability})=>{
          return {name: ability?.ability?.name, url: ability?.ability?.url}
        });
        const customPokemon = {
          abilities,
          img: resOne.data?.sprites?.front_default,
          height: resOne.data?.height,
          weight: resOne.data?.weight,
          type: resOne.data?.types[0]?.type?.name,
          base_experience: resOne.data?.base_experience,
          order: resOne.data?.order,
          moveOneName: resOne.data?.moves[0]?.move?.name,
          moveOneUrl: resOne.data?.moves[0]?.move?.url,
          moveTwoName: resOne.data?.moves[1]?.move?.name,
          moveTwoUrl: resOne.data?.moves[1]?.move?.url,
          frenchName: resTwo.data?.names[4]?.name,
          evoluted: resTwo.data?.evolves_from_species?.name,
          colorBackground: resTwo.data?.color?.name,
          storyPokemon: resTwo.data?.flavor_text_entries[24]?.flavor_text,
          typeSpecies: resTwo.data?.genera[3]?.genus,
        };
        setPokemon(customPokemon);

        const movesOneUrl = resOne.data?.moves[0]?.move?.url;
        const movesTwoUrl = resOne.data?.moves[1]?.move?.url;
        const textAbilityUrl = resOne?.data?.abilities[0]?.ability?.url;

        const reqFirst = axios.get(movesOneUrl);
        const reqSecond = axios.get(movesTwoUrl);
        const reqThird = axios.get(textAbilityUrl);

        axios
          .all([reqFirst, reqSecond, reqThird])
          .then(axios.spread((...res) => {
            const resFirst = res[0];
            const resSecond = res[1];
            const resThird = res[2];

            setPokemon({...customPokemon, 
              frenchNameMoveOne: resFirst.data?.names[3]?.name,
              typeIconOne: resFirst.data?.type?.name,
              powerAttackOne: resFirst.data?.power,
              descriptionAttackOne: resFirst.data?.flavor_text_entries[8]?.flavor_text,
              frenchNameMoveTwo: resSecond.data?.names[3]?.name,
              typeIconTwo: resSecond.data?.type?.name,
              powerAttackTwo: resSecond.data?.power,
              descriptionAttackTwo: resSecond.data?.flavor_text_entries[8]?.flavor_text,
              textAbility: resThird.data?.effect_entries[0]?.short_effect,
            })
          })
          )
        }))
      .catch(e => console.warn(e));
  }, [pokemonId]);
  
if(!pokemon) {
  return null
};
//car sinon affiche error le temps de la recherche des données

  return (
    <CardPokemon pokeData={pokemon} pokemonId={pokemonId} />
  );
};

export default PokemonCardContainer;