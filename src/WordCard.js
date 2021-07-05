import React, { useState } from 'react'
import _ from 'lodash'
import CharacterCard from './CharacterCard'

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attemp: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord('hello'))

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c.toUpperCase()
        setState({...state, guess})

        console.log("Word: " + state.word + " | " + state.guess)

        if(guess.length === state.word.length)
        {
            if(guess === state.word)
            {
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
            }
            else
            {
                console.log('reset')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }

    return (
        <div>
        {
            Array.from(props.value).map(
                (c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
            )
        }
        </div>
    )
}