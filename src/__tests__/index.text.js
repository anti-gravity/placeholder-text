import generate, { randomWord, randomSentence } from '../'

describe('randomWord', () => {
  test('should return a random word', () => {
    const words = ['some', 'random', 'words']
    expect(words).toContain(randomWord(words))
    expect(randomWord(words).split(' ')).toHaveLength(1)
  })
})

describe('randomSentence', () => {
  test('should return a random sentence', () => {
    const words = ['some', 'random', 'words']
    const sentence = randomSentence(words).split(' ')
    expect(sentence).toBeGreaterThan(5)
    expect(sentence).toBeLessThan(15)
  })
})

describe('generate', () => {
  test('should return a function', () => {
    expect(typeof generate([])).toBe('function')
  })

  test('should return a word from the list', () => {
    const list = ['some', 'random', 'words']
    expect(generate(list)(1, 'word')).toEqual('some' || 'random' || 'words')
  })

  test('should return a few', () => {
    const list = ['some', 'random', 'words']
    expect(generate(list)(3, 'words').split(' ')).toHaveLength(3)
  })
})
