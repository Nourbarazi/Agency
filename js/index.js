let linksOpen = document.querySelector(".icon"),
    linksClose = document.querySelector(".close"),
    linksCloseHeader = document.querySelector("header"),
    linksCloseLanding = document.querySelector(".landing"),
    nav = document.querySelector(".nav");


linksOpen.addEventListener("click", openNav);
linksClose.addEventListener("click", closeNav);
linksCloseLanding.addEventListener("click", closeNav);

function openNav() {
    nav.classList.add("show-nav");
    linksOpen.style.display = "none";
    linksClose.style.display = "block";
}

function closeNav() {
    nav.classList.remove("show-nav");
    linksOpen.style.display = "flex";
    linksClose.style.display = "none";
}
