import { use } from 'react'
import { KEYS } from '../../constants'
import Key from './Key'
import { GameContext } from '../../hooks/GameProvider'

const Keyboard = () => {
  const { keys } = use(GameContext)

  return (
    <div className='keyboard'>
      {KEYS.map((row, rowIdx) => {
        return (
          <div key={rowIdx}>
            {Array.from(row).map((ch, idx) => (
              <Key key={idx} character={ch} state={keys?.[ch]} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
