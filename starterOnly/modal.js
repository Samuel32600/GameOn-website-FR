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
const familyName = document.getElementById("last");
const mail = document.getElementById("email");
const date = document.getElementById("birthdate");
const competitionNumber = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");




