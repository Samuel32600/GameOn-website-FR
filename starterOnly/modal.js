function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

//details to open the form
// constante for the form
const modalbg = document.querySelector(".bground");
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//constante for button register
const modalBtn = document.querySelectorAll(".modal-btn");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

const formData = document.querySelectorAll(".formData")


//Detail to close form
document.querySelector("span.close").addEventListener("click", closePopUp)

function closePopUp() {
  modalbg.style.display = "none"
}

//validation Form
document.getElementById("myForm").addEventListener("submit", validation)
function validation(e) {

  let form_OK = true;

  //-----first Name
  let firstName = document.getElementById("first").value;
  if (firstName !== null && firstName.length > 1) {
    console.log('le prenom est correct');
    document.getElementById("first-error").innerText = "";

  }
  else {
    console.log('le prenom est incorrect');
    document.getElementById("first-error").innerText = errorMessages.first;
    form_OK = false;
  }

  //-----name
  let name = document.getElementById("last").value;
  if (name !== null && name.length > 1) {
    console.log('le nom est correct');
    document.getElementById("last-error").innerText = "";

  }
  else {
    document.getElementById("last-error").innerText = errorMessages.last;
    console.log('le nom est incorrect');
    form_OK = false;
  }

  //-----email
  let email = document.getElementById("email").value;
  let emailAttribut = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  if (emailAttribut.exec(email)) {
    console.log('le mail est valide');
    document.getElementById("email-error").innerText = "";

  }
  else {
    console.log('le mail est invalide');
    document.getElementById("email-error").innerText = errorMessages.email;
    form_OK = false;
  }

  //-----birthdate
  let birthdateAttribut = document.getElementById("birthdate").value;
  if (birthdateAttribut !== "") {
    console.log('la date est valide');
    document.getElementById("birthdate-error").innerText = "";

  }
  else {
    console.log('le date est invalide');
    document.getElementById("birthdate-error").innerText = errorMessages.birthdate;
    form_OK = false;
  }

  //-----quantity
  let quantity = document.getElementById("quantity").value;
  if (quantity > -1 && quantity < 100 && quantity != "") {
    console.log('la quantité est correcte');
    document.getElementById("quantity-error").innerText = "";

  }
  else {
    document.getElementById("quantity-error").innerText = errorMessages.quantity;
    console.log('la quantité est incorrecte');
    form_OK = false;
  }

  //-----city
  let NewYork = document.getElementById("location1");
  let SanFrancisco= document.getElementById("location2");
  let Seattle = document.getElementById("location3");
  let Chicago = document.getElementById("location4");
  let Boston = document.getElementById("location5");
  let Portland = document.getElementById("location6");
  if (NewYork.checked || SanFrancisco.checked || Seattle.checked || Chicago.checked || Boston.checked || Portland.checked) {
    document.getElementById("location-error").innerText = "";
    console.log('une ville est bien sectionnée');    
  }
  else {
    document.getElementById("location-error").innerText = errorMessages.location;
    console.log('aucune ville de selectionner');
    form_OK = false;    
  }

  //-----Condition
  let conditionCheckbox = document.getElementById("checkbox1");
  if (conditionCheckbox.checked) {
    console.log('les conditions sont bien cochées');
    document.getElementById("condition-error").innerText = "";
  }
  else {
    console.log('les conditions sont  non cochées');
    document.getElementById("condition-error").innerText = errorMessages.condition;
    form_OK = false;
  }

  //-----form non valide
  if (!form_OK) {
    e.preventDefault();
    console.log('le formulaire est non valide');
  }
}

//error messages
let errorMessages = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ nom.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide compris entre 0 et 99",
  location: "Veuillez choisir une ville.",
  condition: "Veuillez accepter les conditions d'utilisations.",
}