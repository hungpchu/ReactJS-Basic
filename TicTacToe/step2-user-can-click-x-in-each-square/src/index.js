import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }

class Board extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
            squares: Array(9).fill(null),
            isX: true,
        };
    }

    // handleChange = (i) =>
    // {
    //     const copySquare = this.state.squares.slice();
    //     copySquare[i] = 'X';
    //     this.setState({squares: copySquare});

    // }

    // reanderSquare(i){
    //     return (<Square value={this.state.squares[i]} onClick = {this.handleChange(i)} />);
    // }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
      }
    
      renderSquare = (i) => {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }


  renders() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }

  render()
  {
      const status = 'Next Player: X';
      return (
          <div>
              <div className="status">{status}</div>
              <div className="board-row">
                  {this.reanderSquare(0)}{this.reanderSquare(1)}{this.reanderSquare(2)}
              </div>
              <div className="board-row">
                  {this.reanderSquare(3)}{this.reanderSquare(4)}{this.reanderSquare(5)}
              </div>
              <div className="board-row">
                  {this.reanderSquare(6)}{this.reanderSquare(7)}{this.reanderSquare(8)}
              </div>
          </div>
      );
  }
}

class Game extends React.Component
{
    render()
    {
        return(
            <div className="game">
                <div className = "game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')   
);