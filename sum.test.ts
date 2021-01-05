import { sum, sampleThrow, promiseSum } from './sum'

test('(1, 2) => 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('[] is equivalent to []', () => {
  expect([]).toEqual([])
})

test('sampleThrow returns the same array when passed an array of length 5', () => {
  expect(sampleThrow([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

test('sampleThrow must throw an error when passed an array of length 3', () => {
  expect(() => sampleThrow([1, 2, 3])).toThrow()
  expect(() => sampleThrow([1, 2, 3])).toThrow(Error)
  expect(() => sampleThrow([1, 2, 3])).toThrow('Array length must be 5')
})

// Asynchronous code
test('promiseSum rejection using catch', () => {
  expect.assertions(1)
  return promiseSum(1, 2, false).catch((err) => expect(err).toMatch('rejected'))
})

test('promiseSum rejection using rejects', () => {
  return expect(promiseSum(1, 2, false)).rejects.toMatch('rejected')
})

test('promiseSum rejection using async/await', async () => {
  const result = await promiseSum(1, 2, false).catch((err) =>
    expect(err).toMatch('rejected')
  )
})

test('promiseSum addition using then', () => {
  return promiseSum(1, 2, true).then((sum) => expect(sum).toBe(3))
})

test('promiseSum addition using resolves', () => {
  return expect(promiseSum(1, 2, true)).resolves.toBe(3)
})

test('promiseSum addition using async/await', async () => {
  const result = await promiseSum(1, 2, true)
  expect(result).toBe(3)
})
