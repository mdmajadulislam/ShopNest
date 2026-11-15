export function productsCard({ name, image, amount, discount, detailsLink, orderLink, category, code }){
    return`
        <artical class="cards">
            <div class="card-img-box">
                <img src="${image}">
            </div>

            <div class="card-amount-box">
                <p>৳${amount - (amount * discount / 100)}</p>
                <p><del>৳${amount}</del></p>
                <p>-${discount}%</p>
            </div>

            <div class="card-heading-box">
                <h1>${name}</h1>
            </div>

            <div class="card-button-box">
                <button type="button"><a href=${detailsLink}>details</a></button>
                <button type="button"><a href=${orderLink}>Order Now</a></button> 
            </div>

            <p class="card-span-box"><span>${category}</span> | <code>${code}</code></p>
        </artical>
    `;
};


