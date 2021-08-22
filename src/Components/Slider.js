import React, { Fragment } from 'react';
import styled from 'styled-components';
import HeroCarousel from 'react-hero-carousel';
import Captain from '../Images/captain.jpg';
import Comic from '../Images/comic.jpg';
import './Slider.css';

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Content = styled.div`
    position: absolute;
    width: 100vw;
    height: 7%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20,20,20,.65);

    h2 {
        font-size: 3em;
        text-transform: uppercase;
        color: rgb(230,230,230)
    }
`;

function Slider(props) {

    return (
        <StyledSection>
            <Content>
                <h2>Marvel Comics</h2>
            </Content>
            
            <HeroCarousel>
                <img src={Comic} />
                <img src={Captain} />
            </HeroCarousel>
        </StyledSection>
    );
}

export default Slider;