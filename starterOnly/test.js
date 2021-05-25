document.querySelector(".btn-submit").addEventListener("click", checkForm)
function checkForm() {
  console.log("Je vais vérifier le formulaire")
}


function checkContent(type) {

  let errorMessages = {
    first: "Veuillez entrer 2 caractères ou plus pour le champ prénom.",
    name: "Veuillez entrer 2 caractères ou plus pour le champ nom.",
    email: "Veuillez entrer une adresse email valide.",
    birthdate: "Veuillez entrer une date de naissance valide.",
    quantity: "Veuillez entrer un nombre valide.",
    location: "Veuillez choisir une ville.",
    checkbox: "Veuillez accepter les conditions d'utilisations.",
  };

  //first name + name validation
  if (type === "first" || type === "name") {
    let wording = document.getElementById(type).value;
    console.log(type)
    if (wording !== "" && wording.length >= 1) {
      console.log("Le ", type, "est bon")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }


    // email validation
  } else if (type === "email") {
    let wording = document.getElementById(type).value;
    let reg_Mail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/; //ecriture du mail https://www.easy-micro.org/verifier-un-mail.php&id=107
    console.log(type)
    if (reg_Mail.exec(wording)) {
      console.log("Le ", type, "est bon")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }

    // date validation
  } else if (type === "date") {
    let wording = document.getElementById(type).value;    
    console.log(type)
    if (wording != null) {
      console.log("La ", type, "est correcte")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }

    // quantity validation
  } else if (type === "quantity") {
    let wording = document.getElementById(type).value;
    console.log(type)
    if (wording >= 0 && wording <= 99) {
      console.log("La ", type, "est bonne")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }
  }
}


//last Name
//constante last name
const lastNameInput = document.getElementById("last");
// check last name
function lastNameValidation() {
  let lastNameAttribut = lastNameInput.value;
  if (lastNameAttribut !== null && lastNameAttribut.length >= 2) return true;  
  else return false;  
}

//email
//constante email
const emailInput = document.getElementById("email");
// check email
function emailValidation() {
  let email = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  return email.test(emailInput.value);
}

// number Competition
const quantityInput = document.getElementById("quantity");
// check if quantity is a valid number
function quantityValidation() {
  let number = /^[0-9]+$/;
  return number.test(quantityInput.value);
}

// city
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]")
function locationValidation() {
  for (let radio of locationInput) {
    if (radio.checked === true) return true;  
  else return false;
}