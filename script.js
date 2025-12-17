// 1. INTRO
window.addEventListener('load', () => {
    const overlay = document.getElementById('intro-overlay');
    if(overlay) {
        setTimeout(() => {
            overlay.classList.add('intro-hidden');
        }, 1000);
    }
});

// 2. MENU MOBILE
const burgerBtn = document.getElementById('burger-btn');
const navHeader = document.getElementById('nav-header');
const menuLinks = document.querySelectorAll('#nav-header a'); // Cible tous les liens du menu

// Fonction Toggle
function toggleMenu() {
    navHeader.classList.toggle('active');
    
    // Petit effet bonus : changer l'icône burger en croix (optionnel mais cool)
    if(navHeader.classList.contains('active')) {
        burgerBtn.innerHTML = "✕"; // Croix
        burgerBtn.style.color = "var(--accent-color)";
    } else {
        burgerBtn.innerHTML = "☰"; // Burger
        burgerBtn.style.color = "white";
    }
}

// Écouteurs d'événements
if(burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
}

// Fermer le menu quand on clique sur un lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navHeader.classList.contains('active')) {
            toggleMenu(); // Ferme le menu
        }
    });
});
