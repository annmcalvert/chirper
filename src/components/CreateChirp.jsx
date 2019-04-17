import React, { Component } from 'react';


class CreateChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            text: '',
        };
    }


    handleClick = () => {
        this.props.insertChirp(this.state);
        this.setState({
            user: "",
            text: ""
        })
        // this.setState(prevState => ({
        //     chirps: [...prevState.chirps, e]
        // })
        // );
    }

    handleNameChange = (e) => {
        this.setState({ user: e.target.value });
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value });
    }


    render() {
        return (
            <>
                <label>Name:
                <input
                        name="user"
                        type="text"
                        value={this.state.user}
                        onChange={this.handleNameChange}
                    />
                </label>
                <br />
                <label>Chirp:
                <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                </label>
                <br />
                <button onClick={this.handleClick}>Submit</button>

            </>
        )
    }
}


export default CreateChirp;