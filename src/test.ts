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

// Intersection operator & creates a new type.
type K = Red & Blue;
const k: K = { age: 5, name: 'Dave' };
console.log(k.name)
console.log(k.age)

type Y = Red & Green;
const y: Y = { age: 5, name: 'Dave' };
console.log(y.age)

// Union operator | creates a set of types that is determined upon use
type X = Red | Green; // Can be either type Red or Green with either property name or age
const xRed: X = { name: 'Dave' }; // Fixes type as Red
console.log(xRed.name)
const xGreen: X = { age: 1 }; // Fixes type as Green
console.log(xGreen.age)

type Z = Red | Blue;
const z: Z = { name: 'Dave', age: 2 };
console.log(z.name)
