import React, {Component} from 'react';
import Score from './components/Score'

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
        direction: {
          x: 1,
          y: 0
        },
        body: [{row:initialHeadRow,col:initialHeadCol-1},{row:initialHeadRow,col:initialHeadCol-2}],
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

  componentDidMount = () => {
    document.addEventListener('keydown', (e) => {
      this.setDirection(e);
    });
    setTimeout(() => {
      this.gameLoop()
    }, this.state.squirrel.body.length ? (400 / this.state.squirrel.body.length) + 200 : 400)
  }

  getRandomAcorn = () => {
    const { squirrel } = this.state;
    const newAcorn = {
      row: Math.floor(Math.random() * 16),
      col: Math.floor(Math.random() * 16),
    };
    if (this.isBody(newAcorn) || (
      squirrel.head.row === newAcorn.row
      && squirrel.head.col === newAcorn.col)) {
      return this.getRandomAcorn();
    } else {
      return newAcorn;
    }
  }

  gameLoop = () => {
    this.setState(({squirrel, acorn}) => {
      const collidesWithAcorn = this.collidesWithAcorn();
      const nextState = {
        squirrel: {
          ...squirrel,
          head: {
            row: squirrel.head.row + squirrel.direction.y,
            col: squirrel.head.col + squirrel.direction.x
          },
          body: [squirrel.head, ...squirrel.body]
        },
        acorn: collidesWithAcorn ? this.getRandomAcorn() : acorn
      };
      if (!collidesWithAcorn) nextState.squirrel.body.pop();
      return nextState;
    }, () => {
      const {squirrel} = this.state;
      if (this.isOffEdge() || this.isBody(squirrel.head)) {
        this.setState({
          gameOver: true,
        });
        return;
      }
      setTimeout(() => {
        this.gameLoop()
      }, this.state.squirrel.body.length ? (400 / this.state.squirrel.body.length) + 200 : 400)
    });
  }

  isOffEdge = () => {
    const { squirrel } = this.state;

    if (squirrel.head.col > 15
      || squirrel.head.col < 0
      || squirrel.head.row > 15
      || squirrel.head.row < 0) {
        return true;
      }
  }

  collidesWithAcorn = () => {
    const { acorn, squirrel } = this.state;
    return acorn.row === squirrel.head.row
      && acorn.col === squirrel.head.col;
  }

  setDirection = (event) => {
    const { squirrel } = this.state;
    if (event.keyCode === 38) { // up
      if (squirrel.direction.y === -1) return;
      this.setState(({squirrel}) => ({
        squirrel: {
          ...squirrel,
          direction: {
            x: 0,
            y: 1,
          }
        }
      }))
    } else if (event.keyCode === 40) {// down 
      if (squirrel.direction.y === 1) return;
      this.setState(({squirrel}) => ({
        squirrel: {
          ...squirrel,
          direction: {
            x: 0,
            y: -1,
          }
        }
      }))
    } else if (event.keyCode === 39)  {//right
      if (squirrel.direction.x === 1) return;
      this.setState(({squirrel}) => ({
        squirrel: {
          ...squirrel,
          direction: {
            x: -1,
            y: 0,
          }
        }
      }))
    } else if (event.keyCode === 37)  { // left
      if (squirrel.direction.x === -1) return;
      this.setState(({squirrel}) => ({
        squirrel: {
          ...squirrel,
          direction: {
            x: 1,
            y: 0,
          }
        }
      }))
    }
  }

  render(){
    const {grid, squirrel, gameOver} = this.state;
    return(
      <div className="row">
      <div className="App col-md-8">
        {
          gameOver
          ? <button>Jugar de Nuevo</button>
          : <section className="grid">
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
        }
      </div>
      < Score className="col-md-4"
        score={squirrel.body.length -2}
      />
      </div>
    );
  }

}
export default App;
