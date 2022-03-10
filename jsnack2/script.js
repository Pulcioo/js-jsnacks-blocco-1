console.log('JS OK')

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo un array vuoto
const oddNumber = []


// chiedo all'utente di inserire un numero per 6 volte
for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt("Inserisci un numero"));

    // se il numero è dispari lo inserisco nell'array vuoto
    if (number % 2 != 0) {
        oddNumber.push(number);
    }

}

console.log(oddNumber)

