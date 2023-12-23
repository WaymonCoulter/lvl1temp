console.log("!index.js")

const now = new Date();

console.log(now.toLocaleString())

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(2) === 1 ? "tails" : "heads")

console.log(getRandomInt(6) + 1)