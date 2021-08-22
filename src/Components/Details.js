import React, { Fragment } from 'react';
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

function Details(props) {

    

    const {id} = useParams();

    let som = props.comicDetail.filter(element => element.images[0] !== undefined);
    let dom = som.map(element => {
        return {...element, images: element.images[0].path + '.' + element.images[0].extension}
    })

    let him = dom.filter(item => item.images.includes(id))
    
console.log(him)


    return (
        <ComicContainer>
            <DisplayContainer>
                {props.keys.filter(item => item.includes(id)).map(item => {
                    return (
                        <ComicImg src={item} />
                    );
                })}
            </DisplayContainer>
            <Description>
                {him.map(item => {
                    return (
                        <Content>
                            <div>
                                <h2>{item.title}</h2>
                                <p>Comic #: {item.id}</p>
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

export default Details;