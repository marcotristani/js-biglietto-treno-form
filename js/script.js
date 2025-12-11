//FASE DI PREPARAZIONE
//prendere collegamenti input dall'html
const km = document.getElementById('km');
const eta = document.getElementById('eta');
//prendere  collegamento bottone dall'html
const btnConfirm = document.getElementById('confirm');

//prendo collegamento form
const form = document.querySelector("form");

//FASE DI ELABORAZIONE

//prendere di dati da input quando viene schiacciato bottone altrimenti al momento del caricamento della pagina i valori degli input saranno vuoti
form.addEventListener("submit", (event) =>{
    //Blocco il form dal ricaricare la pagina quando schiaccio il bottone, quindi blocco la sua proprietà di default
    event.preventDefault();


    const kmUser = parseFloat(km.value) ;//Prendere da input pagina numero chilometri da percorrere
    const etaUser = parseInt(eta.value);//prendere da input pagina età passeggero
    console.log( 'km:',kmUser,'età:', etaUser)//verifica acquisizione dati

    // calcolare il prezzo del biglietto = numero kilometri * 0,21 euro
    const price = kmUser * 0.21;
    let reduction = 0 ;
    let discount = "";
7
    //calcolare sconto
    if ( etaUser < 18){
        reduction = price * 0.2;
        discount = "Sconto 20%";
    }else if( etaUser >= 65) {
        reduction = price * 0.4;
        discount = "Sconto 40%";
    }

    //calcolo prezzo finale
    const finalPrice = (price - reduction).toFixed(2);// con to fixed produco una stringa con 2 decimali
    
    //FASE DI OUTPUT
    console.log( 'prezzo finale:',finalPrice, discount);
}  
)


