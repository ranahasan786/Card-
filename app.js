const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 100,
        description: "High-quality sound with noise cancellation.",
        image: "./headphone.jpeg"
    },
    {
        id: 2,
        name: "Smartwatch",
        price: 100,
        description: "Track your daily activities and fitness goals.",
        image: "./watch.jpeg"
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: 100,
        description: "Ergonomic design with precision tracking.",
        image: "./mouse.jpeg"
    }
];

function loadProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        container.appendChild(card);
    });
}

function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        loadProducts();
    }
}

// Initialize products on page load
loadProducts();