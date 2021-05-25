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
document.querySelector("span.close").addEventListener("click", closePopUp) // selection de l'element + ecoute de l'évenement
function closePopUp() {
  modalbg.style.display = "none"; // fonction pour fermer la fenetre
}

//first Name
document.getElementById("first").addEventListener("change", firstNameValidation);
// check first name
function firstNameValidation() {
  let attribut = document.getElementById("first").value;
  if (attribut !== null && attribut.length > 1) {
    console.log('le prenom est correct');
    document.getElementById("first-error").innerText = "";
  }
  else {
    document.getElementById("first-error").innerText = errorMessages.first;
    console.log('le prenom est incorrect');
  }
}

//Name
document.getElementById("last").addEventListener("change", lastNameValidation);
// check last name
function lastNameValidation() {
  let attribut = document.getElementById("last").value;
  if (attribut !== null && attribut.length > 1) {
    console.log('le nom est correct');
    document.getElementById("last-error").innerText = "";
  }
  else {
    document.getElementById("last-error").innerText = errorMessages.last;
    console.log('le nom est incorrect');
  }
}

//email
document.getElementById("email").addEventListener("change", emailValidation);
// check email
function emailValidation() {
  let email = document.getElementById("email").value;
  let emailAttribut = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  if (emailAttribut.exec(email)) {
    console.log('le mail est valide');
    document.getElementById("email-error").innerText = "";
  }
  else {
    document.getElementById("email-error").innerText = errorMessages.email;
    console.log('le mail est invalide');
  }
}

//qunatity number of competition
document.getElementById("quantity").addEventListener("change", quantityValidation);
// check quantity
function quantityValidation() {
  let attribut = document.getElementById("quantity").value;
  if (attribut > -1 && attribut < 100) {
    console.log('la quantité est correcte');
    document.getElementById("quantity-error").innerText = "";
  }
  else {
    document.getElementById("quantity-error").innerText = errorMessages.quantity;
    console.log('la quantité est incorrecte');
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
  checkbox: "Veuillez accepter les conditions d'utilisations.",
}
