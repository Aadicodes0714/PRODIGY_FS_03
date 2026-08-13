const cartItemsContainer =
    document.getElementById("cart-items");

const subtotalElement =
    document.getElementById("subtotal");

const totalElement =
    document.getElementById("total");

const cartCountElement =
    document.getElementById("cart-count");

const clearCartButton =
    document.getElementById("clear-cart-btn");

const checkoutButton =
    document.getElementById("checkout-btn");


// ==========================================
// GET CART
// ==========================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


// ==========================================
// SAVE CART
// ==========================================

function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

    const cart = getCart();

    cartItemsContainer.innerHTML = "";


    // Empty cart

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Looks like you haven't added
                    anything to your cart yet.
                </p>

                <a
                    href="/"
                    class="primary-btn"
                >
                    Start Shopping →
                </a>

            </div>

        `;

        updateSummary();

        return;
    }


    // Display products

    cart.forEach(product => {

        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="cart-product-image"
                onerror="
                    this.src=
                    'https://via.placeholder.com/150?text=Product'
                "
            >

            <div class="cart-product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₹${product.price}
                </p>

                <div class="quantity-control">

                    <button
                        onclick="
                            decreaseQuantity('${product._id}')
                        "
                    >
                        −
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button
                        onclick="
                            increaseQuantity('${product._id}')
                        "
                    >
                        +
                    </button>

                </div>

            </div>


            <div class="cart-product-right">

                <strong>
                    ₹${product.price * product.quantity}
                </strong>

                <button
                    class="remove-btn"
                    onclick="
                        removeFromCart('${product._id}')
                    "
                >
                    🗑️ Remove
                </button>

            </div>

        `;


        cartItemsContainer.appendChild(
            cartItem
        );

    });


    updateSummary();

}


// ==========================================
// INCREASE QUANTITY
// ==========================================

function increaseQuantity(productId) {

    const cart = getCart();

    const product =
        cart.find(
            item =>
                item._id === productId
        );


    if (product) {

        product.quantity++;

    }


    saveCart(cart);

    displayCart();

}


// ==========================================
// DECREASE QUANTITY
// ==========================================

function decreaseQuantity(productId) {

    const cart = getCart();

    const product =
        cart.find(
            item =>
                item._id === productId
        );


    if (product) {

        product.quantity--;

    }


    // Remove if quantity reaches 0

    const updatedCart =
        cart.filter(
            item =>
                item.quantity > 0
        );


    saveCart(updatedCart);

    displayCart();

}


// ==========================================
// REMOVE PRODUCT
// ==========================================

function removeFromCart(productId) {

    let cart = getCart();


    cart =
        cart.filter(
            item =>
                item._id !== productId
        );


    saveCart(cart);

    displayCart();

}


// ==========================================
// UPDATE SUMMARY
// ==========================================

function updateSummary() {

    const cart = getCart();


    let subtotal = 0;

    let totalItems = 0;


    cart.forEach(product => {

        subtotal +=
            product.price *
            product.quantity;

        totalItems +=
            product.quantity;

    });


    subtotalElement.textContent =
        `₹${subtotal}`;

    totalElement.textContent =
        `₹${subtotal}`;

    cartCountElement.textContent =
        totalItems;

}


// ==========================================
// CLEAR CART
// ==========================================

clearCartButton.addEventListener(
    "click",
    () => {

        const cart = getCart();

        if (cart.length === 0) {
            return;
        }


        const confirmClear =
            confirm(
                "Are you sure you want to clear your cart?"
            );


        if (confirmClear) {

            localStorage.removeItem("cart");

            displayCart();

        }

    }
);


// ==========================================
// CHECKOUT
// ==========================================

checkoutButton.addEventListener(
    "click",
    () => {

        const cart = getCart();


        if (cart.length === 0) {

            alert(
                "Your cart is empty!"
            );

            return;
        }


        alert(
            "Checkout feature coming soon 🚀"
        );

    }
);


// ==========================================
// INITIAL LOAD
// ==========================================

displayCart();