import React from 'react';

export default function Score (props) {
        return(
            <div>
                <h1>Puntaje</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Puntaje1</h2>
                    </div>
                    <div className="col-md-6">
                        <h2>{props.score}</h2>
                    </div>
                </div>
            </div>
        )
}
