import React from 'react';
import ReactDOM from 'react-dom';

import { GameBoard } from './components/gameboard.js';

class Game extends React.Component {
  render() {
    return <GameBoard />;
  }
}

ReactDOM.render(<Game />, document.getElementById('app'));
