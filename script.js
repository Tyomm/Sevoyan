const translations = {
  hy: {
    home: "Գլխավոր",
    shop: "Խանութ",
    collections: "Հավաքածուներ",
    about: "Մեր մասին",
    contact: "Կապ",
    title: "ՆՈՐ ՀԱՎԱՔԱԾՈՒ",
    subtitle: "Հագի՛ր Քո Վստահությունը",
    button: "Գնել հիմա",
    product1: "Շքեղ Սպորտային Կոշիկներ",
    product2: "Պրեմիում Շապիկ",
    product3: "Շքեղ Պայուսակ",
    add: "Ավելացնել զամբյուղ"
  },

  en: {
    home: "Home",
    shop: "Shop",
    collections: "Collections",
    about: "About",
    contact: "Contact",
    title: "NEW COLLECTION",
    subtitle: "Wear Your Confidence",
    button: "Shop Now",
    product1: "Luxury Sneakers",
    product2: "Premium T-Shirt",
    product3: "Luxury Bag",
    add: "Add to Cart"
  }
};

function changeLanguage(lang){

  document.getElementById("home").textContent = translations[lang].home;
  document.getElementById("shop").textContent = translations[lang].shop;
  document.getElementById("collections").textContent = translations[lang].collections;
  document.getElementById("about").textContent = translations[lang].about;
  document.getElementById("contact").textContent = translations[lang].contact;

  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("subtitle").textContent = translations[lang].subtitle;
  document.getElementById("shopBtn").textContent = translations[lang].button;

  document.getElementById("product1").textContent = translations[lang].product1;
  document.getElementById("product2").textContent = translations[lang].product2;
  document.getElementById("product3").textContent = translations[lang].product3;

  document.getElementById("btn1").textContent = translations[lang].add;
  document.getElementById("btn2").textContent = translations[lang].add;
  document.getElementById("btn3").textContent = translations[lang].add;
  document.getElementById("shop").href = "#shop-section";
}

// ===== CART =====

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();

document.querySelectorAll(".product button").forEach((button) => {

    button.addEventListener("click", () => {

        const product = button.closest(".product");

        const item = {
            name: product.querySelector("h3").innerText,
            price: product.querySelector("p").innerText,
            image: product.querySelector("img").src
        };

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert("✅ Ապրանքը ավելացվեց զամբյուղ");
    });

});
// ===== CART PAGE =====

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

if (cartItems) {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {

        totalPrice += Number(item.price.replace("$",""));

        cartItems.innerHTML += `
        <div class="product">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="removeItem(${index})">Հեռացնել</button>
        </div>
        `;
    });

    total.textContent = "$" + totalPrice;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}
function clearCart(){

    localStorage.removeItem("cart");

    location.reload();

}
function toggleFavorite(element){

    element.classList.toggle("active");

    if(element.classList.contains("active")){
        element.innerHTML = "♥️";
    }else{
        element.innerHTML = "♡";
    }

}
