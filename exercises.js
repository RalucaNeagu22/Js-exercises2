
//Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.//

let i=1;
do{
  console.log(i);
  i++;
}

while (i<11);




//Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.//

for (let i = 0 ; i < 21; i+=2) {
    console.log(i);
  }



//Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.//

var firstNumber = parseInt(prompt("Introduceti primul numar:"));
var secondNumber = parseInt(prompt("Introduceti al doilea numar:"));

if(isNaN(firstNumber) || isNaN(secondNumber)) {

    console.log("Numerele dvs. nu sunt valide!");
    
  }else if(firstNumber==secondNumber){
    console.log("Introduceti numere diferite!");
  }else{
    if (firstNumber < secondNumber){
        for ( var i= firstNumber + 1; i < secondNumber; i++) {
            console.log(i);
        }
     } else {
        for (var i = secondNumber + 1 ; i <firstNumber; i++){
            console.log (i);
        }
    }
    
    };


//Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.//

var providedString = prompt ("Introduceti cuvantul:");
var vowels = 0;

for (var i = 0; i < providedString.length; i++) {

    if(
        providedString[i] === "a" ||
        providedString[i] === "e" ||
        providedString[i] === "i" ||
        providedString[i] === "o" ||
        providedString[i] === "u" ||
        providedString[i] === "A" ||
        providedString[i] === "E" ||
        providedString[i] === "I" ||
        providedString[i] === "O" ||
        providedString[i] === "U" 
    ) {
        vowels++;
    }

    console.log("Numarul de vocale este: " + vowels );
}


//Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.//

var number = parseInt(prompt("Introduceti un nr: "));
for( i = 0; i <=10; i++ ) {
  let result = number * i;
  console.log("tabla inmultirii pentru numarul dvs este: " + number + "  * "  + i + " = " + result);
}

