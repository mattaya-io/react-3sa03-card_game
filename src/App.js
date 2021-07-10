import React from 'react'
import WordCard from './WordCard.js';

const word = "Hello"

function App() {
    return (
        <div>
            <WordCard value={word} />
        </div>
    )
}

export default App;
