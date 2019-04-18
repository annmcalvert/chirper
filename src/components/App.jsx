import React, { Component } from 'react';
import DisplayChirp from './DisplayChirp';
import CreateChirp from './CreateChirp';

class Chirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: [
                {
                    text: 'Hello',
                    user: 'Ann'
                },
                {
                    text: "Hi, it's me!",
                    user: 'Everett'
                },
                {
                    text: 'I am here too!',
                    user: 'Piggy'
                }
            ]
        };
    }

    insertChirp = (e) => {
        this.setState({
            chirps: [e, ...this.state.chirps]
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Chirper</h1>
                <CreateChirp insertChirp={this.insertChirp} />
                {this.state.chirps.map(chirp => <DisplayChirp chirp={chirp} />)}
            </div>
        )
    }
}

export default Chirp;