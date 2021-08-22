import React from 'react';
import HeroCarousel from 'react-hero-carousel/dist/HeroCarousel';
import styled from 'styled-components';
import Search from './Search';

const StyledSection = styled.section`
    background: url('');
    width: 100vw;
    height: 40vh;
    margin-top: 7vh;
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