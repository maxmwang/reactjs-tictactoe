import React from 'react';
import { Square } from './square.js'

import "../styling.css";

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [null, null, null, null, null, null, null, null, null],
      nextTurnX: true,
      winner: null
    };

    this.handlePlace = this.handlePlace.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handlePlace(cellNum) {
    if (!this.state.winner) {
      const valueTemp = this.state.value;
      if (!this.state.value[cellNum]) {
        valueTemp[cellNum] = this.state.nextTurnX ? 'X' : 'O';
        this.setState({
          value: valueTemp,
          nextTurnX: !this.state.nextTurnX
        });
      }
    }
  }

  handleRestart() {
    this.setState({
      value: [null, null, null, null, null, null, null, null, null],
      nextTurnX: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let score = this.state.value;
    for (let i = 0; i < winConditions.length; i++) {
      let condition = winConditions[i];
      if (score[condition[0]] && score[condition[0]] === score[condition[1]] && score[condition[0]] === score[condition[2]]) {
        if (!this.state.winner) {
          this.setState({winner: score[condition[0]]});
        }
      }
    }
  }

  render() {
    let text;
    if (this.state.winner) {
      text = <h3 className='text winner'>Winner: {this.state.winner}</h3>
    } else {
      text = <h3 className='text'>Next Turn: {this.state.nextTurnX ? 'X' : 'O'}</h3>
    }

    return (
      <div>
        {text}
        <div className='game-board'>
          <Square handlePlace={() => this.handlePlace(0)} value={this.state.value[0]} />
          <Square handlePlace={() => this.handlePlace(1)} value={this.state.value[1]} />
          <Square handlePlace={() => this.handlePlace(2)} value={this.state.value[2]} />
          <Square handlePlace={() => this.handlePlace(3)} value={this.state.value[3]} />
          <Square handlePlace={() => this.handlePlace(4)} value={this.state.value[4]} />
          <Square handlePlace={() => this.handlePlace(5)} value={this.state.value[5]} />
          <Square handlePlace={() => this.handlePlace(6)} value={this.state.value[6]} />
          <Square handlePlace={() => this.handlePlace(7)} value={this.state.value[7]} />
          <Square handlePlace={() => this.handlePlace(8)} value={this.state.value[8]} />
        </div>
        <br></br>
        <button onClick={this.handleRestart}>Restart</button>
      </div>
    );
  }
}
