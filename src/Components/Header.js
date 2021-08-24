import React from 'react';
import styled from 'styled-components';
import MarvelLogo from '../Images/Marvel_Comics.svg';
import SearchIcon from '../Images/search.svg';
import Comics from './Comics';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

const HeaderStyled = styled.header`
    height: 7em;
    background-color: rgba(0,0,0,.99);
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 40%;
        height: 100%;
        margin-left: 1em;
    }

    input {
        width: 70%;
        height: 3em;
        border-radius: 2em;
    }

    form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 1em;
        width: 40%;
    }

    form img {
        width: 1.5em;
        height: 1.5em;
        margin: 0 auto;
        transform: rotate(90deg);
    }

    a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-size: large;
        margin-right: 1em;
        :active {
            color: red;
        }
    }
`;

function Header(props) {
    return (
        <HeaderStyled>
            <NavLink to='/'>
                 <img src={MarvelLogo} />
            </NavLink>
            {/* <form>
                <img src={SearchIcon} />
                <input type='text' />
            </form> */}
            <NavLink to='/characters'>
                Characters
            </NavLink>
            <NavLink to='/comics'>
                Comics
            </NavLink>
            
        </HeaderStyled>
    );
}

export default Header;