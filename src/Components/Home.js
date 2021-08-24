import React, { Fragment, useEffect, useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import ComicSlider from './ComicSlider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comics from './Comics';
import Details from './Details';
import './Home.css'
import HeroSection from './HeroSection';
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';
import AllCharacters from './AllCharacters';

function Home(props) {

    let ts = new Date().toISOString();
    let publicKey = '9c930c9afbb845dbeeaf18c71de7726a';
    let privateKey = '0c6f02a88b6d6c0af40855122cbeb1719780ac4a';
    var md5 = require('md5');
    

    let comicsUrl  = `http://gateway.marvel.com/v1/public/comics?orderBy=issueNumber&limit=100&ts=${ts}&apikey=${publicKey}&hash=${md5(ts+privateKey+publicKey)}`;
    let charUrl = `https://gateway.marvel.com/v1/public/characters?limit=100&limit=100&ts=${ts}&apikey=${publicKey}&hash=${md5(ts+privateKey+publicKey)}`;
    // console.log(url);

    const [comics, setComics] = useState([]);
    const [characters, setCharacters] = useState([])

    const [com, setCom] = useState()

    useEffect(() => {
        fetch(comicsUrl)
        .then(res => res.json())
        .then(res => {
            setComics(res.data.results)
        })

        fetch(charUrl)
        .then(res => res.json())
        .then(res => {
            setCharacters(res.data.results)
        })
    },[])

    let characterImages = characters.map(char => char.thumbnail)
    let characterImageUrl = characterImages.map(url => url.path + '.' + url.extension)

    // console.log(characterImageUrl)

    let a = comics.map(comic => comic.images[0])

    // a.map(item => item)

    let item = a.filter(i => i !== undefined)

    let source = item.map(i=>i.path+ '.' + i.extension)

    let ids = comics.map( comicId => comicId.id )

 

    let newData = characters.map(data => {
        return {...data, thumbnail: data.thumbnail.path + '.' + data.thumbnail.extension}
    })

    let keys = newData.map(id =>{ return id.thumbnail})
    

    console.log(newData)

    return (
         <BrowserRouter>

             <Header/>
             

             <Fragment>
                <Switch>
                    <Route path='/' exact>
                        <Slider />
                        <ComicSlider thumb={source} />
                        <HeroSection />
                        <Characters charData={newData} url={characterImageUrl}/>
                    </Route>
                    <Route path='/comics' exact>
                        <Comics comics={source} keys={ids} data={comics}/>
                    </Route>
                    {/* <Route path='/home' exact>
                        <Home />
                    </Route> */}
                    <Route path='/details/:id' exact>
                        <Details thumb={item} keys={source} comicDetail={comics}/>
                    </Route>
                    <Route path='/character-details/:charId' exact>
                        <CharacterDetails data={newData} keys={keys}/>
                    </Route>
                    <Route path='/characters' exact>
                        <AllCharacters charData={newData} url={characterImageUrl}/>
                    </Route>
                </Switch>  
                
            </Fragment>

         </BrowserRouter>
    );
}

export default Home;