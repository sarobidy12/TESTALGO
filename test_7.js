//7. Déterminer si un nombre entier X est premier ou non.

function nbrPremier(nbr) {

    for(var i = 2; i < nbr; i++){
        if(nbr%i === 0){
            return false;
        } 
    }

    return nbr > 1;
    
}

console.log(nbrPremier(9));
