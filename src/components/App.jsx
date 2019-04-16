import React, { Component } from 'react';
// import chirpsMap from './components/ChirpsMap';
import BuildChirp from './BuildChirp';

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
                },
                {
                    text: 'I am here too!',
                    user: 'Piggy'
                }
            ]
        };
    }


    handleSubmit = (e) => {
        this.setState(prevState => ({
            chirps: [...prevState.chirps, e]
        })
        );
    }


    render() {
        return (
            <>
                <h1>Chirper</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                <input
                            name="user"
                            type="text"
                        />
                    </label>
                    <br />
                    <label>Chirp:
                <input
                            name="text"
                            type="text"
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>



                {this.state.chirps.map(chirp => <BuildChirp chirp={chirp} />)}



            </>
        )
    }
}


export default Chirp;