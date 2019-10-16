function dwarfrollcall(dwarves){ 
  dwarveslist = ""
  for (var i=0; i<dwarves.length; i++) {
    dwarveslist += i+1 + "." + dwarves[i] + " "
  }
  return dwarveslist 
}
function summonCaptainPlanet(planeteerCalls){
  for (var i=0; i<planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!" 
  } 
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (var i=0,
}

function findTheCheese (foods) {
  cheeses = ["cheddar", "gouda" , "camembert"]
  for (var i = 0; i < foods.length; i++) {
    if(cheeses.includes(foods[i])){
      return true
    }
  }
  return false 
} 


a = ["Ahmed", "Diro", "Osman"]
console.log(summonCaptainPlanet(a))