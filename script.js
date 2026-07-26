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
