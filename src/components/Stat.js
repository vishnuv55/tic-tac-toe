import React from 'react'
import '../style/Stat.css'

const Stat = (props) => {
    return(
        <div className = "left-container">
            <div className="win-stat">
                <div className="stat">
                    <div>Payer X</div>
                    <div>{props.xWin}</div>
                </div>
                <div className="stat">
                    <div>tie</div>
                    <div>{props.tie}</div>
                </div>
                <div className="stat">
                    <div>player O</div>
                    <div> {props.oWin} </div>
                </div>
            </div>
        </div>
    )
}

export default Stat