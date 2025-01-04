import { useEffect, useState, use } from 'react'
import { GameContext } from '../../hooks/GameProvider'
import { EnumKeyState } from '../../constants'

interface KeyProps {
  character: string
  state: EnumKeyState
}

const Key: React.FC<KeyProps> = (props) => {
  const { onKeySelect } = use(GameContext)
  const [classNames, setClassNames] = useState('')

  const handleClick = () => {
    onKeySelect(props.character)
  }

  useEffect(() => {
    switch (props.state) {
      case EnumKeyState.CORRECT:
        setClassNames('correct')
        break
      case EnumKeyState.INCORRECT:
        setClassNames('incorrect')
        break
      default:
        setClassNames('')
        break
    }
  }, [props.state])

  return (
    <span className='key'>
      <button
        onClick={handleClick}
        className={classNames}
        disabled={props.state != EnumKeyState.ACTIVE}
      >
        {props.character.toUpperCase()}
      </button>
    </span>
  )
}

export default Key
