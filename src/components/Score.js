import React from 'react';

export default function Score (props) {
        return(
          <div>
            {props.arrScore > 0 ? 
              <div>
                {props.arrScore.map((item) => (
                  <div className="row">
                    <div className="col-md-8">
                      <h2>Puntaje: </h2>
                    </div>
                    <div className="col-md-4">
                      <h2>{item}</h2>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-md-8">
                    <h2>Puntaje: </h2>
                  </div>
                  <div className="col-md-4">
                    <h2>{props.score}</h2>
                  </div>
                </div>
              </div>
              :<div className="row">
                <div className="col-md-8">
                  <h2>Puntaje: </h2>
                </div>
                <div className="col-md-4">
                  <h2>{props.score}</h2>
                </div>
              </div>} 
            </div>
        )
}
