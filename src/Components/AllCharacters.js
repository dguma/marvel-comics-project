import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

function AllCharacters({charData, url}) {

    return (
        <StyledSection>
            {
                charData.map(data => {
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
    );
}

export default AllCharacters;