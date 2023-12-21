console.log("!index.js")

const now = new Date();

console.log(now.toLocaleString())

function flipCoin() {
  return Math.floor(Math.random() * 2) === 1 ? "tails" : "heads";
}

console.log(flipCoin())