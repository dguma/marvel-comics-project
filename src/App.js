import './App.css';
import ReactPlayer from 'react-player';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';

function App() {

  let [changeView, setChangeView] = useState(false);

  setTimeout(()=>{
    setChangeView(true)
  },6500)

  if(changeView === true) {
    return (
        <Route path='/' exact component={Home} />
    )
  }

  return (
    <div className="App">
      <div className='logo'></div>

      <ReactPlayer 
        url='https://thumbs.gfycat.com/SpeedyPerfectIntermediateegret-mobile.mp4'
        width='100%'
        height='100%'
        playing={true}
        muted={true}  
        loop={true}
      />
    </div>
  );
}

export default App;
