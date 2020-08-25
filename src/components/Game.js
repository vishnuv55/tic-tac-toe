import React, {useState} from 'react';
import Board from './Board'
import '../style/Game.css'

const Game = () => {

    const [history , setHistory] = useState([Array(9).fill(null)])
    const [xTurn , setXturn] = useState(true)
    const [stepNo , setStepNo] = useState(0)
    let winner = findWinner(history[stepNo])
    const player = (xTurn ? 'X' : 'O')
    const details = winner ? 'Winner Is ' + winner : (stepNo === 9 ? 'Oops...Its a Draw' : 'Current Player : ' + player) 
    
    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNo + 1)
        const currentSquare = timeInHistory[stepNo]
        const squares = [...currentSquare]

        if(squares[i] || winner){
            return
            
        }
        squares[i] = xTurn ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setStepNo(timeInHistory.length)
        setXturn(!xTurn)
    }
    
    const backHandleClick = () => {
        if(stepNo===0){
            resetHandleClick()
        }
        else{
            setStepNo((prevStepNo)=>(
                prevStepNo-1
            ))
            setXturn(!xTurn)
            winner='null'
        }
    }

    const resetHandleClick = () => {
        setHistory([Array(9).fill(null)])
        setXturn(true)
        setStepNo(0)
    }

    return (
        <div className="container">
            <h2 className="show-win" >{details}</h2>
            <Board 
                squares = {history[stepNo]} 
                onClick= {handleClick}
            />
            <div class = "btns">
                <button onClick = {backHandleClick} >Back</button>
                <button onClick = {resetHandleClick} >Reset</button>
            </div>
        </div>
    )
}

export function findWinner(squares) {
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for ( let i = 0 ; i < winLines.length ; i++) {
        const [a,b,c] = winLines[i]
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export default Game