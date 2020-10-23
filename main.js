// Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

var bombe = [];
var size = 16;

var bombeNumber = bombeRandom(1, 100);

while (bombe.length < size) {
  var bombeNumber = bombeRandom(1, 100)

  if (! bombe.includes(bombeNumber ) ) {
    bombe.push(bombeNumber);
  }

}

console.log(bombe);

// chiedi numero all'utente
for (var i = 0; i < bombe; i++) {
  var numTentativi = [];
  var tentativo = parseInt( prompt('inserisci numero') );
  while (isNan(tentativo)|| numTentativi.includes(tentativo)) {
    tentativo = parseInt( prompt('valore non valido, riprova') );
  }

  if (! bombe.includes(tentativo)) {
    alert('nessuna bomba, puoi continuare');
    numTentativi.push(tentativo);
    counter++;
  }
  else {
    alert('bomba trovata! hai perso!');
    break;
  }
}

// funzioni
function bombeRandom(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}
