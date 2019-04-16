import React, { Component } from 'react';

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
                    text: 'Hi, it is me!',
                    user: 'Everett'
                }
            ];
        };
    }
}

render() {
    return (
        <>
        <h1>Chirper</h1>
        <h1>{this.state.chirps.text}</h1>
        <input type="text"/>
        <button>Submit</button>
        </>
    )
}