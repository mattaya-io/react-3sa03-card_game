interface CharacterProps {
  character: string
  isRevealed: boolean
}

const Character: React.FC<CharacterProps> = (props) => {
  return <span>{props.isRevealed ? props.character.toUpperCase() : '_'}</span>
}

export default Character
