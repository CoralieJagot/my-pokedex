import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

import PokemonCardContainer from "./Components/PokemonCardContainer";
import AnimatedCard from "./Components/CardComponents/AnimatedCard";

const Button = styled.button`
  flexDirection: "row";
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: palevioletred;
  color: white;
  transition: all 0.8s ease-in-out;
  &:hover {
    background-color: rebeccapurple;
  }
`;
const H1 = styled.h1`
  color: #E8354f;
  display: block;
  padding: 20px;
  background: linear-gradient(to right, #009fff, #ec2f4b);
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);
  border-bottom: 10px solid #2D3747;
  text-shadow: 0px 5px 15px rgba(255,255,255,0.5);
  transition: all 0.4s ease-in-out;
  &:hover {
    font-size: 2.5rem;
  }
`;

const Demo: FunctionComponent = () => {
  const [pokemonIndex, setPokemonIndex] = useState(1);
  
  return (
    <>
    <H1>Mon Pokedex</H1>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily:"Gill Sans"}}>
       <AnimatedCard>
          <PokemonCardContainer pokemonId={pokemonIndex} />
       </AnimatedCard>  
       <br/>
       <span>Pokemon index: {pokemonIndex}</span>
       <Button onClick={() => setPokemonIndex(pokemonIndex + 1)}>+</Button>
       <Button onClick={() => setPokemonIndex(pokemonIndex - 1)}>-</Button>   
    </div>
    </>
  );
};

export default Demo;
