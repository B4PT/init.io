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


// AJoutez votre code ici
const estPalindrome = mot => {
  let result=false;
  let motInverse="";
  for (let i=0;i<mot.length;i++){
    
    motInverse= mot[i] + motInverse;
  }

  //console.log(motInverse.toLowerCase());
  //console.log(mot.toLowerCase());
  if (motInverse.toLowerCase()===mot.toLowerCase()){
    result=true;
  }
  return  result;
}

console.log(estPalindrome("RadAr")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false


class MaClasse {
  constructor(param1, param2 /* ... */) {
    this.propriete1 = param1;
    this.propriete2 = param2;
    // ...
  }
  methode1(/* ... */) {
    // ...
  }
  methode2(/* ... */) {
    // ...
  }
  // ...
}

const monObjet = new MaClasse(arg1, arg2, ...);
                              
                              // Ajoutez votre code ici
class Chien {
  constructor(nom, race, taille){
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  }
  decrire(){
    return `${this.nom} est un ${this.race} mesurant ${this.taille} cm`
  }
  aboyer(){
    let result = "Whouaf Whouaf !";
    if (Number(this.taille)>50){
      result = "Grrr ! Grrr !";
    }
    return result;
  }
}

const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(crockdur.decrire());
// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`);

const milou = new Chien("Milou", "fox-terrier", 26);
// "Milou est un fox-terrier mesurant 26 cm"
console.log(milou.decrire());
// "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`);

