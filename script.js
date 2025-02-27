const producto = document.querySelectorAll('.tarjeta');
const popup = document.getElementById('popup');
const aviso = document.getElementById('.aviso');

producto.forEach(producto => {
    producto.addEventListener('click', ()=> {
        aviso.textContent = `Producto agregado al carrito: ${producto.querySelector('h2').textContent}`;
        
    })
})