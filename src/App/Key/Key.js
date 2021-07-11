/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import CharacterCard from './CharacterCard.js'
import '../App.css'

const KeyRow = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

export default function Key(props)
{
    const activationHandler = (ch) => {
        props.activationHandler(ch)
    }

    return (
        <div className="keyboard">
            {
                Array.from(KeyRow).map((row) => (
                    <div className="key_row">
                        {
                            Array.from(row.toUpperCase()).map((value, i) => <CharacterCard value={value} key={i} activationHandler={activationHandler} />)
                        }
                    </div>
                ))
            }
        </div>
    )
}