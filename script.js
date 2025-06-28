// Ice Cream Products Data
const products = [
    {
        id: 1,
        name: "Strawberry Dream",
        description: "Creamy strawberry ice cream with real fruit pieces and a hint of vanilla",
        price: 4.99,
        category: "fruity",
        emoji: "🍓",
        gradient: "linear-gradient(45deg, #FFB6C1, #FF99AA)",
        featured: true,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Whipped Cream", "Sprinkles", "Cherry", "Chocolate Chips"]
    },
    {
        id: 2,
        name: "Blueberry Bliss",
        description: "Sweet blueberry ice cream with fresh berry swirls and cream",
        price: 5.49,
        category: "fruity",
        emoji: "🫐",
        gradient: "linear-gradient(45deg, #B6E5FF, #99D6FF)",
        featured: true,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Whipped Cream", "Granola", "Fresh Berries", "Honey Drizzle"]
    },
    {
        id: 3,
        name: "Chocolate Cloud",
        description: "Rich chocolate ice cream with fudge swirls and cocoa magic",
        price: 5.99,
        category: "chocolate",
        emoji: "🍫",
        gradient: "linear-gradient(45deg, #E6CCFF, #D6B3FF)",
        featured: true,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Chocolate Sauce", "Marshmallows", "Brownie Bits", "Nuts"]
    },
    {
        id: 4,
        name: "Vanilla Stardust",
        description: "Premium vanilla bean ice cream with sparkles of sweetness",
        price: 4.49,
        category: "vanilla",
        emoji: "⭐",
        gradient: "linear-gradient(45deg, #CCFFE6, #B3FFDB)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Caramel Sauce", "Sprinkles", "Cookie Crumbs", "Vanilla Wafers"]
    },
    {
        id: 5,
        name: "Mint Meadow",
        description: "Cool mint ice cream with chocolate chip surprises",
        price: 5.29,
        category: "fruity",
        emoji: "🌿",
        gradient: "linear-gradient(45deg, #CCFFE6, #99FFCC)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Chocolate Chips", "Mint Leaves", "Whipped Cream", "Oreo Crumbs"]
    },
    {
        id: 6,
        name: "Unicorn Magic",
        description: "Magical rainbow ice cream with cotton candy swirls and edible glitter",
        price: 6.99,
        category: "special",
        emoji: "🦄",
        gradient: "linear-gradient(45deg, #E6CCFF, #FFB6C1, #B6E5FF)",
        featured: true,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Cotton Candy", "Edible Glitter", "Rainbow Sprinkles", "Gummy Bears"]
    },
    {
        id: 7,
        name: "Peach Paradise",
        description: "Smooth peach ice cream with chunks of fresh peaches",
        price: 5.79,
        category: "fruity",
        emoji: "🍑",
        gradient: "linear-gradient(45deg, #FFDBCC, #FFD1B8)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Peach Slices", "Whipped Cream", "Granola", "Honey"]
    },
    {
        id: 8,
        name: "Cookies & Dreams",
        description: "Vanilla ice cream loaded with chocolate chip cookie dough",
        price: 6.49,
        category: "chocolate",
        emoji: "🍪",
        gradient: "linear-gradient(45deg, #FFF5CC, #FFE4B5)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Cookie Dough", "Chocolate Chips", "Caramel", "Fudge"]
    },
    {
        id: 9,
        name: "Mango Tango",
        description: "Tropical mango ice cream with coconut flakes and sunshine",
        price: 5.99,
        category: "fruity",
        emoji: "🥭",
        gradient: "linear-gradient(45deg, #FFF5CC, #FFEB99)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Coconut Flakes", "Mango Chunks", "Lime Zest", "Toasted Coconut"]
    },
    {
        id: 10,
        name: "Cosmic Chocolate",
        description: "Dark chocolate ice cream with star-shaped chocolate pieces",
        price: 6.29,
        category: "chocolate",
        emoji: "🌟",
        gradient: "linear-gradient(45deg, #E6CCFF, #B8A9FF)",
        featured: true,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Star Chocolates", "Galaxy Dust", "Fudge Sauce", "Crushed Oreos"]
    },
    {
        id: 11,
        name: "Bubblegum Pop",
        description: "Pink bubblegum flavored ice cream with colorful candy pieces",
        price: 5.49,
        category: "special",
        emoji: "🍭",
        gradient: "linear-gradient(45deg, #FFB6C1, #FF99CC)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Gum Balls", "Pop Rocks", "Colorful Sprinkles", "Cotton Candy"]
    },
    {
        id: 12,
        name: "Lemon Sunshine",
        description: "Zesty lemon ice cream with candied lemon peel and brightness",
        price: 5.19,
        category: "fruity",
        emoji: "🍋",
        gradient: "linear-gradient(45deg, #FFF5CC, #FFFF99)",
        featured: false,
        sizes: ["Small", "Medium", "Large"],
        toppings: ["Lemon Zest", "Candied Lemon", "Whipped Cream", "Lemon Cookies"]
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let filteredProducts = [...products];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    updateCartCount();
    setupEventListeners();
    
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadFeaturedProducts();
            setupSearchFunctionality();
            setupCategoryNavigation();
            break;
        case 'products.html':
            loadAllProducts();
            setupProductSearch();
            setupProductFilters();
            break;
        case 'cart.html':
            loadCartPage();
            break;
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('productModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Load Featured Products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    const featuredProducts = products.filter(product => product.featured);
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load All Products
function loadAllProducts() {
    const productsContainer = document.getElementById('productsGrid');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Create Product Card HTML
function createProductCard(product) {
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image" style="background: ${product.gradient};">
                <div class="product-emoji">${product.emoji}</div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="product-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Quick Add to Cart
function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        emoji: product.emoji,
        gradient: product.gradient,
        size: 'Medium',
        toppings: [],
        quantity: 1
    };
    
    addToCart(cartItem);
    showNotification(`${product.name} added to cart!`, 'success');
}

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = createProductModalContent(product);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize modal functionality
    initializeModalControls();
}

// Create Product Modal Content
function createProductModalContent(product) {
    return `
        <div class="modal-product-image" style="background: ${product.gradient};">
            <div class="modal-product-emoji">${product.emoji}</div>
        </div>
        <h2 class="modal-product-title">${product.name}</h2>
        <p class="modal-product-description">${product.description}</p>
        
        <div class="product-options">
            <div class="option-group">
                <label class="option-label">Size:</label>
                <div class="option-buttons" id="sizeOptions">
                    ${product.sizes.map(size => `
                        <button class="option-btn ${size === 'Medium' ? 'active' : ''}" 
                                onclick="selectOption('size', '${size}', this)">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <label class="option-label">Toppings (Optional):</label>
                <div class="option-buttons" id="toppingsOptions">
                    ${product.toppings.map(topping => `
                        <button class="option-btn" 
                                onclick="toggleTopping('${topping}', this)">
                            ${topping}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-footer">
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="changeQuantity(-1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-display" id="quantityDisplay">1</span>
                <button class="quantity-btn" onclick="changeQuantity(1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="modal-price" id="modalPrice">$${product.price.toFixed(2)}</div>
        </div>
        
        <button class="add-to-cart-btn" onclick="addCurrentProductToCart()">
            <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
    `;
}

// Initialize Modal Controls
function initializeModalControls() {
    window.selectedSize = 'Medium';
    window.selectedToppings = [];
    window.selectedQuantity = 1;
}

// Select Option (Size)
function selectOption(type, value, element) {
    // Remove active class from siblings
    element.parentNode.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected option
    element.classList.add('active');
    
    if (type === 'size') {
        window.selectedSize = value;
    }
    
    updateModalPrice();
}

// Toggle Topping
function toggleTopping(topping, element) {
    element.classList.toggle('active');
    
    if (window.selectedToppings.includes(topping)) {
        window.selectedToppings = window.selectedToppings.filter(t => t !== topping);
    } else {
        window.selectedToppings.push(topping);
    }
    
    updateModalPrice();
}

// Change Quantity
function changeQuantity(change) {
    window.selectedQuantity = Math.max(1, window.selectedQuantity + change);
    document.getElementById('quantityDisplay').textContent = window.selectedQuantity;
    updateModalPrice();
}

// Update Modal Price
function updateModalPrice() {
    if (!currentProduct) return;
    
    let basePrice = currentProduct.price;
    let sizeMultiplier = 1;
    
    // Size price adjustments
    switch(window.selectedSize) {
        case 'Small':
            sizeMultiplier = 0.8;
            break;
        case 'Large':
            sizeMultiplier = 1.3;
            break;
    }
    
    // Toppings price (0.50 each)
    const toppingsPrice = window.selectedToppings.length * 0.5;
    
    const totalPrice = (basePrice * sizeMultiplier + toppingsPrice) * window.selectedQuantity;
    document.getElementById('modalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

// Add Current Product to Cart
function addCurrentProductToCart() {
    if (!currentProduct) return;
    
    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        emoji: currentProduct.emoji,
        gradient: currentProduct.gradient,
        size: window.selectedSize,
        toppings: [...window.selectedToppings],
        quantity: window.selectedQuantity
    };
    
    addToCart(cartItem);
    closeModal();
    showNotification(`${currentProduct.name} added to cart!`, 'success');
}

// Add to Cart
function addToCart(item) {
    // Check if item with same configuration already exists
    const existingItemIndex = cart.findIndex(cartItem => 
        cartItem.id === item.id && 
        cartItem.size === item.size && 
        JSON.stringify(cartItem.toppings.sort()) === JSON.stringify(item.toppings.sort())
    );
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }
    
    saveCart();
    updateCartCount();
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    
    // Reload cart page if currently on cart page
    if (window.location.pathname.includes('cart.html')) {
        loadCartPage();
    }
}

// Update Cart Item Quantity
function updateCartQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity = Math.max(1, cart[index].quantity + change);
        saveCart();
        updateCartCount();
        
        // Reload cart page if currently on cart page
        if (window.location.pathname.includes('cart.html')) {
            loadCartPage();
        }
    }
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart Count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('#cartCount').forEach(element => {
        element.textContent = cartCount;
    });
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    currentProduct = null;
}

// Search Functionality
function setupSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchSuggestions.style.display = 'none';
            return;
        }
        
        const matches = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        
        if (matches.length > 0) {
            searchSuggestions.innerHTML = matches.slice(0, 5).map(product => `
                <div class="suggestion-item" onclick="selectSearchResult(${product.id})">
                    ${product.emoji} ${product.name}
                </div>
            `).join('');
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
            searchSuggestions.style.display = 'none';
        }
    });
}

// Select Search Result
function selectSearchResult(productId) {
    const searchSuggestions = document.getElementById('searchSuggestions');
    if (searchSuggestions) {
        searchSuggestions.style.display = 'none';
    }
    
    // If on products page, scroll to product
    if (window.location.pathname.includes('products.html')) {
        const productCard = document.querySelector(`.product-card[onclick*="${productId}"]`);
        if (productCard) {
            productCard.scrollIntoView({ behavior: 'smooth' });
            productCard.style.animation = 'pulse 1s ease-in-out';
        }
    } else {
        // Navigate to products page
        const isInPages = window.location.pathname.includes('/pages/');
        const productsPath = isInPages ? 'products.html' : 'pages/products.html';
        window.location.href = `${productsPath}?highlight=${productId}`;
    }
}

// Setup Category Navigation
function setupCategoryNavigation() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            const isInPages = window.location.pathname.includes('/pages/');
            const productsPath = isInPages ? 'products.html' : 'pages/products.html';
            window.location.href = `${productsPath}?category=${category}`;
        });
    });
}

// Setup Product Search
function setupProductSearch() {
    const searchInput = document.getElementById('productSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        filterProducts(query);
    });
    
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const highlight = urlParams.get('highlight');
    
    if (category) {
        // Set active filter tab
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const categoryTab = document.querySelector(`[data-category="${category}"]`);
        if (categoryTab) {
            categoryTab.classList.add('active');
            filterByCategory(category);
        }
    }
    
    if (highlight) {
        setTimeout(() => {
            const productCard = document.querySelector(`.product-card[onclick*="${highlight}"]`);
            if (productCard) {
                productCard.scrollIntoView({ behavior: 'smooth' });
                productCard.style.animation = 'pulse 1s ease-in-out';
            }
        }, 500);
    }
}

// Filter Products
function filterProducts(query) {
    if (!query) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    }
    
    displayFilteredProducts();
}

// Setup Product Filters
function setupProductFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
}

// Filter by Category
function filterByCategory(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    displayFilteredProducts();
}

// Display Filtered Products
function displayFilteredProducts() {
    const productsContainer = document.getElementById('productsGrid');
    if (!productsContainer) return;
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No flavors found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
    } else {
        productsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Load Cart Page
function loadCartPage() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummaryContainer = document.getElementById('cartSummary');
    const emptyCartContainer = document.getElementById('emptyCart');
    
    if (!cartItemsContainer || !cartSummaryContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartSummaryContainer.style.display = 'none';
        emptyCartContainer.style.display = 'block';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    cartSummaryContainer.style.display = 'block';
    emptyCartContainer.style.display = 'none';
    
    // Load cart items
    cartItemsContainer.innerHTML = `
        <h2 class="cart-title">Your Items</h2>
        ${cart.map((item, index) => createCartItemHTML(item, index)).join('')}
    `;
    
    // Load cart summary
    cartSummaryContainer.innerHTML = createCartSummaryHTML();
}

// Create Cart Item HTML
function createCartItemHTML(item, index) {
    const itemPrice = calculateItemPrice(item);
    const totalPrice = itemPrice * item.quantity;
    
    return `
        <div class="cart-item">
            <div class="cart-item-image" style="background: ${item.gradient};">
                ${item.emoji}
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-options">
                    Size: ${item.size}
                    ${item.toppings.length > 0 ? `<br>Toppings: ${item.toppings.join(', ')}` : ''}
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="cart-item-price">$${totalPrice.toFixed(2)}</div>
                <button class="remove-btn" onclick="removeFromCart(${index})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

// Calculate Item Price
function calculateItemPrice(item) {
    let basePrice = item.price;
    let sizeMultiplier = 1;
    
    // Size price adjustments
    switch(item.size) {
        case 'Small':
            sizeMultiplier = 0.8;
            break;
        case 'Large':
            sizeMultiplier = 1.3;
            break;
    }
    
    // Toppings price (0.50 each)
    const toppingsPrice = item.toppings.length * 0.5;
    
    return basePrice * sizeMultiplier + toppingsPrice;
}

// Create Cart Summary HTML
function createCartSummaryHTML() {
    const subtotal = cart.reduce((total, item) => total + (calculateItemPrice(item) * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    return `
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-line">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-line">
            <span>Tax (8%):</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()" ${cart.length === 0 ? 'disabled' : ''}>
            <i class="fas fa-credit-card"></i> Checkout
        </button>
    `;
}

// Checkout Function
function checkout() {
    if (cart.length === 0) return;
    
    // Simulate checkout process
    showNotification('Thank you for your order! 🍦', 'success');
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    
    // Redirect to home page after delay
    setTimeout(() => {
        const isInPages = window.location.pathname.includes('/pages/');
        const homePath = isInPages ? '../index.html' : 'index.html';
        window.location.href = homePath;
    }, 2000);
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .no-results {
        text-align: center;
        padding: 3rem;
        color: var(--text-secondary);
        grid-column: 1 / -1;
    }
    
    .no-results-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .cart-title {
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-bottom: 2rem;
        text-align: center;
    }
`;
document.head.appendChild(style);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    showNotification('Connection restored! 🌐', 'success');
});

window.addEventListener('offline', () => {
    showNotification('You are offline. Some features may be limited. 📱', 'info');
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Initialize lazy loading for images if needed
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
