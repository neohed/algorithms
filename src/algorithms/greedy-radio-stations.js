const {intersection, difference} = require('../util/sets');

let states_needed = new Set([
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

const final_station_names = [];

while (states_needed.size > 0) {
  let best_station_name = '';
  let best_station_set = new Set();

  for (let stationName in stations) {
    const station = stations[stationName];
    const covered = intersection(states_needed, station);
    if (covered.size > best_station_set.size) {
      best_station_name = stationName;
      best_station_set = station
    }
  }

  states_needed = difference(states_needed, best_station_set);
  final_station_names.push(best_station_name)
}

console.log(final_station_names)
