import React from 'react';
import propTypes from 'prop-types';
import './styles/Score.css';

export default function Score (props) {
        return(
          <div className="width">
            { 
              props.arrScore.length > 0 ? 
              <div>
                {props.arrScore.map((item) => (
                  <div className="row">
                    <div className="col-md-1 bellota"></div>
                    <div className="col-md-6">
                      <h2 className="size">Puntaje{props.arrScore.indexOf(item)+1}</h2>
                    </div>
                    <div className="col-md-5">
                      <h2 className="size">{item}</h2>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-md-1 bellota"></div>
                  <div className="col-md-6">
                    <h2 className="size">Puntaje{props.arrScore.length+1}</h2>
                  </div>
                  <div className="col-md-5">
                    <h2 className="size">{props.score}</h2>
                  </div>
                </div>
              </div>
              :<div className="row">
                <div className="col-md-1 bellota"></div>
                <div className="col-md-6">
                  <h2 className="size">Puntaje 1 </h2>
                </div>
                <div className="col-md-5">
                  <h2 className="size">{props.score}</h2>
                </div>
              </div>} 
            </div>
        )
}

Score.propTypes = {
  arrScore: propTypes.array.isRequired,
  score: propTypes.number.isRequired,
}
