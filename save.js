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


