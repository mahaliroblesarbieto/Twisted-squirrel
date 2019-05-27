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
      acorn: {
        row: Math.floor(Math.random() * 16),
        col: Math.floor(Math.random() * 16),
      },
      squirrel: {
        head: {
          row: 8,
          col: 8
        },
      }    
    }
  }

  isAcorn = (cell) => {
    const { acorn } = this.state;
    return acorn.row === cell.row
      && acorn.col === cell.col;
  }

  isHead = (cell) => {
    const { squirrel } = this.state;
    return squirrel.head.row === cell.row
      && squirrel.head.col === cell.col;
  }

  render(){
    const {grid} = this.state;
    return(
      <div className="App">
        <section className="grid">
          {
            grid.map((row, i) => (
              row.map(cell => 
                <div className={`cell
                  ${
                    this.isHead(cell)
                    ? 'head' : this.isAcorn(cell)
                    ? 'acorn':''
                  }`
                }>
                </div>)
            ))
          }
        </section>
      </div>
    )
  }

}
export default App;
