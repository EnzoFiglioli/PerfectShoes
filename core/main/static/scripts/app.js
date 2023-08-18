document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlide(slideIndex);

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    function showSlide(n) {
        const slides = document.getElementsByClassName("carousel-slide");
        const containerCarrusell = document.get
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
        slides[slideIndex].style.opacity = "0";


        setTimeout(() => {
            slides[slideIndex].style.opacity = "1";
            slides[slideIndex].style.transition = "opacity 0.3s";
        }, 100);
    }
    setInterval(function() {
        changeSlide(1); // Cambia a la siguiente diapositiva
    }, 3000);

    const cardButtons = document.getElementsByClassName('card-btn');
    for (let i = 0; i < cardButtons.length; i++) {
        cardButtons[i].addEventListener('click', function() {
            // Aquí puedes colocar el código que deseas ejecutar cuando se hace clic en un botón
            console.log("Botón de tarjeta clickeado.");
        });
    }
});

