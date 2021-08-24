import React, { Fragment } from 'react';
import styled from 'styled-components';
import HeroCarousel from 'react-hero-carousel';
import Captain from '../Images/captain.jpg';
import Comic from '../Images/comic.jpg';
import './Slider.css';

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
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

function Slider(props) { 

    return (
        <StyledSection>
            <Content>
                <h2>Marvel Comics</h2>
                <p>Welcome to my 2nd project from a General Assembly assignment. 
                 Find information on Marvel's comics and characters</p>
            </Content>
            
            <HeroCarousel>
                <img src={Comic} />
                <img src={Captain} />
            </HeroCarousel>
        </StyledSection>
    );
}

export default Slider;