import './App.css';
import Controls from './components/Controls';
import GridBoard from './components/GridBoard';
import GridSquare from './components/GridSquare';
import MessagePopup from './components/MessagePopup';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(reducers)


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Boss Rush</h1>
      </header>
      <GridBoard></GridBoard>
      <NextBlock></NextBlock>
      <ScoreBoard></ScoreBoard>
      <Controls></Controls>
      <MessagePopup></MessagePopup>
     

    </div>

    </Provider>
  );

}

export default App;
