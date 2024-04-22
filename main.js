// let studente1 = "Francesco";
// let studente2 = "Luca";
// let studente3 = "Michele";


// Creiamo un array di studenti
const studenti = [
	"Francesco",
	"Luca",
	"Michele",
	"Filippo",
	"Giuseppe"
];

//Aggiungo un quarto studente
studenti.push( "Massimiliano" );

/*****************************************************************
//Cambio il valore dello 0esimo studente
studenti[0] = "Matteo";

//Attenzione a scrivere su un indice a mano (controllate il risultato)
// studenti[6] = "Matteo";

//Stampiamo tutta la lista
console.log(studenti);

//Stampiamo solo il primo, cioè elemento con indice=0
console.log( "Il primo studente è: " + studenti[0] );

//Stampiano lo studente in posizione "numero", che è dato dall'utente
let numero = parseInt( prompt("Scegli un numero tra 0 e 3") );
console.log( "Studente da prompt", studenti[numero]);

//Stampiamo uno studente casuale compreso tra 0 e 3
let casuale = Math.floor( Math.random()*4 ); 
console.log( "Studente casuale", studenti[casuale]);
****************************************************************/

//Uso un ciclo per stampare ogni studente
console.log(studenti); 
// document.getElementById("studenti").innerHTML = studenti;

// i < 4 oppure i < studenti.length
for (let i = 0; i < studenti.length; i++) {

	const studenteAttuale = studenti[i];

	console.log( studenteAttuale );

	//Questo avviene solo per gli studenti in posizione pari
	if( i%2==0 ) {
		document.getElementById("studenti").innerHTML += `<li>${studenteAttuale}</li>` ;
	}

}