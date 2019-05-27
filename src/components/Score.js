import React from 'react';

export default function Score (props) {
        return(
            <div>
                <h1>Ranking de puntajes</h1>
                <div className="row">
                    <div className="col-md-8">
                        <h2>Puntaje: </h2>
                    </div>
                    <div className="col-md-4">
                        <h2>{props.score}</h2>
                    </div>
                </div>
             </div>
        )
}
