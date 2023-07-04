let choice = document.querySelectorAll(".item");
let carsList = document.querySelector(".middle__cars-list");
let phonesList = document.querySelector(".middle__phones-list");
let companiesList = document.querySelector(".middle__companies-list");
let buyButton = document.querySelectorAll(".middle__choose-item");

function cars() {
  carsList.style.display = "block";
  phonesList.style.display = "none";
  companiesList.style.display = "none";
  
  console.log(buyButton);
}

function phones() {
  carsList.style.display = "none";
  phonesList.style.display = "block";
  companiesList.style.display = "none";
  
  console.log(buyButton);
}

function companies() {
  carsList.style.display = "none";
  phonesList.style.display = "none";
  companiesList.style.display = "block";
  
  console.log(buyButton);
}

choice[0].addEventListener("click", cars);

choice[1].addEventListener("click", phones);

choice[2].addEventListener("click", companies);
