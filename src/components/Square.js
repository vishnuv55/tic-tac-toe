import React from 'react'
import '../style/Square.css'

const x = {
    color : 'rgb(228, 2, 2)'
} 
const o = {
    color : 'rgb(0, 0, 255)'
}

const Square = (props) => {
    return (
        <button 
            className="square"
            style = {props.value === 'X' ? x : o} 
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}
export default Square