//FASE DI PREPARAZIONE
//prendere collegamenti input dall'html
const km = document.getElementById("km");
const eta = document.getElementById("eta");
const nameUser = document.getElementById("name");
//prendere  collegamento bottone dall'html
const btnConfirm = document.getElementById("confirm");

//prendo collegamento form
const form = document.querySelector("form");

//prendo collegamento output
const namePassenger = document.getElementById("name-passenger");
const codeTiket = document.getElementById("code-tiket");
const numberPlace = document.getElementById("number-place");
const numberCarriage = document.getElementById("number-carriage");
const discountParagraph = document.getElementById("discount");
const priceTiket = document.getElementById("price-tiket");
const containerDiscount = document.getElementById("container-discount");

//FASE DI ELABORAZIONE

//prendere di dati da input quando viene schiacciato bottone altrimenti al momento del caricamento della pagina i valori degli input saranno vuoti
form.addEventListener("submit", (event) => {
  //Blocco il form dal ricaricare la pagina quando schiaccio il bottone, quindi blocco la sua proprietà di default
  event.preventDefault();

  const kmUser = parseFloat(km.value); //Prendere da input pagina numero chilometri da percorrere
  const etaUser = eta.value; //prendere da input pagina età passeggero

  // calcolare il prezzo del biglietto = numero kilometri * 0,21 euro
  const price = kmUser * 0.21;
  let reduction = 0;
  let discount = "";
  7;
  //calcolare sconto
  if (etaUser === "minorenne") {
    reduction = price * 0.2;
    discount = "Sconto 20%";
  } else if (etaUser === "over65") {
    reduction = price * 0.4;
    discount = "Sconto 40%";
  }

  //calcolo prezzo finale
  const finalPrice = (price - reduction).toFixed(2); // con to fixed produco una stringa con 2 decimali

  //FASE DI OUTPUT
  codeTiket.innerHTML = 'AC4F07';
  numberPlace.innerHTML = 10;
  numberCarriage.innerHTML = 7;
  namePassenger.innerHTML = nameUser.value;
  priceTiket.innerHTML = finalPrice;
  if(discount !== ""){
    containerDiscount.classList.remove("d-none");
    discountParagraph.innerHTML = `${etaUser }<div class="text-danger"> ${discount}</div>` ;
  }else {
    containerDiscount.classList.add("d-none");
  }
  console.log("prezzo finale:", finalPrice, discount);
});
