// Including DOMContentLoaded event listener so it works along "defer" attibute in HTML file.
document.addEventListener('DOMContentLoaded', () => {
    const producto = document.querySelectorAll('.tarjeta');
    const popup = document.getElementById('popup');
    const aviso = document.getElementById('aviso');

    producto.forEach(producto => {
        producto.addEventListener('click', () => {
            aviso.textContent = `Producto agregado al carrito: ${producto.querySelector('h2').textContent}`;
            popup.style.display = 'block'; // Making popup to be displayed.
            // Making the following instruction to execute after 3 seconds.
            setInterval(() => {
                popup.style.display = 'none';
            }, 3000)
        })
    })
})