"use strict";

function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} // DOM Elements
//details to open the form
// constante for the form


var modalbg = document.querySelector(".bground"); // launch modal form

function launchModal() {
  modalbg.style.display = "block";
} //constante for button register


var modalBtn = document.querySelectorAll(".modal-btn"); // launch modal event

modalBtn.forEach(function (btn) {
  return btn.addEventListener("click", launchModal);
});
var formData = document.querySelectorAll(".formData"); //Detail to close form

document.querySelector("span.close").addEventListener("click", closePopUp);

function closePopUp() {
  modalbg.style.display = "none";
} //first Name


document.getElementById("first").addEventListener("change", firstNameValidation);

function firstNameValidation() {
  var attribut = document.getElementById("first").value;

  if (attribut !== null && attribut.length > 1) {
    console.log('le prenom est correct');
    document.getElementById("first-error").innerText = "";
    return firstNameValidation = true;
  } else {
    document.getElementById("first-error").innerText = errorMessages.first;
    console.log('le prenom est incorrect');
    return firstNameValidation = false;
  }
} //Name


document.getElementById("last").addEventListener("change", lastNameValidation);

function lastNameValidation() {
  var attribut = document.getElementById("last").value;

  if (attribut !== null && attribut.length > 1) {
    console.log('le nom est correct');
    document.getElementById("last-error").innerText = "";
    return lastNameValidation = true;
  } else {
    document.getElementById("last-error").innerText = errorMessages.last;
    console.log('le nom est incorrect');
    return lastNameValidation = false;
  }
} //email


document.getElementById("email").addEventListener("change", emailValidation);

function emailValidation() {
  var email = document.getElementById("email").value;
  var emailAttribut = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;

  if (emailAttribut.exec(email)) {
    console.log('le mail est valide');
    document.getElementById("email-error").innerText = "";
    return emailValidation = true;
  } else {
    console.log('le mail est invalide');
    document.getElementById("email-error").innerText = errorMessages.email;
    return emailValidation = false;
  }
} //qunatity number of competition


document.getElementById("quantity").addEventListener("change", quantityValidation);

function quantityValidation() {
  var attribut = document.getElementById("quantity").value;

  if (attribut > -1 && attribut < 100) {
    console.log('la quantité est correcte');
    document.getElementById("quantity-error").innerText = "";
    return quantityValidation = true;
  } else {
    document.getElementById("quantity-error").innerText = errorMessages.quantity;
    console.log('la quantité est incorrecte');
    return quantityValidation = false;
  }
} // date birthdate


document.getElementById("birthdate").addEventListener("change", birthdateValidation);

function birthdateValidation() {
  var dateAttribut = document.getElementById("birthdate").value;

  if (dateAttribut !== "") {
    console.log('la date est valide');
    document.getElementById("birthdate-error").innerText = "";
    return birthdateValidation = true;
  } else {
    console.log('le date est invalide');
    document.getElementById("birthdate-error").innerText = errorMessages.birthdate;
    return birthdateValidation = false;
  }
} //city


document.getElementById("city").addEventListener("change", locationValidation);

function locationValidation() {
  var cityChecked = "";

  if (cityChecked === "New York" || "San Francisco" || "Seattle" || "Chicago" || "Boston" || "Portland") {
    console.log('une ville est bien sectionnée');
    return locationValidation = true;
  } else cityChecked = null;

  {
    console.log('false');
    return locationValidation = false;
  }
} //validation Form


document.getElementById("myForm").addEventListener("submit", validation);

function validation(e) {
  if (firstNameValidation === true && lastNameValidation === true && emailValidation === true && quantityValidation === true && birthdateValidation === true && locationValidation === true) {
    console.log('le formulaire est valide');
  } else {
    console.log('le formulaire est non valide');
    e.preventDefault();
  }
} //error messages


var errorMessages = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ nom.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide compris entre 0 et 99",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations."
};