import React, {useState , useEffect} from 'react';
import Board from './Board'
import RightSection from './RightSection'
import Stat from './Stat'
import '../style/Game.css'

const Game = () => {

    const [history , setHistory] = useState([Array(9).fill(null)])
    const [turn , setTurn] = useState('X')
    const [stepNo , setStepNo] = useState(0)
    const [xWin , setXwin] =useState(0)
    const [tie , setTie] =useState(0)
    const [oWin , setOwin] =useState(0)
    let winner = findWinner(history[stepNo]) 
    
    // function for all element click on board
    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNo + 1)
        const currentSquare = timeInHistory[stepNo]
        const squares = [...currentSquare]

        if(squares[i] || winner){
            return
        }
        squares[i] = turn
        setHistory([...timeInHistory, squares])
        setStepNo(timeInHistory.length)
        setTurn((prevTurn)=>(
            prevTurn ==='X' ? 'O' : 'X' 
        ))
    }

    //handles the code for back button
    const backHandleClick = () => {
        if(stepNo===0){
            resetHandleClick()
        }
        else{
            if(stepNo === 9 && winner === null) {
                setTie(prevTie => prevTie - 1)
            }
            setStepNo((prevStepNo)=>(
                prevStepNo-1
            ))
            setTurn((prevTurn)=>(
                prevTurn ==='X' ? 'O' : 'X' 
            ))
            if(winner === 'X') {
                setXwin(prevXwin => prevXwin-1)
            }
            if(winner === 'O') {
                setOwin(prevOwin => prevOwin -1)
            }
            winner = null
        }
    }

    //Reset the game
    const resetHandleClick = () => {
        setHistory([Array(9).fill(null)])
        setTurn('X')
        setStepNo(0)
    }

    //sets user stats
    const onFormChange = (event) => {
        setTurn(event.target.value)
        if(winner === 'X') {
            setXwin(prevXwin => prevXwin-1)
        }
        if(winner === 'O') {
            setOwin(prevOwin => prevOwin -1)
        }
        if(stepNo === 9 && winner === null) {
            setTie(prevTie => prevTie - 1)
        }
        if(stepNo !== 0) {
            setStepNo(prevStepNo => prevStepNo - 1)
        }
    }
    //update stat on each step
    useEffect(() => {
        if(winner === 'X'){
            setXwin(prevXwin => prevXwin + 1)
        }
        if(winner === 'O'){
            setOwin(prevOwin => prevOwin + 1)
        }
        if( !winner && stepNo === 9){
            setTie(prevTie => prevTie + 1)
        }
    }, [stepNo , winner])

    return (
        <div className="container">
            <Stat xWin={xWin} tie={tie} oWin={oWin}/>
            <Board 
                squares = {history[stepNo]} 
                onClick= {handleClick}
            />
            <RightSection 
                value ={turn} 
                onChange = {onFormChange}
                backHandleClick = {backHandleClick}
                resetHandleClick = {resetHandleClick}
                winner = {winner!=null | stepNo === 9 ? 'Next Game' : 'reset'}
            />
        </div>
    )
}

//function to calculate winner
function findWinner(squares) {
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