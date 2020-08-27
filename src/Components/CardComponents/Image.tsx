import React, { FunctionComponent } from 'react';
import styled from "styled-components";

const Img = styled.img`
  display: flex;
  justify-content: center;
  border: 0.3rem inset #ffe720;
  margin: 0.3rem 3rem;
  box-shadow: 0.2rem 0.2rem 0.2rem grey;
  background-color: #e0dfdb;
`;
const Legend = styled.div`
    font-size: 0.8rem;
    text-align: center;
    background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AXgMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAEBQMCBwYAAf/EACoQAAEEAQMEAQQCAwAAAAAAAAEAAgMRITFBUWFxgZEiBBKhsdHxweHw/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8ArsdnX2UmJ17qe116UkwnApeWfVVvp39U+F2Rm1Hhk6p8MhIB1TRVNptdo8RsLcEUnKlnIBuEWRuU14saWjStwjTgsmqO4Z1z3SDxlYPrIHtJbB+Sd/CyOd77LVw0uuiyfg5/CmnEVj82kxyE7qex++6THILGpCqhTgenQvUmM6VftNhdRSKrEL7NpbTjKmQyaZToXBNFICylGFo0r+OGEEDKNhdI7x1TpW9EWQdELgjwBrXpYSZ2rylP+QuwsHN5GPCVU+TY/wBJUTqFHKnMf5SoXCrtXQpMdpX7TIH0psTvuF0UyF2h4UBUhkuvkqEDzwo0T9hrtSoQSY1ymmqrXWF3dhGgeK3CQDhCHErbQ5WkaWnkWizMQqAvaTn/AAsX3s20p7aRnjrXZJb4Nju6TG+iAEBjiEmJ2h1WtJRjfQ1TIngDoeimxmyLPhLidkZHpZ01OJ1UduibC+lMhdR1S4X2Ugr/AE8nJKbG61JgfyfwqED73HhDOlnos3Nu103K/EdDlBAysq8flEeMYFqjKwG90OUUdChpK8wjckxGkFhSondlvQdEcCsFMidlTonZFeglxPp2ntZ01GNxIpMifW1KfG662SmEDN15UBThfjdP+nfyVIhIrlPgdsLQmxWjdjutAiQPsfwlNIpCHLx/1okjQM512ym91k9qFSvGWFIiPOeiICt4yugzojWUqN1Zs9lPiwUyJ1cqLDUIn+kyI2cnxamxO3KZE4crOmfE7x0TYnE1TqU9jnVjA7JMT7rPhIK0LzfCbG69QpML/u1OAnQvrlCLDhrrlcvBB1K/NNhda8FCXh1rVpWIXbV0LLjdn/aXG7HKnxmjm0qJ2dcJU1GJ2llMjdx+lOjdQ/hLidws7DUGONfGh2SonEgXpygRvoWAlROO2qgz2S3W3hOgfYxSlxnmidzwlwSXiz5Qmq8L8a5SAbFKdC+/7TWO+4coRXh67aVxuuqtdKmrCbSYzeERh2/S2jOcJUKMLkuJxOFOYfjZTIjoosNQidxolwkDO6BEd+EqJ91z2WVM5jvN6LeJxDsXW4CKw5r8rZhIGQO4SFUopLPy8BOik+OT6UiF+cflOheXBNNj/9k=);
    background-size: cover;
    padding: 0.2rem 0;
    margin: 0 3rem;
    @media (max-width: 400px) {
      font-size: 0.5rem;
      padding: 0.5rem;
      margin: auto;
      padding: 0.2rem;
    }
`;

type ImageProps = {
    pokeData: {
      img?: string;
      height?: number;
      weight?: number;
      typeSpecies?: string;
      }
    pokemonId?: number; 
}

const CardImage: FunctionComponent<ImageProps> = (props) => {
  const { pokeData, pokemonId } = props; 
  const {img, height, weight, typeSpecies} = pokeData;

    return (
        <>
            <Img src={img}/>
            <Legend>
              <em>N*{pokemonId} {typeSpecies}. Taille: {weight}cm, poids: {height}kg</em>
            </Legend>
        </>
    );
};

export default CardImage;