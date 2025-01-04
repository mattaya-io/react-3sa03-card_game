import './App.css'
import Hangman from './components/Hangman'
import Keyboard from './components/Keyboard'
import Scoreboard from './components/Scoreboard'
import Word from './components/Word'
import GameProvider from './hooks/GameProvider'

function App() {
  return (
    <GameProvider>
      <header>
        <nav>
          <h1>HANGMAN</h1>
          <span>
            <button>RESET</button>
          </span>
        </nav>
      </header>
      <main>
        <Hangman />
        <Scoreboard />
        <Word />
        <Keyboard />
      </main>
      <footer>
        <span>Created by 6210110383</span>
      </footer>
    </GameProvider>
  )
}

export default App
