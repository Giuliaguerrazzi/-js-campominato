// Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

var bombe = [];
var size = 16;
var possibilita = 84;

var number = bombeRandom(1, 100);

for (var i = 0; i < size; i++) {
  var number = bombeRandom(1, 100);

  if (! bombe.includes(number) ) {
    bombe.push(number);
  }
}

console.log(bombe);

// chiedi numero all'utente
var tentativo = [];
var utente = 0;

while ( (tentativo.length < possibilita) && (bombe.includes(utente) !== true ) ) {
  utente = parseInt( prompt('Inserisci un numero').trim() );
  while (utente < 1 || utente > 100 || isNaN(utente)) {
    utente = parseInt( prompt('Valore non valido, inserisci un numero').trim() );
  }
  if (tentativo.length === possibilita) {
    alert('Hai vinto!');
  }

}

console.log(tentativo);
console.log(tentativo.length);

// funzioni
function bombeRandom(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}
// controllo numero utente
function controlloNumero(numero) {
  if (bombe.includes(numero)) {
    alert('Hai perso');
  }
  else if (tentativo.includes(numero) === true)  {
    alert('Numero già inserito');
  }
  else if (tentativo.includes(numero) === false)  {
    tentativo.push(numero);
  }

}
