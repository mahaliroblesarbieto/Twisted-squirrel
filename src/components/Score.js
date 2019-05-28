import React from 'react';
import propTypes from 'prop-types';

export default function Score (props) {
        return(
          <div>
            { 
              props.arrScore.length > 0 ? 
              <div >
                {props.arrScore.map((item) => (
                  <div className="row">
                    <div className="col-md-10">
                      <h2>Puntaje{props.arrScore.indexOf(item)+1} </h2>
                    </div>
                    <div className="col-md-2">
                      <h2>{item}</h2>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-md-10">
                    <h2>Puntaje{props.arrScore.length+1}</h2>
                  </div>
                  <div className="col-md-2">
                    <h2>{props.score}</h2>
                  </div>
                </div>
              </div>
              :<div className="row">
                <div className="col-md-10">
                  <h2>Puntaje 1 </h2>
                </div>
                <div className="col-md-2">
                  <h2>{props.score}</h2>
                </div>
              </div>} 
            </div>
        )
}

Score.propTypes = {
  arrScore: propTypes.array.isRequired,
  score: propTypes.number.isRequired,
}
