import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    users : [{ username: 'Amy' }, { username: 'John' }],
    messages : [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  isDisabled = () => {
    return false;
  };

  sendText = (message) => {
    this.setState(
      {messages : [...this.state.messages, message]}
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {this.state.users.map(user => (
            <ChatWindow 
              key={user.username} 
              username={user.username} 
              messages={this.state.messages}
              sendText={this.sendText}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
