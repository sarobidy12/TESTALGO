//. Calcul du quotient et reste de la division de deux entiers A et B sans utiliser l’opération de division.

var A = 10;
var B = 2;

var Reste =  A % B;

for(var i=1 ; i <= A ;i++){

    if(A === (B * i + Reste)){
        console.log('quotion est : '+ i);
        console.log('reste  est : '+ Reste);
    }

}
 
