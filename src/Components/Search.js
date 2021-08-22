import React, {useState} from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(200,0,0);
    /* margin: 4em 15%; */
    height: 5em;

    label {
        font-size: 1.2em;
        letter-spacing: 3px;
        color: white;
    }

    input {
        height: 2.5em;
        border: none;
        margin-left: 1em;
        text-indent: 1em;

        ::placeholder {
            color: rgb(0, 0, 0);
            font-size: 1.125em;
            letter-spacing: 2px;
            
        }
    }
`;


function Search(props) {

    let som = props.comics.filter(element => element.images[0] !== undefined);
    let dom = som.map(element => {
        return {...element, images: element.images[0].path + '.' + element.images[0].extension}
    })

    console.log(dom) 

    const submitHamdler = (event) => {
        event.preventDefault();
    }

    return (
        <SearchContainer>
           <form onSubmit={submitHamdler}>
                <label for='search'>Search:</label>
                <input name='search' type='text' placeholder='Type here...' onChange={props.onEnteredText}/>
           </form>
        </SearchContainer>
    );
}

export default Search;