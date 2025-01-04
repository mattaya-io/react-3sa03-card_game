import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { inactiveKeys, initKeys, randomWord } from '../utils/WordUtils'
import { EnumGameResult, EnumKeyState } from '../constants'

interface IGameContext {
  keys: Record<string, EnumKeyState>
  word: Array<[string, boolean]>
  penalty: number
  onKeySelect: CallableFunction
}

const GameContext = createContext<IGameContext>({
  keys: {},
  word: [],
  penalty: 0,
  onKeySelect: () => {},
})

const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [keys, setKeys] = useState(initKeys())
  const [word, setWord] = useState(randomWord())
  const [penalty, setPenalty] = useState(0)
  const [gameResult, setGameResult] = useState(EnumGameResult.PENDING)

  const resetGame = () => {
    setKeys(initKeys())
    setWord(randomWord())
    setPenalty(0)
    setGameResult(EnumGameResult.PENDING)
  }

  const onKeySelect = (ch: string) => {
    if (word.find((w) => w[0] === ch)) {
      setKeys({ ...keys, [ch]: EnumKeyState.CORRECT })
      setWord(word.map(([wch, rvl]) => [wch, rvl || wch === ch]))
      return
    }
    setKeys({ ...keys, [ch]: EnumKeyState.INCORRECT })
    setPenalty(penalty + 1)
  }

  // Game Win
  useEffect(() => {
    if (gameResult != EnumGameResult.PENDING) return
    if (word.find((w) => !w[1])) return
    setGameResult(EnumGameResult.WON)
    setTimeout(() => {
      alert('You win')
      resetGame()
    }, 500)
  }, [gameResult, word])

  // Game lose
  useEffect(() => {
    if (gameResult != EnumGameResult.PENDING) return
    if (penalty < 10) return
    setKeys((k) => inactiveKeys(k))
    setGameResult(EnumGameResult.LOSE)
    setWord((word) => word.map((w) => [w[0], true]))
    setTimeout(() => {
      alert('You lose')
      resetGame()
    }, 500)
  }, [gameResult, penalty])

  return (
    <GameContext value={{ keys, word, penalty, onKeySelect }}>
      {children}
    </GameContext>
  )
}

export { GameContext }
export default GameProvider
