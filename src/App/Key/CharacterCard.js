/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import '../App.css';

export default function CharacterCard(props)
{
    const [active, setActive] = useState(false)

    const activate = () => {
        setActive(!active)
        props.activationHandler(props.value)
    }

    const className = `card ${active ? 'activeCard' : ''}`
    return (
        <div className={className} onClick={activate}>{ props.value }</div>
    )
}