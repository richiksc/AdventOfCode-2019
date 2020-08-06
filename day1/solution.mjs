const { readFileSync } = require('fs');

// Read puzzle input
const input = readFileSync('./input.txt', 'utf8').trim().split('\n');
console.log(input);

// Puzzle 1
const solution1 = input
  .map(x => (Math.floor(x / 3) - 2))
  .reduce((sum, x) => sum + x);

console.log(`Part 1 Answer: ${solution1}`);

// Puzzle 2

function calculateModuleFuel(moduleMass) {
  let totalFuel = 0;
  let fuelRequired = Math.floor(moduleMass / 3) - 2;

  while (fuelRequired > 0) {
    totalFuel += fuelRequired;
    fuelRequired = Math.floor(fuelRequired / 3) - 2;
  }

  return totalFuel;
}

const solution2 = input.map(x => calculateModuleFuel(x)).reduce((sum, x) =>  sum + x);
console.log(`Part 2 Answer: ${solution2}`);
