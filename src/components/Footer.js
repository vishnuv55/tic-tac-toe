import React from 'react'

const footer = {
    width : '100%',
    height : '60px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    color : 'rgb(94, 86, 86)'
}

const Footer = () => {
    return (
        <div style = {footer}>
            <h4>@developed by Vishnu</h4>
        </div>
    )
}

export default Footer