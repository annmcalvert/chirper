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


    insertChirp = (e) => {
        this.setState(prevState => ({
            chirps: [e, ...prevState.chirps]
        })
        );
        
    }



    render() {
        return (
            <>

                <div class="d-flex container">
                    <div class="row">
                        <div class="col">
                            <h1>Chirper</h1>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="row justify-content-center">
                        <CreateChirp insertChirp={this.insertChirp} />
                        {this.state.chirps.map(chirp => <DisplayChirp chirp={chirp} />)}
                    </div>
                </div>


            </>
        )
    }
}


export default Chirp;