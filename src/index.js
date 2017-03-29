// @flow

export const shuffle = (array: string[]) =>
  [...array.sort(() => { return 0.5 - Math.random() })]

type Words = string[]
type Unit = 'word' | 'words' | 'sentence' | 'sentences' | 'paragraph' | 'paragraphs'

export const randomWord = (words: Words) => words[Math.floor(Math.random() * words.length)]
export const randomSentence = (words: Words) => {}

export const generate = (words: string[]) => {
  const randomizedWords = shuffle(words)

  return (count: number, unit: Unit) => {
    return Array(count).map((space, i) => randomizedWords[i]).join(' ')
  }
}

export default generate
