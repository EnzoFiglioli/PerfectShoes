    document.addEventListener('DOMContentLoaded', function () {
        // CARRUSELL
        let slideIndex = 0;
        showSlide(slideIndex);

        function changeSlide(n) {
            showSlide(slideIndex += n);
        }

        function showSlide(n) {
            const slides = document.getElementsByClassName("carousel-slide");

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
            }, 1000);
        }

        setInterval(function () {
            changeSlide(1);
        }, 3000);

        // BOTON DE FAVORITOS
        const btn_heart = document.getElementsByClassName('add-to-fav');
        const numb_heart = document.getElementsByClassName('heart-count')[0];
        let contador_likes = 0;

        for (let i = 0; i < btn_heart.length; i++) {
            btn_heart[i].addEventListener('click', toggleLike);
        }

        function toggleLike() {
            const isLiked = this.classList.contains('liked');

            if (!isLiked) {
                contador_likes++;
                numb_heart.style.display = 'flex';
            } else {
                contador_likes--;
                if (contador_likes === 0) {
                    numb_heart.style.display = 'none';
                }
            }

            numb_heart.innerHTML = contador_likes;
            this.classList.toggle('liked');
        }

        // BOTON DE NUMERO CARRITO

            // Declaración global para el carrito
        const addToCarrito = [];
        const addToCartButtons = document.getElementsByClassName('add-to-cart');
        const numb_cart = document.getElementsByClassName('cart-count')[0];
        let contador_cart = 0;

        for (let i = 0; i < addToCartButtons.length; i++) {
            addToCartButtons[i].addEventListener('click', addToCart);
        }

        function addToCart() {
            contador_cart++;
            numb_cart.style.display = 'flex';
            numb_cart.innerHTML = contador_cart;

            const nombreProducto = this.getAttribute('data-producto');
            addToCarrito.push(nombreProducto);
            updateModalContent();
        }

        function updateModalContent() {
            modalContent.innerHTML = addToCarrito.map(producto => `<p>${producto}</p>`).join('');
        }

        // BOTON DE CARRITO
        const modal_cart = document.getElementsByClassName('modal')[0];
        const show_cart = document.getElementById('openCartModal');
        const close_modal_cart = document.getElementsByClassName('close')[0];
        const bg_modal_cart = document.querySelector('#modal-bg-gradient');

        show_cart.addEventListener('click', () => {
            modal_cart.style.display = 'block';
            bg_modal_cart.style.display = 'block'
        });

        close_modal_cart.addEventListener('click', () => {
            modal_cart.style.display = 'none';
            bg_modal_cart.style.display = 'none'
        });

        const hamburger = document.getElementById('hamburger');
        const app = document.getElementById('app');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                bg_modal_cart.style.display = 'none';
            } else {
                navLinks.classList.add('active');
                bg_modal_cart.style.display = 'block';
            }
        });



    // Resultados de la busqueda con AJAX

    const searchInput = document.getElementById('search-input');
        const searchResultsContainer = document.getElementById('search-results-container');
        const searchResults = document.getElementById('search-results');

        searchInput.addEventListener('input', handleSearch);

        function handleSearch() {
            const searchTerm = searchInput.value.trim();

            if (searchTerm === '') {
                searchResultsContainer.style.display = 'none';
                searchResults.innerHTML = '';
                return;
            }

            fetch(`/resultado/?search=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    displayResults(data.resultados);
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        }

        function displayResults(results) {
            console.log('Results:',results)
            searchResults.innerHTML = '';
            if (results.length === 0) {
                searchResultsContainer.style.display = 'none';
                return;
            }

            searchResultsContainer.style.display = 'flex';

            for (const result of results) {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result');
                resultItem.innerHTML = `
                    <a href="/producto/${result.pk}/">
                        <div class="result-container">
                            <img class="result-img" src="${result.imagen}" alt="${result.nombre}">
                            <p class="result-txt">${result.nombre}</p>
                        </div>
                    </a>
                `;
                searchResults.appendChild(resultItem);
            }
        }

    });
