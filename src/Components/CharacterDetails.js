// import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ComicContainer = styled.div`
    margin-top: 10%;
    
`;

const ComicImg = styled.img`
        width: 20%;
`;

const DisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Description = styled.div`

`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    font-size: 1.4em;

    div {
        text-align: center;
        margin: 1em;
        padding: 0 10%;
    }
`;

function CharacterDetails({data, keys}) {

    const {charId} = useParams();

    console.log(charId) 
    console.log(keys)
    


    let filteredKeys = keys.filter(data => data !== undefined)

    let filteredData = data.filter(data => data !== undefined)


    return (
        <ComicContainer>
            <DisplayContainer>
            {filteredKeys.filter(item => item.includes(charId)).map(item => {
                    return (
                        <ComicImg src={item} />
                    );
                })}
            </DisplayContainer>
            <Description>
            { filteredData.filter(item => item.thumbnail.includes(charId)).map(item => {
                    return (
                        <Content>
                            <div>
                                <h2>{item.title}</h2>
                                <p>Character #: {item.id}</p>
                            </div>
                            <div>
                                <h4>Description</h4>
                                <p>{item.description}</p>
                            </div>
                        </Content>
                    );
                })}
            </Description>
        </ComicContainer>
    );
}

export default CharacterDetails;