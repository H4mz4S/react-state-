import React, { Component } from 'react';

import Profile from "./profil"

class App extends Component {
    state = {
        show: false,
    };

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>Click Me</button>
                {this.state.show &&
                    <Profile />
                }
                
            </div>
        );
    }
}

export default App;