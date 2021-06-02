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
} //validation Form


document.getElementById("myForm").addEventListener("submit", validation);

function validation(e) {
  var form_OK = true; //-----first Name-----

  var firstName = document.getElementById("first").value;
  var firstError = document.getElementById("first-error"); // First Valid

  if (firstName !== null && firstName.length > 1) {
    console.log('le prenom est correct');
    firstError.innerText = "";
    firstError.parentNode.removeAttribute("data-error-visible");
  } // First InValid
  else {
      console.log('le prenom est incorrect');
      firstError.parentNode.setAttribute("data-error", errorMessages.first);
      firstError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----name-----


  var name = document.getElementById("last").value;
  var nameError = document.getElementById("last-error"); // Name Valid

  if (name !== null && name.length > 1) {
    console.log('le nom est correct');
    nameError.innerText = "";
    nameError.parentNode.removeAttribute("data-error-visible");
  } // Name InValid
  else {
      console.log('le nom est incorrect');
      nameError.parentNode.setAttribute("data-error", errorMessages.last);
      nameError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----email-----


  var email = document.getElementById("email").value;
  var emailAttribut = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  var emailError = document.getElementById("email-error"); // Email Valid

  if (emailAttribut.exec(email)) {
    console.log('le mail est valide');
    emailError.innerText = "";
    emailError.parentNode.removeAttribute("data-error-visible");
  } // Email InValid
  else {
      console.log('le mail est invalide');
      emailError.parentNode.setAttribute("data-error", errorMessages.email);
      emailError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----birthdate-----


  var birthdateAttribut = document.getElementById("birthdate").value;
  var birthdateError = document.getElementById("birthdate-error"); // Birhdate Valid

  if (birthdateAttribut !== "") {
    console.log('la date est valide');
    birthdateError.innerText = "";
    birthdateError.parentNode.removeAttribute("data-error-visible");
  } // Birhdate InValid
  else {
      console.log('le date est invalide');
      birthdateError.parentNode.setAttribute("data-error", errorMessages.birthdate);
      birthdateError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----quantity-----


  var quantity = document.getElementById("quantity").value;
  var quantityError = document.getElementById("quantity-error"); // Quantity Valid

  if (quantity > -1 && quantity < 100 && quantity != "") {
    console.log('la quantité est correcte');
    quantityError.innerText = "";
    quantityError.parentNode.removeAttribute("data-error-visible");
  } // Quantity InValid
  else {
      console.log('la quantité est incorrecte');
      quantityError.parentNode.setAttribute("data-error", errorMessages.quantity);
      quantityError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----Location-----


  var NewYork = document.getElementById("location1");
  var SanFrancisco = document.getElementById("location2");
  var Seattle = document.getElementById("location3");
  var Chicago = document.getElementById("location4");
  var Boston = document.getElementById("location5");
  var Portland = document.getElementById("location6");
  var cityError = document.getElementById("location-error"); // Location Valid

  if (NewYork.checked || SanFrancisco.checked || Seattle.checked || Chicago.checked || Boston.checked || Portland.checked) {
    console.log('une ville est bien sectionnée');
    cityError.innerText = "";
    cityError.parentNode.removeAttribute("data-error-visible");
  } // Location InValid
  else {
      console.log('aucune ville de selectionner');
      cityError.parentNode.setAttribute("data-error", errorMessages.location);
      cityError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----Condition-----


  var conditionCheckbox = document.getElementById("checkbox1");
  var conditionError = document.getElementById("condition-error"); // Condition Valid

  if (conditionCheckbox.checked) {
    console.log('les conditions sont bien cochées');
    conditionError.innerText = "";
    conditionError.parentNode.removeAttribute("data-error-visible");
  } // Condition InValid
  else {
      console.log('les conditions sont  non cochées');
      conditionError.parentNode.setAttribute("data-error", errorMessages.condition);
      conditionError.parentNode.setAttribute("data-error-visible", "true");
      form_OK = false;
    } //-----form valide


  if (form_OK) {
    console.log('le formulaire est valide');
  } //-----form non valide
  else {
      e.preventDefault();
      console.log('le formulaire est non valide');
      return false;
    }

  return true;
} //error messages


var errorMessages = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ nom.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide compris entre 0 et 99",
  location: "Veuillez choisir une ville.",
  condition: "Veuillez accepter les conditions d'utilisations."
}; //details to open the formEnd
// constante for the form

var popUpFinal = document.querySelector(".form-endvalidation");
document.querySelector('.btn-submit').addEventListener("click", PopUpValidation); // launch modal form

function PopUpValidation(e) {
  e.preventDefault();

  if (validation()) {
    popUpFinal.style.display = "block";
  }
} //Detail to close formEnd


document.querySelector("span.close").addEventListener("click", closePopUpEnd);

function closePopUpEnd() {
  popUpFinal.style.display = "none";
}