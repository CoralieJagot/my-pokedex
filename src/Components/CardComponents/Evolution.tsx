import React, { FunctionComponent } from 'react';
import styled from "styled-components";

const Div = styled.div`
    height: 0.8rem;
    font-size: 0.6rem;
    text-align: right;
    border-bottom: 0.1rem solid #ffe617;
    text-transform : capitalize;
`;

const Evolution: FunctionComponent<{evolution?: string | null, frenchName?: string}> = (props) => {
    const {evolution, frenchName} = props;

    if(evolution==null) {
        return <Div/>
      } else {
          return <Div><strong><em>Évolution de {evolution} </em></strong>Placez {frenchName} sur le Pokémon de base</Div>
      };
};

export default Evolution;