import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 5%;

    img {
        width: 25%;
        height: 25%;
        margin: 1em
    }
`;

function Characters({charData, url}) {

console.log(url)

    return (
        <StyledSection>
            {
                url.map(img => {
                    return (
                        <img src={img} />
                    );
                })
            }
        </StyledSection>
    );
}

export default Characters;