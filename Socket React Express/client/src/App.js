import React, { Component } from 'react';
import io from 'socket.io-client';

export class App extends Component {

  componentDidMount() {
    const socket = io.connect('/');
  }
  render() {
    return (
      <div>
        <h1>This is Client SIde</h1>
      </div>
    )
  }
}

export default App