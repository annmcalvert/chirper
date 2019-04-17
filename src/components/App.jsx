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
        // state.chirps.map(chirp => <DisplayChirp />);
    }



    render() {
        return (
            <>

                <div class="d-flex container">
                    <div class="row  justify-content-center align-items-center">>
                    <div class="col">
                            <h1>Chirper</h1>
                        </div>
                    </div>
                </div>
                <CreateChirp insertChirp={this.insertChirp} />
                {this.state.chirps.map(chirp => <DisplayChirp chirp={chirp} />)}





            </>
        )
    }
}


export default Chirp;