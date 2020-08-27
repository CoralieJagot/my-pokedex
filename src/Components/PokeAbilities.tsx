 import React, { FunctionComponent } from "react";


 import { Ability } from "./PokemonCardContainer";

type PokeAbilitiesProps = {
    abilities?: Ability[];
}


const PokeAbilities : FunctionComponent<PokeAbilitiesProps> = (props) => {
        const {abilities} = props;


if(!abilities) {
    return null    
};

        return (

        <div>
            <ul>
                {abilities?.map((ability, index) =>
                    <li key={index}>{ability.name} {ability.url}</li>
                )}
            </ul>
        </div>

        );
};

 export default PokeAbilities;

