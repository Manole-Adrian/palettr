import React from 'react'
import "./Showbutton.css"

export default function ShowButton(props) {

    function handleClick() {
        props.setHidden(prevValue => !prevValue)
    }

    return <button className='showbutton' onClick={handleClick}>
        {props.isHidden ? "Hide" : "Show"}
    </button>
}