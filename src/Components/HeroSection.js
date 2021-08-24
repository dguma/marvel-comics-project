import React from 'react';
import HeroCarousel from 'react-hero-carousel/dist/HeroCarousel';
import styled from 'styled-components';
import Search from './Search';

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const Content = styled.div`
    position: absolute;
    width: 80vw;
    height: 30%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(rgba(50,50,50,.65), rgba(200,200,200,0));
    border: thin white solid;
    

    h2 {
        font-size: 1.5em;
        text-transform: uppercase;
        color: rgb(200,0,0);
        margin: 0;
        text-align: center;
        text-shadow: 0px -3px 8px rgba(255,255,255, .20);
    }

    p {
        color: white;
        font-size: 1em;
        text-align: center;
        padding: 0 1.5em;
        word-spacing: 1px;
        /* line-height: 2.5em; */
        text-shadow: 0px 3px 25px rgba(255,255,255, .5);
    }

    @media screen and (min-width: 768px) {
        h2 {
        font-size: 3em;;
        }

        p {
            
            font-size: 1.5em;
        }
    }

    @media screen and (min-width: 1024px) {
        h2 {
        font-size: 4em;;
        }

        p {
            
            font-size: 2em;
        }
    }
    
`;

function HeroSection(props) {
    return (
        <StyledSection>
            <Content>
                <h2>Marvel Characters</h2>
            </Content>
            <HeroCarousel>
                <img src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
                {/* <img src='https://images.unsplash.com/photo-1618519764140-d3cdc6496de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80' /> */}
            </HeroCarousel>
            
        </StyledSection>
    );
}

export default HeroSection;