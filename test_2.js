 //Recherche du minimum et du maximum dans un ensemble de N nombres.

var N = [4, 2, 5, 1, 3];

var Ordre =  N.sort(function(a, b) {
  return a - b;
});

console.log('Min = '+ Ordre[0]);
console.log('Min = '+ Ordre[Ordre.length - 1]);
