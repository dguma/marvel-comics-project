import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';

const ComicsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2em;


    div {
        width: 20%;
        height: 40%;
        margin: 1em
    }
`;

function Comics({comics, data}) {

    const [searchTerm, setSearchTerm] = useState('');

    // function getInfo(e) {
    //     console.log(e)
    // }

    let som = data.filter(element => element.images[0] !== undefined);
    let dom = som.map(element => {
        return {...element, images: element.images[0].path + '.' + element.images[0].extension}
    })

    function getValue(enteredText) {
        setSearchTerm(enteredText.target.value)
    }

    // console.log(dom)

    return (
        <Fragment>
            <Search onEnteredText={getValue} comics={data}/>
            <ComicsContainer>
            {dom.filter(item => {

                if(searchTerm === '') {
                    return item;
                } else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }
                
            }).map( item => (
                <div key={item.images.substr(44)} id={item.title} >
                        <Link 
                            to={`/details/${item.images.substr(44)}`}
                            // onClick={getInfo}
                        >
                            <img src={item.images}/>
                        </Link>
                </div>
                )
            )}
            </ComicsContainer>
        </Fragment>
    );
}

export default Comics;