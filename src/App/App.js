import React, { useState } from 'react'
import _ from 'lodash'
import Key from './Key/Key.js';
import Scoreboard from './Scoreboard/Scoreboard.js';
import Monitor from './Monitor/Monitor.js';
import Usage from './Usage/Usage.js';

const wordList = [
    "test",
    "exam",
    "code",
    "thonywhong",
    "database",
    "operating",
    "information",
    "architecture",
    "pracical",
    "zero",
    "xylem",
    "velvet",
    "wheat",
    "informationoperation",
    "engineering",
    "rickrolled",
    "function",
    "ctrlw",
    "return",
    "zawarudo",
    "phosphorus",
    "lithium",
    "quiche",
    "wellbeing",
    "ionization",
    "yttrium",
    "kangaroo",
    "masquerade",
    "teleport",
    "obey",
    "boi"
]

const prepareWord = (given_word) => {
    var obj = {
        word: given_word,
        guess: '',
        attemptLeft: 10,
        isWon: false
    }

    Array.from(given_word).map(() => {
        obj.guess = obj.guess + '_'
    })

    return obj
}

function App() {
    const [state, setState] = useState(prepareWord(_.shuffle(wordList)[0]))
    const stateUpdate = (ch) => {
        var isFail = true
        // add to guess
        Array.from(state.word).map((c,i) => {
            if(c.toLowerCase() == ch.toLowerCase())
            {
                var gArr = state.guess.split('')
                gArr[i] = ch.toLowerCase()
                isFail = false
                state.guess = gArr.toString().replaceAll(',', '')
            }
        })

        console.log(state.attemptLeft)
        // check word and guess
        if(state.word.toUpperCase() == state.guess.toUpperCase())
        {
            state.isWon = true
            setTimeout(function(){
                alert('You Win!!!')
            }, 500)
            // TO-DO
        }
        // check fail result
        if(isFail)
        {
            state.attemptLeft -= 1
        }

        // no state left
        if(state.attemptLeft <= 0)
        {
            if(!state.isWon)
            {
                setTimeout(function(){
                    alert('You lost!!!')
                }, 500)
            }
        }

        setState({...state, guess: state.guess, attemptLeft: state.attemptLeft})
    }

    return (
        <div className="screen">
            <div className="top_frame">
                <div className="left_frame">
                    <Usage />
                    <Monitor value={state.guess} />
                </div>
                <Scoreboard value={state.attemptLeft} />
            </div>
            <Key key="key" activationHandler={stateUpdate} />
        </div>
    )
}

export default App;
