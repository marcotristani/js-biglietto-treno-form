//FASE DI PREPARAZIONE
//prendere collegamenti input dall'html
const km = document.getElementById("km");
const eta = document.getElementById("eta");
const nameUser = document.getElementById("name");
//prendere  collegamento bottone dall'html
const btnConfirm = document.getElementById("confirm");

//prendo collegamento form
const form = document.querySelector("form");

//collegamento con la card che contiene il tiket
const containerTiket = document.getElementById("container-tiket");

//prendo collegamento output
const namePassenger = document.getElementById("name-passenger");
const codeTiket = document.getElementById("code-tiket");
const numberPlace = document.getElementById("number-place");
const numberCarriage = document.getElementById("number-carriage");
const discountParagraph = document.getElementById("discount");
const priceTiket = document.getElementById("price-tiket");
const containerDiscount = document.getElementById("container-discount");

//collegamento con il finto bottone annulla
const btnCancel = document.getElementById("btn-cancel");

//collegamento tempo
const time = document.getElementById("time");

//imposto numero totali posti, carrozze e creo array codice treno che andrò ad associare allo scalare di posti e carrozze
const totalNumberPlace = 3;
let numberPlaceCurrent= 0;
const totalNumberCarriage = 3;
let numberCarriageCurrent = 1;
const initialCodeTiketCurrent = ['AA', 'BB', 'CC', 'DD', 'EE'];
let index = 0;

//FASE DI ELABORAZIONE

//prendere di dati da input quando viene schiacciato bottone altrimenti al momento del caricamento della pagina i valori degli input saranno vuoti
form.addEventListener("submit", (event) => {
  //Blocco il form dal ricaricare la pagina quando schiaccio il bottone, quindi blocco la sua proprietà di default
  event.preventDefault();

  //faccio apparire la card che contiene il tiket quando vengono mandati i dati
  containerTiket.classList.remove("d-none");

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


  

  

  //Pulisco il form dopo aver mandato i dati
  form.reset();
  numberPlaceCurrent++;
  if(numberPlaceCurrent > totalNumberPlace){
    alert('Posti esauriti in questa carrozza');
    numberCarriageCurrent++;
    numberPlaceCurrent = 1;
  }

    if(numberCarriageCurrent > totalNumberCarriage){
    alert('Posti esauriti in questo treno');
    index++;
    numberCarriageCurrent = 1;
  }

  
  
  //FASE DI OUTPUT
  codeTiket.innerHTML = `${initialCodeTiketCurrent[index]}${numberCarriageCurrent}${numberPlaceCurrent}`;
  numberPlace.innerHTML = numberPlaceCurrent;
  numberCarriage.innerHTML = numberCarriageCurrent;
  namePassenger.innerHTML = nameUser.value;
  priceTiket.innerHTML = `${finalPrice} &euro;`;
  if (discount !== "") {
    containerDiscount.classList.remove("d-none");
    discountParagraph.innerHTML = `${etaUser}<div class="text-danger"> ${discount}</div>`;
  } else {
    containerDiscount.classList.add("d-none");
  }

  //TEMPO AL MOMENTO DELLA CONFERMA DEL BIGLIETTO
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();
  const currentDate = currentTime.getDate();
  const currentMonth = currentTime.getMonth() + 1;
  const currentYear = currentTime.getFullYear();

  time.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}<br>${currentDate}/${currentMonth}/${currentYear}`;
  console.log(`${currentDate}/${currentMonth}/${currentYear}<`);

});
  

//creo evento per quando clicco sul finto bottone annulla
  btnCancel.addEventListener("click", () => {
    form.reset();
    containerTiket.classList.add("d-none");
  });
