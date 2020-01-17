// Ajoutez votre code ici
function compterVoyelles(mot){
  let mo=mot.toLowerCase();
  let result=0;
  for(let i=0;i<mo.length;i++){
    if ((mo[i]==="a")|(mo[i]==="e")|(mo[i]==="i")|(mo[i]==="o")|(mo[i]==="u")){
      result++;
    }
  }
  return result;
}

console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7

// Affectation d'une fonction anonyme à la variable maVariable
const maVariable = (param1, param2, ...) => {
  // Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);


function convertirLettreLeet(lettre) {
  // Par défaut, la lettre ne change pas
  let lettreLeet = lettre;
  switch (lettre.toLowerCase()) {
    case "a":
      lettreLeet = "4";
      break;
    case "b":
      lettreLeet = "8";
      break;
    case "e":
      lettreLeet = "3";
      break;
    case "l":
      lettreLeet = "1";
      break;
    case "o":
      lettreLeet = "0";
      break;
    case "s":
      lettreLeet = "5";
      break;
    case "t":
      lettreLeet = "7";
      break;
  }
  return lettreLeet;
}

// Renvoie un mot converti en "leet speak"
function convertirMotLeet(mot) {
  let motLeet = "";
  for (lettre of mot) {
    motLeet += convertirLettreLeet(lettre);
  }
  return motLeet;
}
 
console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"


