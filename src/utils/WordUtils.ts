import { faker } from '@faker-js/faker'
import { EnumKeyState, KEYS } from '../constants'

export function initKeys(): Record<string, EnumKeyState> {
  return Array.from(KEYS.join('')).reduce(
    (obj, ch) => ({ ...obj, [ch]: EnumKeyState.ACTIVE }),
    {} as Record<string, EnumKeyState>
  )
}

export function inactiveKeys(
  keys: Record<string, EnumKeyState>
): Record<string, EnumKeyState> {
  return Object.keys(keys).reduce(
    (obj, ch) => ({
      ...obj,
      [ch]: keys[ch] === EnumKeyState.ACTIVE ? EnumKeyState.INACTIVE : keys[ch],
    }),
    {} as Record<string, EnumKeyState>
  )
}

export function randomWord(): Array<[string, boolean]> {
  const word = faker.word.sample({
    length: { min: 5, max: 24 },
    strategy: 'any-length',
  })
  const isKey = (ch: string) => KEYS.join('').includes(ch)
  return Array.from(word).map((ch) => [ch, !isKey(ch)])
}
