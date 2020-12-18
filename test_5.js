
//5. Détermination si A est divisible par B. Avec A et B des entiers positifs.


var A=8;
var B=2;

var Reste = A % B;

if(Reste === 0){
    console.log(A +' est divisible par '+ B);
}else{
    console.log(A +' n\'est divisible par '+ B);
}