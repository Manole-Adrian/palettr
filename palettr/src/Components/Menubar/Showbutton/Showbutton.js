import React from 'react'
import "./Showbutton.css"

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function ShowButton(props) {

    function handleClick() {
        props.setHidden(prevValue => !prevValue)
    }

    return <button className='showbutton' onClick={handleClick}>
        {props.isHidden ? <KeyboardDoubleArrowUpIcon/> : <KeyboardDoubleArrowDownIcon/>}
    </button>
}