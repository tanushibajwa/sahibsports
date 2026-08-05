// ========== PRODUCT DATA ==========
const products = [
    // Cricket Bats
    {
        id: 1,
        name: "Sahib Pro Cricket Bat",
        category: "cricket-bats",
        price: 2499,
        oldPrice: 3499,
        image: "🏏",
        badge: "hot",
        featured: true
    },
    {
        id: 2,
        name: "Kashmir Willow Bat",
        category: "cricket-bats",
        price: 1299,
        oldPrice: 1799,
        image: "🏏",
        badge: "sale",
        featured: false
    },
    {
        id: 3,
        name: "English Willow Bat",
        category: "cricket-bats",
        price: 4999,
        oldPrice: 6999,
        image: "🏏",
        badge: "",
        featured: true
    },
    {
        id: 4,
        name: "Junior Cricket Bat",
        category: "cricket-bats",
        price: 899,
        oldPrice: 1299,
        image: "🏏",
        badge: "sale",
        featured: false
    },
    // Cricket Balls
    {
        id: 5,
        name: "Leather Cricket Ball",
        category: "cricket-balls",
        price: 599,
        oldPrice: 0,
        image: "⚾",
        badge: "",
        featured: true
    },
    {
        id: 6,
        name: "Tennis Cricket Ball (6 Pack)",
        category: "cricket-balls",
        price: 299,
        oldPrice: 499,
        image: "⚾",
        badge: "sale",
        featured: false
    },
    // Football
    {
        id: 7,
        name: "Sahib Pro Football",
        category: "football",
        price: 1799,
        oldPrice: 2499,
        image: "⚽",
        badge: "hot",
        featured: true
    },
    {
        id: 8,
        name: "Training Football",
        category: "football",
        price: 899,
        oldPrice: 0,
        image: "⚽",
        badge: "",
        featured: false
    },
    {
        id: 9,
        name: "Futsal Ball",
        category: "football",
        price: 1299,
        oldPrice: 1699,
        image: "⚽",
        badge: "",
        featured: false
    },
    // Basketball
    {
        id: 10,
        name: "Indoor Basketball",
        category: "basketball",
        price: 2199,
        oldPrice: 2999,
        image: "🏀",
        badge: "hot",
        featured: true
    },
    {
        id: 11,
        name: "Outdoor Basketball",
        category: "basketball",
        price: 1499,
        oldPrice: 0,
        image: "🏀",
        badge: "",
        featured: false
    },
    // Badminton
    {
        id: 12,
        name: "Carbon Badminton Racket",
        category: "badminton",
        price: 1599,
        oldPrice: 2199,
        image: "🏸",
        badge: "sale",
        featured: true
    },
    {
        id: 13,
        name: "Shuttlecock (12 Pack)",
        category: "badminton",
        price: 399,
        oldPrice: 0,
        image: "🏸",
        badge: "",
        featured: false
    },
    {
        id: 14,
        name: "Badminton Net Set",
        category: "badminton",
        price: 2499,
        oldPrice: 3499,
        image: "🏸",
        badge: "",
        featured: false
    },
    // Sports Wear
    {
        id: 15,
        name: "Cricket Jersey (Team Set)",
        category: "sports-wear",
        price: 3499,
        oldPrice: 0,
        image: "👕",
        badge: "hot",
        featured: true
    },
    {
        id: 16,
        name: "Sports Shoes",
        category: "sports-wear",
        price: 2999,
        oldPrice: 3999,
        image: "👟",
        badge: "sale",
        featured: false
    },
    {
        id: 17,
        name: "Training Shorts",
        category: "sports-wear",
        price: 699,
        oldPrice: 0,
        image: "🩳",
        badge: "",
        featured: false
    },
    // Protective Gear
    {
        id: 18,
        name: "Cricket Helmet",
        category: "protective-gear",
        price: 1999,
        oldPrice: 2799,
        image: "🪖",
        badge: "",
        featured: true
    },
    {
        id: 19,
        name: "Batting Pads (Pair)",
        category: "protective-gear",
        price: 2499,
        oldPrice: 0,
        image: "🛡️",
        badge: "hot",
        featured: false
    },
    {
        id: 20,
        name: "Wicket Keeping Gloves",
        category: "protective-gear",
        price: 1599,
        oldPrice: 2199,
        image: "🧤",
        badge: "",
        featured: false
    },
    // Accessories
    {
        id: 21,
        name: "Sports Water Bottle",
        category: "accessories",
        price: 399,
        oldPrice: 0,
        image: "🧴",
        badge: "",
        featured: false
    },
    {
        id: 22,
        name: "Grip Tape (5 Pack)",
        category: "accessories",
        price: 199,
        oldPrice: 349,
        image: "📦",
        badge: "sale",
        featured: false
    },
    {
        id: 23,
        name: "Kit Bag",
        category: "accessories",
        price: 1499,
        oldPrice: 1999,
        image: "🎒",
        badge: "",
        featured: true
    },
    {
        id: 24,
        name: "Skipping Rope",
        category: "accessories",
        price: 249,
        oldPrice: 0,
        image: "🪢",
        badge: "",
        featured: false
    }
];

// ========== CART STATE ==========
let cart = JSON.parse(localStorage.getItem('sahibSportsCart')) || [];

// ========== DOM ELEMENTS ==========
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// ========== UTILITY FUNCTIONS ==========
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// ========== CART FUNCTIONS ==========
function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = total;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

function saveCart() {
    localStorage.setItem('sahibSportsCart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
    renderCartItems();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${product.name} added to cart!`);
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function renderCartItems() {
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <i class="fas fa-${getIconForProduct(item.id)}"></i>
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function getIconForProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return 'box';
    
    const iconMap = {
        'cricket-bats': 'baseball-bat-ball',
        'cricket-balls': 'baseball-ball',
        'football': 'football-ball',
        'basketball': 'basketball-ball',
        'badminton': 'table-tennis',
        'sports-wear': 'tshirt',
        'protective-gear': 'shield-alt',
        'accessories': 'box'
    };
    return iconMap[product.category] || 'box';
}

function openCart() {
    if (cartSidebar) {
        cartSidebar.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('show');
    }
}

function closeCart() {
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('show');
    }
}

// ========== RENDER PRODUCTS ==========
function renderProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productsArray.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'hot' ? '🔥 Hot' : '🏷️ Sale'}</span>` : ''}
                <span style="font-size: 64px;">${product.image}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category.replace('-', ' ')}</p>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ========== FILTER PRODUCTS ==========
let currentCategory = 'all';
let currentPrice = 10000;
let currentSearch = '';
let currentSort = 'default';

function filterAndSortProducts() {
    let filtered = [...products];

    // Category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Price filter
    filtered = filtered.filter(p => p.price <= currentPrice);

    // Search
    if (currentSearch) {
        const search = currentSearch.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(search) || 
            p.category.toLowerCase().includes(search)
        );
    }

    // Sort
    switch (currentSort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    return filtered;
}

function applyFilters() {
    const filtered = filterAndSortProducts();
    renderProducts(filtered, 'allProducts');
    const count = document.getElementById('productCount');
    if (count) count.textContent = filtered.length;
}

// ========== EVENT LISTENERS ==========
// Cart button
if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
}

// Cart close
if (cartClose) {
    cartClose.addEventListener('click', closeCart);
}

// Cart overlay
if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}

// Hamburger menu
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// Category filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        applyFilters();
    });
});

// Price range
const priceRange = document.getElementById('priceRange');
const priceDisplay = document.getElementById('priceDisplay');
if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', () => {
        currentPrice = parseInt(priceRange.value);
        priceDisplay.textContent = formatPrice(currentPrice);
        applyFilters();
    });
}

// Search
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value;
        applyFilters();
    });
}
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        currentSearch = searchInput.value;
        applyFilters();
    });
}

// Sort
const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        applyFilters();
    });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    });
}

// Checkout button
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showNotification(`Order placed! Total: ${formatPrice(total)}. Thank you for shopping with Sahib Sports!`);
        cart = [];
        saveCart();
        closeCart();
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Load featured products on home page
    const featuredContainer = document.getElementById('featuredProducts');
    if (featuredContainer) {
        const featuredProducts = products.filter(p => p.featured);
        renderProducts(featuredProducts, 'featuredProducts');
    }

    // Load all products on products page
    const allProductsContainer = document.getElementById('allProducts');
    if (allProductsContainer) {
        applyFilters();
    }

    // Initialize cart
    saveCart();
    renderCartItems();
});
