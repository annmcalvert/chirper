import React from 'react';

const DisplayChirp = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{props.chirp.user}</div>
            <div className="card-body">
                <p className="card-text">{props.chirp.text}</p>
            </div>
        </div>
    )
};

export default DisplayChirp;