const set_covering = require('./algorithms/set-covering');

let wanted = new Set([
  'mt',
  'wa',
  'or',
  'id',
  'nv',
  'ut',
  'ca',
  'az',
])

const stations = {
  kone: new Set([
    'id',
    'nv',
    'ut'
  ]),
  ktwo: new Set([
    'wa',
    'id',
    'mt'
  ]),
  kthree: new Set([
    'or',
    'nv',
    'ca'
  ]),
  kfour: new Set([
    'nv',
    'ut'
  ]),
  kfive: new Set([
    'ca',
    'az'
  ])
}

console.log(set_covering(wanted, stations))
