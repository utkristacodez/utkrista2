let cart = [];
let lastAddedItem = null;

function addToCart(id, name, price) {
    const item = cart.find(product => product.id === id);
    if (item) {
        item.quantity++;
    } else {
        const newItem = { id, name, price, quantity: 1 };
        cart.push(newItem);
        lastAddedItem = newItem;
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    const undoButton = document.getElementById('undo');
    
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - RS${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    total.innerText = totalPrice.toFixed(2);

    if (cart.length > 0) {
        checkoutButton.style.display = 'block';
        undoButton.style.display = 'block';
    } else {
        checkoutButton.style.display = 'none';
        undoButton.style.display = 'none';
    }
}

function undoAddToCart() {
    if (lastAddedItem) {
        const index = cart.indexOf(lastAddedItem);
        if (index > -1) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            lastAddedItem = null;
            updateCart();
        }
    }
}

function checkout() {
    window.location.href = 'payment.html'
    cart = [];
    lastAddedItem = null;
    updateCart();
}

function scrollToProduct() { const productSection = document.getElementById('timeline'); productSection.scrollIntoView({ behavior: 'smooth' }); }