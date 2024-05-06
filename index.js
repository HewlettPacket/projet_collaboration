// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Attacher un gestionnaire d'événement au bouton "Commencer"
    var startButton = document.querySelector(".cta-button");
    startButton.addEventListener("click", function() {
        alert("Vous avez cliqué sur le bouton 'Commencer' !");
    });
});
