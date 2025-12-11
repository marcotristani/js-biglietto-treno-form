//FASE DI PREPARAZIONE
//prendere collegamenti input dall'html
const km = document.getElementById('km');
const eta = document.getElementById('eta');
//prendere  collegamento bottone dall'html
const btnConfirm = document.getElementById('confirm');

//FASE DI ELABORAZIONE




//prendere di dati da input quando viene schiacciato bottone altrimenti al momento del caricamento della pagina i valori degli input saranno vuoti
btnConfirm.addEventListener("click", () =>{
    const kmUser = km.value ;//Prendere da input pagina numero chilometri da percorrere
    const etaUser = eta.value;//prendere da input pagina età passeggero
    console.log( kmUser, etaUser)//verifica acquisizione dati
}  
)

// calcolare il prezzo del biglietto = numero kilometri * 0,21 euro

//se età passeggero è minorenne(<18) allora
     // calcolare sconto da applicare (prezzo biglietto * 0.2)(20% di sconto)
     // prezzo biglietto ridotto = prezzo biglietto intero - sconto
                       //OPPURE
     // prezzo biglietto ridotto = prezzo biglietto *0.8

//se età passeggero è over65(>65) allora
     // calcolare sconto da applicare (prezzo biglietto * 0.4)(40% di sconto)
     // prezzo biglietto ridotto = prezzo biglietto intero - sconto
                       //OPPURE
     // prezzo biglietto ridotto = prezzo biglietto *0.6

//FASE DI OUTPUT
//Quando viene fatto click sul bottone stampo il prezzo finale del biglietto con un console.log