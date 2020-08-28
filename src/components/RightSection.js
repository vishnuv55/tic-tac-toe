import React from 'react'
import '../style/RightSection.css'

const RightSection = ({value ,onChange,backHandleClick,resetHandleClick,winner}) => {
    return(
        <div className="right-container">
            <form>
                <label className="radio-btn">
                    X
                    <input 
                        type="radio" 
                        name="xOrO"
                        value="X"
                        checked={value === "X"}
                        onChange={onChange}
                    />
                </label>
                <br />
                <label className="radio-btn">
                    O
                    <input 
                        type="radio" 
                        name="xOrO"
                        value="O"
                        checked={value === "O"}
                        onChange={onChange}
                    />

                </label>
            </form>
            <div className = "btns">
                <button className="back" onClick = {backHandleClick} >Back</button>
                <button className="reset" onClick = {resetHandleClick} >{winner}</button>
            </div>
        </div>
    )
}

export default RightSection