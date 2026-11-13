import { products } from "./data/products.js";
import { productsCard } from "./components/productsCard.js";

//import { studentCard } from '../demo/app.js';
//import { studentdata } from '../demo/data.js';
const productsSection = document.getElementById("productsSection");

products.forEach(product => {
    productsSection.innerHTML += productsCard(product);
});

