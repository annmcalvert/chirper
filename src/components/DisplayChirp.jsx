import React from 'react';


const DisplayChirp = (props) => {
    return (
        <>
            <h4>{props.chirp.user}</h4>
            <h5>{props.chirp.text}</h5>
        </>
    )
};


export default DisplayChirp;