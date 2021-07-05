import React from 'react'
import CharacterCard from './CharacterCard'

export default function WordCard(props) {
    return (
        <div class="card">
        {
            Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>)
        }
        </div>
    )
}