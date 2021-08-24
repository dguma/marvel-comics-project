import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import AllCharacters from './AllCharacters';

const StyledSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 5%;

    div {
        width: 25%;
        height: 25%;
        margin: 1em
    }
`;

const StyledButton = styled.button`
    width: 50%;
    height: 5em;
    border: none;
    background-color: rgb(200,0,0);
    color: white;
    text-transform: uppercase;
    margin: 5% 0;

    a {
        text-decoration: none;
        color: white;
        font-size: 1.5em;
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function Characters({charData, url}) {

    return (
        <Fragment>
            <StyledSection>
                {
                    charData.slice(0, 9).map(data => {
                        return (
                            <div key={data.thumbnail.substr(44)} id={data.id}>
                                <Link to={`/character-details/${data.thumbnail.substr(44)}`} >
                                    <img src={data.thumbnail} />
                                </Link>
                            </div>
                        );
                    })
                }
            </StyledSection>
            <ButtonContainer>
                <StyledButton>
                    <Link to='/characters'>
                        All Characters
                    </Link>
                </StyledButton>
            </ButtonContainer>
        </Fragment>
    );
}

export default Characters;