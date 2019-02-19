import React, { Component } from 'react'
import ChatDisplay from './ChatDisplay'

class ChatWindow extends Component {
    state = {
        text : ''
    }
    
    isDisabled = () => {
      return false;
    };

    handleChange = (event) => {
        this.setState({text:event.target.value})
    }

    sendText = (event) => {
        event.preventDefault();
        this.setState({text : ''})
        this.props.sendText({username: this.props.username, text:event.target.value})
    }
  
    render () {
        return (
            <div>       
                <div className="chat-window">
                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{this.props.username}</div>

                    <ChatDisplay messages={this.props.messages} username={this.props.username} />

                    <div>
                    <form className="input-group">
                        <input 
                            type="text" 
                            value={this.state.text}
                            className="form-control" 
                            placeholder="Enter your message..." 
                            onChange={this.handleChange}
                        />

                        <div className="input-group-append">
                        <button 
                            className="btn submit-button" 
                            value={this.state.text}
                            disabled={!this.state.text.length}
                            onClick={this.sendText}
                        >
                            SEND
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatWindow
