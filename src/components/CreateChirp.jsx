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
        });
    }

    handleNameChange = (e) => {
        this.setState({ user: e.target.value });
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div className="card mb-3 p-3">
                <div className="form-group">
                    <label htmlFor="user">Name:</label>
                    <input
                        className="form-control"
                        name="user"
                        type="text"
                        value={this.state.user}
                        onChange={this.handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Chirp:</label>
                    <input
                        className="form-control"
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={this.handleClick}
                    disabled={!this.state.user || !this.state.text}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default CreateChirp;