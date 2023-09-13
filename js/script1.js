document.addEventListener("DOMContentLoaded", function () {
    const introTitle = document.querySelector(".interactiveTitle");

    // Ajoutez une classe pour l'animation
    introTitle.classList.add("animate-intro");

    // Supprimez la classe après un certain délai (2 secondes dans cet exemple)
    setTimeout(function () {
        introTitle.classList.remove("animate-intro");
    }, 2000);
});


function animateText() {
    const textElement = document.querySelector('.txt-rotate');
    const dataRotate = JSON.parse(textElement.getAttribute('data-rotate'));
    const period = parseInt(textElement.getAttribute('data-period'), 10);
    let rotateIndex = 0;

    function rotateText() {
        textElement.textContent = dataRotate[rotateIndex];
        rotateIndex = (rotateIndex + 1) % dataRotate.length;
    }

    setInterval(rotateText, period);
}

// Appeler la fonction pour démarrer l'animation du texte
animateText();


