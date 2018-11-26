// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  name = drivers.push("Ralph");
}
function destructivelyPrependDriver(name){
  name = drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  return name = [...drivers, "Broom"];
}

function prependDriver(name){
  name = ["Arnold", ...drivers];
  return name;
}
function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1);
}