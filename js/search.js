import { products } from "./data/products.js";
import { productsCard } from "./components/productsCard.js";

const search = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchSection = document.getElementById("searchSection");
const suggestionBox = document.getElementById("suggestionBox");
const homebox = document.getElementById("productsSection");
const clearText = (text) => text.toLowerCase().trim();



const reanderCard = () => {
    const searchText = clearText(search.value);

    if(!searchText){
        searchSection.innerHTML = "";
        suggestionBox.style.display = "none";
        searchSection.style.display = "none";
        if(homebox) homebox.style.display = "block"; 
        homebox.style.display = "grid";
        return;
    }

    if(homebox) homebox.style.display = "none";
    searchSection.style.display = "block";

    const saerchData = products.map(product => {
        const name = clearText(product.name);

        let score = 0;
        
        //all data === 
        if(name === searchText){
            score += 100;
        }
        
        //start data === 
        if(name.startsWith(searchText)){
            score += 50;
        }
        
        //madile data ===
        if(name.includes(searchText)){
            score += 30;
        }

        let index = 0;
        for(const char of name){
            if(char === searchText[index]){
                index++;
            }

            if(index === searchText.length){
                score += 10;
                break;
            }
        }
        return {
            ...product, 
            score
        };
    })

    .filter(product => product.score > 0)
    .sort((a, b) => b.score - a.score);

    searchSection.innerHTML = saerchData.map(product => {
        return productsCard(product);
    }).join("");


    //data 
    if (saerchData.length > 0) {
        suggestionBox.innerHTML = saerchData.slice(0, 5).map(product => {
            return `<li class="suggestion-item">${product.name}</li>`;
        }).join("");
        suggestionBox.style.display = "block";
    } else {
        suggestionBox.style.display = "none";
    }
};

search.addEventListener("input", reanderCard);


suggestionBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion-item")) {
        search.value = e.target.textContent; // ইনপুট বক্সে লেখাটি বসবে
        reanderCard(); // নতুন লেখা অনুযায়ী কার্ড আপডেট হবে
        suggestionBox.style.display = "none"; // সাজেশন বক্স বন্ধ হয়ে যাবে
    }
});


document.addEventListener("click", (e) => {
    if (e.target !== search && !suggestionBox.contains(e.target)) {
        suggestionBox.style.display = "none";
    }
});

// ৫. Search বাটনে ক্লিক করলে কার্ড দেখাবে
if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        reanderCard();
    });
}
