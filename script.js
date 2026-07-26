let cart = 0;

const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        alert("✅ Product added to cart!\n🛒 Cart: " + cart);
    });
});
