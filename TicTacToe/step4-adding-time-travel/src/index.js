import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props)
{
    return (
        // handleClick from Game will happen hear when button is clicked
        <button className="square" onClick={props.onClick}>{props.value}</button>
    );
}



class Board extends React.Component
{
    renderSquare(i) {
        return (
            // input parameter for Square function
            // this.props.squares[i] is consistent in the game state
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }

    //   since this.props.squares[i] is consistent in the game state
    // the render method will show the up to date value inside this.props.squares[i]
    render()
    {
        return (
            <div>
              <div className="board-row">
                  {/* 
                    * call or trigger the Square method
                    */}
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
    }
}


class Game extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            //  stepNumber state we’ve added reflects the move displayed to the user now
            stepNumber: 0,
            isX: true
        }
    }

   
  handleClick(i) {
    //   update the history to the index that we jump to, which is this.state.stepNumber
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // get the most recent object that we jump to
    const current = history[this.state.stepNumber];
    // make a new copy from the prev one
    const copySquares = current.squares.slice();
    
    if (calculateWinner(copySquares) || copySquares[i]) return;
    
    // update the copy 
    copySquares[i] = this.state.isX ? 'X' : 'O';
    this.setState({
        // add the new copy into the history
      history: history.concat([{
        squares: copySquares
      }]),
    //  jump step that we make to get 
    // to the previous version
      stepNumber: history.length,
      isX: !this.state.isX,
    });
  }

   //  cho react biết muốn đi về index nào
   // để loại những cái most recent
  jumpTo(index){
    //   base case 
      if ( index === 0 ) return;
      this.setState({
         // delete the future version since we not need it 
          stepNumber:index - 1,
        //   check the number base on odd or even
          isX: (index % 2 ) === 0,
      });
  };
      
// this render function will be called 
// after the Square method is done
    render()
    {
        // before : const history = this.state.history.slice();
        // This ensures that if we “go back in time” and then make a new move from that point, 
        // we throw away all the “future” history that would now become incorrect.
        // -> có nghĩa là thay nếu this.state.stepNumber từ 3 thành 2 -> cái square thứ 3 sẽ bị loại bỏ
        // -> chỉ còn 2 cái đầu
        // after =
        const history = this.state.history.slice(0,this.state.stepNumber + 1 );
        
        // before: const current = history[history.length - 1];
        //  modify the Game component’s render method from always 
        // rendering the last move to rendering the currently selected move according to stepNumber
        // after:
        const current = history[this.state.stepNumber];
        
        // square = the most recent history entry to determine 
        const squares = current.squares;
        const winner = calculateWinner(squares);
         
        // in the function map (squareItem, index) is the pair of 
        //  (value, key) with name that user choose
        const moves = history.map( (squareItem, index) => {
            // if move = 0 then  'Go to game start';
            //  else 'Go to move #' + move :
            // des la string 'Go to move #' + move 
            //  or 'Go to game start'
            const desc = index ?
              'Go to move #' + index :
              'Go to game start';
            return (
                // should have key for list or <li>
              <li key={index}>
                <button onClick={() => this.jumpTo(index)}>{desc}</button>
              </li>
            );
          });

        let status;

        if ( winner ) status = 'Winner: ' + winner;
        else {
           if (this.state.stepNumber < 9) status = 'Next Player: ' + (this.state.isX ? 'X' : 'O');
           else status = 'You guys are draw';
        }

        return(
            <div className="game">
                <div className="game-board">
                    {/* 
                      * Game method call the Board method 
                      * with handleClick input + currentSquare 
                      * parameter i take values from the render method in Board
                      * like this   {this.renderSquare(0)}
                      * Unlike the array push() method you might be more familiar with, 
                      * the concat() method doesn’t mutate the original arr
                      */}
                    <Board squares={squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
};

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  