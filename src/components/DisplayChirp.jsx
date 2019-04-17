import React from 'react';


const DisplayChirp = (props) => {
    return (
        <>
            <div class="d-flex container flex-column">
                <div class="card text-white bg-info mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{props.chirp.user}</h5>
                        <p class="card-text">{props.chirp.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
};


export default DisplayChirp;