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

//Gestion de l'animation de la barre de navigation au chargement de la page 

window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.transform='translateY(0)'
});

//Gestion de la fermeture de l'offcanvas 

const offcanvas = document.querySelector('.menu-hamburger');
const offcanvasContent = document.querySelector('.affichage-hamburger');

// Fonction pour fermer l'offcanvas
function closeOffcanvas(event) {
    // Vérifier si le clic a eu lieu en dehors de l'élément offcanvas
    if (!offcanvas.contains(event.target)) {
        // Fermer l'offcanvas (par exemple, en modifiant la position ou en masquant le menu)
        offcanvas.classList.remove('open'); // Assurez-vous d'utiliser la classe correcte pour cacher le menu
        // Vous pouvez également ajuster la visibilité avec une transition ou en modifiant la position.
    }
}

// Ajouter un écouteur d'événements sur le document
document.addEventListener('click', closeOffcanvas);