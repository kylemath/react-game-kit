import React, { Component } from 'react';

import Intro from './intro';
import Level0 from './Level0';
import Level1 from './Level1';

export default class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
      slideIndex: 0,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  render() {
    this.gameStates = [
      <Intro onStart={this.handleStart} />,
      <Level0 onLeave={this.handleLeave} />,
      <Level1 onLeave={this.handleStart} />
    ];
    return this.gameStates[this.state.gameState];
  }

  handleStart() {
    this.setState({
      gameState: 1,
    });
  };

  handleDone() {
    this.setState({
      gameState: 1,
    });
  };

  handleLeave() {
    this.setState({
      gameState: 2,
    });
  };
}
