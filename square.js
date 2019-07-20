import React from 'react';

import '../styling.css'

export class Square extends React.Component {
  render() {
    return (
      <div className='box' onClick={this.props.handlePlace}>
        {this.props.value}
      </div>
    );
  }
}
