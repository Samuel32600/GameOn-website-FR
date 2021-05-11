function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }  
}

// DOM Elements
// constance to open the form
const modalbg = document.querySelector(".bground");

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//constance to close the form
const iconCloseForm = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// event click to close windows
iconCloseForm.addEventListener("click", closePopUp)

//define function
function closePopUp() {
modalbg.style.display ="none"}




