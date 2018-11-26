// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  name = drivers.push("Ralph");
}
function destructivelyPrependDriver(name){
  name = drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  
}