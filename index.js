// Menú responsive
const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Alerta al comprar
const botones = document.querySelectorAll('.comprar');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("¡Producto agregado al carrito! Gracias por tu compra.");
  });
});
