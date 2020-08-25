import React from 'react'
import Square from './Square'
import '../style/Board.css'

const Board = (props) => {
    const square = (i) => {
        return(
            <Square
                value = {props.squares[i]}
                onClick = {() => (props.onClick(i))}
            />
        )
    }
    return (
        <div className="board">
            <div className="board-row">
                {square(0)}
                {square(1)}
                {square(2)}
            </div>

            <div className="board-row">
                {square(3)}
                {square(4)}
                {square(5)}
            </div>

            <div className="board-row">
                {square(6)}
                {square(7)}
                {square(8)}
            </div>
        </div>
    )
}

export default Board