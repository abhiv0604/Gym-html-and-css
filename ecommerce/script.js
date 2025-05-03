
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} added to cart!`);
}


function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    cartItemsContainer.innerHTML = cart
        .map((item) => `<li>${item}</li>`)
        .join('');
}
function clearCart(){
    localStorage.removeItem('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    alert('Cart cleared!');
}
document.getElementById('clear-cart').addEventListener('click', clearCart);

