import { use } from 'react'
import { GameContext } from '../../hooks/GameProvider'

const PENALTIES = [
  <></>,
  <img src='/assets/hangman/state0.png' />,
  <img src='/assets/hangman/state1.png' />,
  <img src='/assets/hangman/state2.png' />,
  <img src='/assets/hangman/state3.png' />,
  <img src='/assets/hangman/state4.png' />,
  <img src='/assets/hangman/state5.png' />,
  <img src='/assets/hangman/state6.png' />,
  <img src='/assets/hangman/state7.png' />,
  <img src='/assets/hangman/state8.png' />,
  <img src='/assets/hangman/state9.png' />,
]

const Hangman = () => {
  const { penalty } = use(GameContext)

  return <div className='hangman'>{PENALTIES[penalty]}</div>
}

export default Hangman
