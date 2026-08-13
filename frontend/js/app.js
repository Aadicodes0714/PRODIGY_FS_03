const productsContainer =
    document.getElementById("products-container");

const searchInput =
    document.getElementById("search-input");

const categoryFilter =
    document.getElementById("category-filter");

const sortProducts =
    document.getElementById("sort-products");

let allProducts = [];


// ==========================================
// LOAD PRODUCTS
// ==========================================

async function loadProducts() {

    try {

        const response =
            await fetch("/api/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        allProducts =
            await response.json();

        applyFilters();

    } catch (error) {

        console.error(error);

        productsContainer.innerHTML = `
            <div class="error-message">

                <h3>
                    Unable to load products ❌
                </h3>

                <p>
                    Please try again later.
                </p>

            </div>
        `;
    }
}


// ==========================================
// APPLY SEARCH + FILTER + SORT
// ==========================================

function applyFilters() {

    let products =
        [...allProducts];


    // ==============================
    // SEARCH
    // ==============================

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    if (searchText !== "") {

        products =
            products.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchText)

            );
    }


    // ==============================
    // CATEGORY FILTER
    // ==============================

    const selectedCategory =
        categoryFilter.value;

    if (selectedCategory !== "all") {

        products =
            products.filter(
                product =>
                    product.category ===
                    selectedCategory
            );
    }


    // ==============================
    // SORT
    // ==============================

    const sortOption =
        sortProducts.value;

    if (sortOption === "low-high") {

        products.sort(
            (a, b) =>
                a.price - b.price
        );
    }

    else if (sortOption === "high-low") {

        products.sort(
            (a, b) =>
                b.price - a.price
        );
    }


    displayProducts(products);
}


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(products) {

    productsContainer.innerHTML = "";


    if (products.length === 0) {

        productsContainer.innerHTML = `

            <div class="empty-message">

                <h3>
                    No products found 😕
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;
    }


    products.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="
                    this.src=
                    'https://via.placeholder.com/400x300?text=Product'
                "
            >

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <strong>
                        ₹${product.price}
                    </strong>

                    <button
                        onclick="
                            addToCart('${product._id}')
                        "
                    >
                        Add to Cart 🛒
                    </button>

                </div>

            </div>

        `;

        productsContainer.appendChild(card);

    });
}


// ==========================================
// SEARCH EVENT
// ==========================================

searchInput.addEventListener(
    "input",
    applyFilters
);


// ==========================================
// CATEGORY EVENT
// ==========================================

categoryFilter.addEventListener(
    "change",
    applyFilters
);


// ==========================================
// SORT EVENT
// ==========================================

sortProducts.addEventListener(
    "change",
    applyFilters
);


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

    const product =
        allProducts.find(
            item =>
                item._id === productId
        );


    if (!product) {
        return;
    }


    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existingProduct =
        cart.find(
            item =>
                item._id === productId
        );


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            _id: product._id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        `${product.name} added to cart 🛒`
    );
}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const cartCount =
        document.getElementById(
            "cart-count"
        );


    if (cartCount) {

        cartCount.textContent =
            count;

    }
}


// ==========================================
// INITIALIZE
// ==========================================

loadProducts();

updateCartCount();