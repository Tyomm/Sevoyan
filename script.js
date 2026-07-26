let cart = 0;

const cartCount = document.getElementById("cart-count");

const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {

button.addEventListener("click", () => {

cart++;

cartCount.textContent = cart;

});

});
function changeLanguage(lang){

const nav = document.querySelectorAll("nav a");
const heroTitle = document.querySelector(".hero h2");
const heroText = document.querySelector(".hero p");
const heroButton = document.querySelector(".hero button");

if(lang==="hy"){

nav[0].textContent="Գլխավոր";
nav[1].textContent="Խանութ";
nav[2].textContent="Հավաքածուներ";
nav[3].textContent="Մեր մասին";
nav[4].textContent="Կապ";

heroTitle.textContent="ՆՈՐ ՀԱՎԱՔԱԾՈՒ";
heroText.textContent="Հագի՛ր Քո Վստահությունը";
heroButton.textContent="Գնել հիմա";

}else{

nav[0].textContent="Home";
nav[1].textContent="Shop";
nav[2].textContent="Collections";
nav[3].textContent="About";
nav[4].textContent="Contact";

heroTitle.textContent="NEW COLLECTION";
heroText.textContent="Wear Your Confidence";
heroButton.textContent="Shop Now";

}

}
