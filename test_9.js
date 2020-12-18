//8. Calcule la somme des chiffres qui composent un entier naturel N.

var N=10;

var somme=0;

for(var i = 0 ;i<= N;i++){

    if(i > 0 && Number.isInteger(i)){
        somme+=i;
    }

}

console.log(somme);
