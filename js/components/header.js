const searchIconBtn = document.getElementById('searchIconBtn');
const removeIconBtn = document.getElementById('removeIconBtn');
const inputBox = document.querySelector('.input-box');
const logoBox = document.querySelector('.logo-box');
const menuBox = document.querySelector('.menu-box');
const searchBox = document.querySelector('.search-box');
const menuItmes = document.getElementById("menuItmes");
const menuBtn = document.getElementById("menuBtn");
const menuContiner = document.getElementById("menuContiner");

//opening search box 
searchIconBtn.addEventListener('click', () => {
    removeIconBtn.classList.add('active');
    searchIconBtn.classList.add('active');
    inputBox.classList.add('active');
    logoBox.classList.add('active');
    menuBox.classList.add('active');
    searchBox.classList.add('active');
    menuContiner.style.display = "none";
    menuBtn.style.color = "#000";
});

//remove search box 
removeIconBtn.addEventListener('click', () => {
    removeIconBtn.classList.remove('active');
    searchIconBtn.classList.remove('active');
    inputBox.classList.remove('active');
    logoBox.classList.remove('active');
    menuBox.classList.remove('active');
    searchBox.classList.remove("active");
});

//menu box 

menuBtn.addEventListener("click", () => {
    if(menuContiner.style.display === "" || menuContiner.style.display === "none"){
        menuBtn.style.color = "rgb(4, 92, 255)";
        menuContiner.style.display = "flex";
    }else{
        menuBtn.style.color = "#000";
        menuContiner.style.display = "none";
    }
});
