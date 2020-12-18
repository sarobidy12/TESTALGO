// 6. Déterminer tous les diviseurs d’un entier X donne.

var X=8;
 
var Divisible=[];

for(var i=0;i< X;i++){

    if((X % i) ===0){
        Divisible.push(i);
    }
    
}

console.log(Divisible);