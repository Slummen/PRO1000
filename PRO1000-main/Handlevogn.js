const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", addToCart);

function addToCart() {
    // Get the selected options and quantity
    const storage = document.querySelector("select").value;
    const quantity = parseInt(document.querySelector("input[type=number]").value);
    
    // Create a new item object with the selected options and quantity
    const newItem = {
        name: "Iphone 14 Pro Max",
        price: 14999,
        storage: storage,
        quantity: quantity
    };
    
    // Add the item to the cart (you will need to implement the cart functionality)
    addToCart(newItem);
}