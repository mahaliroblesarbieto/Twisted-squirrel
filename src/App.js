import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    const grid = [];
    const initialHeadRow = Math.floor(Math.random() * (14 - 2) +2);
    const initialHeadCol = Math.floor(Math.random() * (14 - 2) +2);
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
          row: initialHeadRow,
          col: initialHeadCol,
        },
        body: [{row:initialHeadRow,col:initialHeadCol-1},{row:initialHeadRow,col:initialHeadCol-2}]
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

  isBody = (cell) => {
    const { squirrel } = this.state;
    return squirrel.body.find(inBody => inBody.row === cell.row && inBody.col === cell.col);
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
                    ? 'acorn': this.isBody(cell)
                    ? 'body' : ''
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
