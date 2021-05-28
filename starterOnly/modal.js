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
  const firstError = document.getElementById("first-error");

  if (firstName !== null && firstName.length > 1) {
    console.log('le prenom est correct');
    firstError.innerText = ""; 
    firstError.parentNode.removeAttribute("data-error-visible");
  }
  else {
    console.log('le prenom est incorrect');    
    firstError.parentNode.setAttribute("data-error", errorMessages.first);
    firstError.parentNode.setAttribute("data-error-visible", "true");
    form_OK = false;
  }

  //-----name
  let name = document.getElementById("last").value;
  const nameError = document.getElementById("last-error");

  if (name !== null && name.length > 1) {
    console.log('le nom est correct');
    nameError.innerText = "";
    nameError.parentNode.removeAttribute("data-error-visible");

  }
  else {
    console.log('le nom est incorrect');
    nameError.parentNode.setAttribute("data-error", errorMessages.last);
    nameError.parentNode.setAttribute("data-error-visible", "true");
    form_OK = false;
  }

  //-----email
  let email = document.getElementById("email").value;
  let emailAttribut = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  const emailError = document.getElementById("email-error");

  if (emailAttribut.exec(email)) {
    console.log('le mail est valide');
    emailError.innerText = "";
    emailError.parentNode.removeAttribute("data-error-visible"); 
  }
  else {
    console.log('le mail est invalide');
    emailError.parentNode.setAttribute("data-error", errorMessages.email);
    emailError.parentNode.setAttribute("data-error-visible", "true");
    form_OK = false;
  }

  //-----birthdate
  let birthdateAttribut = document.getElementById("birthdate").value;
  const birthdateError = document.getElementById("birthdate-error");

  if (birthdateAttribut !== "") {
    console.log('la date est valide');
    birthdateError.innerText = "";
    birthdateError.parentNode.removeAttribute("data-error-visible");
  }
  else {
    console.log('le date est invalide');
    birthdateError.parentNode.setAttribute("data-error", errorMessages.birthdate);
    birthdateError.parentNode.setAttribute("data-error-visible", "true");
    form_OK = false;
  }

  //-----quantity
  let quantity = document.getElementById("quantity").value;
  const quantityError = document.getElementById("quantity-error");

  if (quantity > -1 && quantity < 100 && quantity != "") {
    console.log('la quantité est correcte');
    quantityError.innerText = "";
    quantityError.parentNode.removeAttribute("data-error-visible");
  }
  else {
    console.log('la quantité est incorrecte');
    quantityError.parentNode.setAttribute("data-error", errorMessages.quantity);
    quantityError.parentNode.setAttribute("data-error-visible", "true");
    form_OK = false;
  }

  //-----city
  let NewYork = document.getElementById("location1");
  let SanFrancisco = document.getElementById("location2");
  let Seattle = document.getElementById("location3");
  let Chicago = document.getElementById("location4");
  let Boston = document.getElementById("location5");
  let Portland = document.getElementById("location6");
  const cityError = document.getElementById("location-error");

  if (NewYork.checked || SanFrancisco.checked || Seattle.checked || Chicago.checked || Boston.checked || Portland.checked) {
    console.log('une ville est bien sectionnée');
    cityError.innerText = "";
    cityError.parentNode.removeAttribute("data-error-visible");
  }
  else {
    console.log('aucune ville de selectionner');
    cityError.parentNode.setAttribute("data-error", errorMessages.location);
    cityError.parentNode.setAttribute("data-error-visible", "true");
    form_OK = false;
  }

  //-----Condition
  let conditionCheckbox = document.getElementById("checkbox1");
  const conditionError = document.getElementById("condition-error")
  if (conditionCheckbox.checked) {
    console.log('les conditions sont bien cochées');
    conditionError.innerText = "";    
  }
  else {
    console.log('les conditions sont  non cochées');    
    conditionError.parentNode.setAttribute("data-error", errorMessages.condition);
    conditionError.parentNode.setAttribute("data-error-visible", "true");
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

