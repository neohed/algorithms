/* eslint no-console: 0 */

interface Red {
  name: string
}

interface Blue {
  name: string
  age: number
}

interface Green {
  age: number
}

type K = Red & Blue;
const k: K = { age: 5, name: 'Dave' };
console.log(k.name)
console.log(k.age)

type Y = Red & Green;
const y: Y = { age: 5, name: 'Dave' };
console.log(y.age)

type X = Red | Green;
const xRed: X = { name: 'Dave' };
console.log(xRed.name)
const xGreen: X = { age: 1 };
console.log(xGreen.age)

type Z = Red | Blue;
const z: Z = { name: 'Dave', age: 2 };
console.log(z.name)
