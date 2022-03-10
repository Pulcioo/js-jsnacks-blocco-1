console.log('JS OK')

// Chiedi un numero di 4 cifre all’utente 
// e calcola la somma di tutte le cifre che compongono il numero.


// chiedo all'utente un numero di 4 cifre
let userNumber = prompt("inserisci un numero di 4 cifre");

console.log(userNumber);

// divido la stringa in un array di sottostringhe
let numberSplit = userNumber.split('');

console.log(numberSplit);

// faccio la somma delle cifre 
let sum = 0;

for (let i = 0; i < numberSplit.length; i++) {

    sum += parseInt(numberSplit[i]);
}

console.log(sum);