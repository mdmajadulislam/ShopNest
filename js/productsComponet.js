import { products } from "./data/products.js";
import { productsCard } from "./components/productsCard.js";

const productsSection = document.getElementById("productsSection");

products.reverse().forEach(product => {
    productsSection.innerHTML += productsCard(product);
});


