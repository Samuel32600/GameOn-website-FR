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


//Detail to close form
//constante to close the form
const iconCloseForm = document.querySelector("span.close").addEventListener("click", closePopUp)
//close 
function closePopUp() {
  modalbg.style.display = "none";
}

const formData = document.querySelectorAll(".formData");


const firstName = document.getElementById("first");
const Name = document.getElementById("last");
const mail = document.getElementById("email");
const date = document.getElementById("birthdate");
const competitionNumber = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

//firstName validation
function firstNameValid(firstName) {
  if (firstName == "" && firstName.length >= 2) return true;
  else return false;
};

//Name validation
function nameValid(Name) {
  if (Name == "" && Name.length >= 2) return true;
  else return false;
};

//mail validation  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function mailValid(mail) {
  let mailAttribut = /\S+@\S+\.\S+/;
  return mailAttribut.test(mail);
}

// competition number validation
function competitionNumberValidation(competitionNumber) {
  let quantityAttribut = /^[0-9]+$/;
  return quantityAttribut.test(competitionNumber);
}



//var message error
let errorMessages = {
  firstName: "Veuillez entrer 2 caractères ou plus pour le champ prénom.",
  lastName: "Veuillez entrer 2 caractères ou plus pour le champ nom.",
  mail: "Veuillez entrer une adresse email valide.",
  date: "Veuillez entrer une date de naissance valide.",
  competitionNumber: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};







