import { products } from "./data/products.js";
import { productsCard } from "./components/productsCard.js";

const productsSection = document.getElementById("productsSection");

products.forEach(product => {
    productsSection.innerHTML += productsCard(product);
});
alert("Hi Ps developer group");

