// Fake store data
const products = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": { "rate": 3.9, "count": 120 }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": { "rate": 4.1, "count": 259 }
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "Great outerwear jackets for Spring/Autumn/Winter...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": { "rate": 4.7, "count": 500 }
    },
    {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": { "rate": 2.1, "count": 430 }
    }
];

// Create title
let heading = document.createElement("h1");
heading.innerText = "Fake Store Products";
document.body.appendChild(heading);

// Create container
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

// Using for loop to create product cards
for (let i = 0; i < products.length; i++) {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${products[i].image}" alt="${products[i].title}">
    <h3>${products[i].title}</h3>
    <p class="price">$${products[i].price}</p>
    <p>${products[i].description.substring(0, 80)}...</p>
    <p class="category">Category: ${products[i].category}</p>
    <p>⭐ ${products[i].rating.rate} (${products[i].rating.count} reviews)</p>
    `;

    container.appendChild(card);
}