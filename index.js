const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittenName) {
  kittens.push(kittenName);
  return kittens;
}

function destructivelyPrependKitten(kittenName) {
  kittens.unshift(kittenName);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(kittenName) {
  kittens = [...kittens, kittenName];
  return kittens;
}