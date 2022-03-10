console.log('JS OK')

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// creo una lista di ipotetici invitati e stampo in console
const listName = ['davide', 'brad', 'angelina', 'jennifer', 'adam']

console.log(listName)


// chiedo all'utente il suo nome e stampo in console
const userName = prompt('Inserisci il tuo nome')

console.log(userName)

// verifico che il nome dell'utente sia nella lista 
let nameFound = false;

if (userName) {
    for (let i = 0; i < listName.length; i++) {
        const validName = listName[i];
        if (userName.trim().toLowerCase() === validName) {

            nameFound = true;
        }

    }
}

if (nameFound) {
    console.log('Nome presente in lista, buon divertimento!');
} else {
    console.log('Nome NON presente in lista, mi dispiace!');
}

