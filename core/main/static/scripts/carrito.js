$(document).ready(function() {
    const cart_modal = $('#cart-modal');
    const modal = $('#myModal');
    const closeBtn = $('.close');
    const agregarAlCarrito = $('#btn-carrito-modal');
    const contadorCarrito = $('.numb-cart');
    const carritoLista = $('#carrito-lista'); // Agregado para mantener la referencia de la lista

    let cartCount = 0; // Inicializa el contador del carrito
    const carrito = []; // Array para almacenar los elementos en el carrito

    // Función para mostrar los elementos en el carrito dentro del modal
    function mostrarCarrito() {
        carritoLista.empty(); // Limpia la lista del carrito antes de volver a mostrar los elementos

        for (const item of carrito) {
            const itemLi = $('<li>').text(item);
            carritoLista.append(itemLi);
        }
    }

    cart_modal.on('click', function() {
        modal.css('display', 'block');
        mostrarCarrito(); // Muestra los elementos en el carrito dentro del modal
    });

    closeBtn.on('click', function() {
        modal.css('display', 'none');
    });
 
    $(window).on('click', function(event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });

    agregarAlCarrito.on('click', () => {
        cartCount++; // Incrementa el contador del carrito
        contadorCarrito.text(cartCount); // Actualiza el contador en el ícono del carrito
        carrito.push("Producto nuevo"); // Agrega un producto al array del carrito
    });
});
