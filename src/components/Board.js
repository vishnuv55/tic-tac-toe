import React from 'react'
import Square from './Square'
import '../style/Board.css'
const topLineStyle = {
    borderRadius : '5px 5px 0 0'
}
const bottomLineStyle = {
    borderRadius : '0 0 5px 5px'
}
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
                <div style={topLineStyle} className="line"></div>
                {square(1)}
                <div style={topLineStyle} className="line"></div>
                {square(2)}
            </div>
            <div className="h-line"></div>
            <div className="board-row">
                {square(3)}
                <div className="line"></div>
                {square(4)}
                <div className="line"></div>
                {square(5)}
            </div>
            <div className="h-line"></div>
            <div className="board-row">
                {square(6)}
                <div style={bottomLineStyle} className="line"></div>
                {square(7)}
                <div style={bottomLineStyle} className="line"></div>
                {square(8)}
            </div>
        </div>
    )
}

export default Board