// Chiedi all'utente il suo nome
const firstName = prompt("Ciao, inserisci il tuo nome");
console.log(typeof firstName, firstName);

// Chiedi all'utente il suo cognome
const lastName = prompt("Inserisci il tuo cognome");
console.log(typeof lastName, lastName);

// Chiedi all'utente il suo colore preferito
const color = prompt("Inserisci il tuo colore preferito");
console.log(typeof color, color);

console.log(
    `
    ${firstName}${lastName}${color}${76}
    `
    );

// Scrivi sulla pagina nomecognomecolorepreferito76

document.querySelector("h1").innerHTML = (
    `
    ${firstName}${lastName}${color}${76}
    `
);
