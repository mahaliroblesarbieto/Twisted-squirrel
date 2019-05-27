import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    const grid = [];
    for(let row = 0; row < 16; row++){
      const cols = [];
      for(let col = 0; col < 16; col++){
        cols.push({
          row,
          col,
        })
      }
      grid.push(cols);
    }
    this.state = {
      grid,
    }    
  }

  render(){
    const {grid} = this.state;
    return(
      <div className="App">
        <section className="grid">
          {
            grid.map((row, i) => (
              row.map(cell => <div className="cell"></div>)
            ))
          }
        </section>
      </div>
    )
  }

}
export default App;
