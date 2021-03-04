//Creare lista cognomi
var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];


//Chiedi cognome ad utente
var utente = prompt("Inserisci il tuo cognome:");

utente = utente[0].toUpperCase() + utente.substring(1);

//Inserire cognome nella lista
cognomi.push(utente);

//Stampa la lista ordinata alfabeticamente
cognomi.sort();

console.log(cognomi);

//Stampa posizione UMANA del cognome dell'utente
var indice = cognomi.indexOf(utente);

console.log(indice + 1);
