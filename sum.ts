export const sum = (a: number, b: number): number => a + b
export const sampleThrow = (arr: number[]): number[] => {
  if (arr.length !== 5) throw new Error('Array length must be 5')
  return arr
}
export const promiseSum = (a: number, b: number, willResolve: boolean) =>
  new Promise((resolve, reject) => {
    if (willResolve) resolve(a + b)
    reject('rejected')
  })
