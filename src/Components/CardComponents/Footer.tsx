import React, { FunctionComponent } from 'react';
import styled from "styled-components";

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem; 
    @media (max-width: 400px) {
        font-size: 0.5rem;

      }
`;
const Frame  = styled.div`
    border: 0.3rem inset #ffe720;
    font-size: 1rem;
    text-align: justify;
    padding: 0.3rem;
    @media (max-width: 400px) {
        font-size: 0.5rem;
        border: 0.1rem inset #ffe720;
        padding: 0.1rem;
        margin: 0.2rem;
      }
`;

const CardFooter: FunctionComponent<{order?: number, storyPokemon?: string}> = (props) => {
    const {order, storyPokemon} = props;

    return (
        <>
        <Frame>
        <em>{storyPokemon}</em>
        </Frame>

        <Footer>
            <span>Illustrateur: Ken Sugimori</span>
            <span>XY - Évolutions</span>
            <span>{order}/248</span>
        </Footer>
        </>
    );
};

export default CardFooter;