import { use } from 'react'
import Character from './Character'
import { GameContext } from '../../hooks/GameProvider'

const Word = () => {
  const { word } = use(GameContext)

  return (
    <div className='word'>
      {word.map(([ch, revealed]) => (
        <Character character={ch} isRevealed={revealed} />
      ))}
    </div>
  )
}

export default Word
