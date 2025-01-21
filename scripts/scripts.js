// Gestion du click bouton et du menu qui apparait

const imgHamburger = document.getElementById("btn-hamburger-hamburger");
const menu= document.querySelector(".affichage-hamburger") 
const imgClose = document.getElementById("btn-hamburger-close");

imgHamburger.addEventListener("click", () => {
    menu.style.right=0;
});
imgClose.addEventListener("click", () =>{
    menu.style.right='-100%';
    
})
window.addEventListener("resize", () => {
    if(window.innerWidth>='768px'){
        menu.style.right='-100%';
    }
})
