import './App.css';

import {Home,GamePage} from './screens'
import ReactDOM from 'react-dom'



function App() {
  //Home page with a button to enter the game
  return ( 
    <div id = "page">
      <div>
        <Home/>
      
        <button id = "playButton" onClick = {()=> {ReactDOM.render(<GamePage/>, document.getElementById('root'))}} > 
              Play
        </button>
      </div>
    </div>
    
    
  );
}

export default App;
