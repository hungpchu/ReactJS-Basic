import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Since state is considered to be private to a component 
// that defines it, we cannot update the Board’s state directly from Square.
// When the Board’s state changes, the Square components re-render automatically. 
// the Square components are now controlled components since The Board has full control over them.
//  Square is a function component.
//  changed onClick={() => this.props.onClick()} to a shorter onClick={props.onClick} for 
//  function component Square
function Square(props)
{
    // When a Square is clicked, the onClick function provided by the Board is called
    // the 'onClick' props in the <button> tells React to set up a click event listener
    // When the <button> is clicked, React call the onClick event handler in below render method
    // -> event handler calles props.onClick() below in this Square's render method 
    // -> inform the Board component when they’re clicked
    // -> Square calls this.handleClick(i), which are passed to Square from Board 
    return(
        <button className="square"
                onClick={props.onClick} >
        {props.value}
        </button>
    );
}


class Board extends React.Component
{
    constructor(props)
    {
        super(props);
        // the state is stored in the Board component
        //  instead of the individual Square components. 
        // Keeping the state of all squares in the 
        // Board component will allow it to determine the winner in the future.
        this.state = {
            squares: Array(9).fill(null),
            // et the first move to be “X” by default.
            isX: true,
        };
    }

    // Since state is considered to be private to a component 
    // that defines it, we cannot update the Board’s state directly from Square.
    // -> we should updae state here in the Board class
    // -> we’ll pass down a function from the Board to the Square
    // -> then we’ll have Square call the function handleClick when a square is clicked
    handleClick (i)
    {
        // .slice() to create a copy of the squares array 
        // to modify instead of modifying the existing array.
        const squares = this.state.squares.slice();
        //  if the square is initially null -> (squares[i] != null) = false
        // ( calculateWinner(squares) != null ) = false since we just start 
        //   -> false || false = false 
        //  -> not go to the if condition below -> change the value 
        //  2/ after the square[i] change the value to not null
        //  then false || true = true -> go the the if condition below
        //  -> can not change the value
        if ( calculateWinner(squares) != null || squares[i] != null) return;
        var input = (this.state.isX === true) ? 'X' :'O';
        squares[i] = input;
        this.setState({
            squares: squares,
            isX: !this.state.isX,
        });
     
    }

    renderSquare(i){
        // we’re passing down two props from Board to Square: value and onClick
        // onClick prop is a function that Square can call when clicked
        // handleClick will make the following changes to Square
        //  -> Square will render the value of this.state.squares[i], which are updated following in handleClick
        return  (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
    }


    render()
    {
        const winner = calculateWinner(this.state.squares);
        let status ;
        if ( winner)
        {
            status = 'Winner: ' + winner;
        }else  status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
          
        // square function component are called many time 
        // by board and user so its state will not persist
        return (
            <div>
                <div className = "status">{status}</div>
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
        )
    }
 }

 class Game extends React.Component
{
    render()
    {
        return(
            <div className="game">
                <div className = "game-board">
                    {/* 
                     *  Board class component are only called 1 time here 
                     * so as long as we not reload the page then 
                     *  its state will be consistent
                     *  -> state will be lost when reload the whole page
                     */}
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

function calculateWinner(squares)
{
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

    for ( let i = 0; i < lines.length; i++ )
    {
        // take the number of index
        const [ a, b, c ] = lines[i];
        // if square not null since
        //  null == null == null does not count
        //  only x == x == x or o == o == o
        if ( squares[a] != null && squares[a] === squares[b] && squares[a] === squares[c] ) return squares[a];
    }
    return null;
}
