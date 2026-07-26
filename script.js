const translations = {
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
  },

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
  }
};

function changeLanguage(lang) {
  document.getElementById("home").innerText = translations[lang].home;
  document.getElementById("shop").innerText = translations[lang].shop;
  document.getElementById("collections").innerText = translations[lang].collections;
  document.getElementById("about").innerText = translations[lang].about;
  document.getElementById("contact").innerText = translations[lang].contact;

  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("shopBtn").innerText = translations[lang].button;

  document.getElementById("product1").innerText = translations[lang].product1;
  document.getElementById("product2").innerText = translations[lang].product2;
  document.getElementById("product3").innerText = translations[lang].product3;

  document.getElementById("btn1").innerText = translations[lang].add;
  document.getElementById("btn2").innerText = translations[lang].add;
  document.getElementById("btn3").innerText = translations[lang].add;
}
let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cart-count").innerText = cart;
}

document.getElementById("btn1").onclick = addToCart;
document.getElementById("btn2").onclick = addToCart;
document.getElementById("btn3").onclick = addToCart;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();

// Ավելացնել զամբյուղ
document.querySelectorAll(".product button").forEach((button) => {
    button.addEventListener("click", () => {

        const product = button.parentElement;

        const name = product.querySelector("h3").innerText;
        const price = product.querySelector("p").innerText;
        const image = product.querySelector("img").src;

        cart.push({
            name,
            price,
            image
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert("Ապրանքը ավելացվեց զամբյուղ։");
    });
});

// Cart էջ
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

if (cartItems) {

    let sum = 0;

    cart.forEach((item, index) => {

        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="removeItem(${index})">Հեռացնել</button>
        `;

        cartItems.appendChild(div);

        sum += Number(item.price.replace("$", ""));
    });

    total.innerText = "$" + sum;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}
