const translations = {
  en: {
    home: "Home",
    shop: "Shop",
    collections: "Collections",
    about: "About",
    contact: "Contact",
    title: "NEW COLLECTION",
    subtitle: "Wear Your Confidence",
    button: "Shop Now"
    product1: "Luxury Sneakers",
product2: "Premium T-Shirt",
product3: "Luxury Bag",
add: "Add to Cart",
  
  },

  hy: {
    home: "Գլխավոր",
    shop: "Խանութ",
    collections: "Հավաքածուներ",
    about: "Մեր մասին",
    contact: "Կապ",
    title: "ՆՈՐ ՀԱՎԱՔԱԾՈՒ",
    subtitle: "Հագի՛ր Քո Վստահությունը",
    button: "Գնել հիմա"
  product1: "Շքեղ Սպորտային Կոշիկներ",
product2: "Պրեմիում Շապիկ",
product3: "Շքեղ Պայուսակ",
add: "Ավելացնել զամբյուղ",
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
}
document.getElementById("product1").innerText = translations[lang].product1;
document.getElementById("product2").innerText = translations[lang].product2;
document.getElementById("product3").innerText = translations[lang].product3;

document.getElementById("btn1").innerText = translations[lang].add;
document.getElementById("btn2").innerText = translations[lang].add;
document.getElementById("btn3").innerText = translations[lang].add;
