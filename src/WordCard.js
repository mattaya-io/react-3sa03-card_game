import React from 'react'
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

const setState = ({state, guess}) => {
    state.word = guess
}

export default function WordCard(props) {

    const activationHandler = c => {
        console.log(`${c} has been activated`)
        var state = prepareStateFromWord('hello')

        let guess = state.guess + c
        setState({...state, guess})

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
                setState({...state, guess: '', attemp: state.attemp + 1})
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