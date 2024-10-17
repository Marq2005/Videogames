// Datos de ejemplo para los productos
const productos = [
    // Acción
    { id: 1, nombre: "Call of Duty: Modern Warfare", precio: 59.99, categoria: "Acción" },
    { id: 2, nombre: "Doom Eternal", precio: 49.99, categoria: "Acción" },
    { id: 3, nombre: "Grand Theft Auto V", precio: 29.99, categoria: "Acción" },
    { id: 4, nombre: "Resident Evil Village", precio: 59.99, categoria: "Acción" },
    { id: 5, nombre: "Cyberpunk 2077", precio: 49.99, categoria: "Acción" },
    { id: 6, nombre: "Assassin's Creed Valhalla", precio: 59.99, categoria: "Acción" },
    { id: 7, nombre: "Far Cry 6", precio: 59.99, categoria: "Acción" },
    { id: 8, nombre: "Halo Infinite", precio: 59.99, categoria: "Acción" },
    { id: 9, nombre: "Gears 5", precio: 39.99, categoria: "Acción" },
    { id: 10, nombre: "Destiny 2", precio: 0, categoria: "Acción" },

    // Aventura
    { id: 11, nombre: "The Legend of Zelda: Breath of the Wild", precio: 59.99, categoria: "Aventura" },
    { id: 12, nombre: "Red Dead Redemption 2", precio: 59.99, categoria: "Aventura" },
    { id: 13, nombre: "Uncharted 4: A Thief's End", precio: 19.99, categoria: "Aventura" },
    { id: 14, nombre: "God of War", precio: 39.99, categoria: "Aventura" },
    { id: 15, nombre: "Horizon Zero Dawn", precio: 29.99, categoria: "Aventura" },
    { id: 16, nombre: "Death Stranding", precio: 49.99, categoria: "Aventura" },
    { id: 17, nombre: "Spider-Man: Miles Morales", precio: 49.99, categoria: "Aventura" },
    { id: 18, nombre: "Nier: Automata", precio: 39.99, categoria: "Aventura" },
    { id: 19, nombre: "Sea of Thieves", precio: 39.99, categoria: "Aventura" },
    { id: 20, nombre: "It Takes Two", precio: 39.99, categoria: "Aventura" },

    // Deportes
    { id: 21, nombre: "FIFA 23", precio: 59.99, categoria: "Deportes" },
    { id: 22, nombre: "NBA 2K23", precio: 59.99, categoria: "Deportes" },
    { id: 23, nombre: "Madden NFL 23", precio: 59.99, categoria: "Deportes" },
    { id: 24, nombre: "F1 2022", precio: 59.99, categoria: "Deportes" },
    { id: 25, nombre: "MLB The Show 22", precio: 59.99, categoria: "Deportes" },
    { id: 26, nombre: "PGA Tour 2K23", precio: 59.99, categoria: "Deportes" },
    { id: 27, nombre: "Tony Hawk's Pro Skater 1+2", precio: 39.99, categoria: "Deportes" },
    { id: 28, nombre: "Riders Republic", precio: 59.99, categoria: "Deportes" },
    { id: 29, nombre: "Rocket League", precio: 0, categoria: "Deportes" },
    { id: 30, nombre: "WWE 2K22", precio: 59.99, categoria: "Deportes" },

    // Estrategia
    { id: 31, nombre: "Civilization VI", precio: 59.99, categoria: "Estrategia" },
    { id: 32, nombre: "XCOM 2", precio: 49.99, categoria: "Estrategia" },
    { id: 33, nombre: "Age of Empires IV", precio: 59.99, categoria: "Estrategia" },
    { id: 34, nombre: "Stellaris", precio: 39.99, categoria: "Estrategia" },
    { id: 35, nombre: "Total War: Warhammer III", precio: 59.99, categoria: "Estrategia" },
    { id: 36, nombre: "Crusader Kings III", precio: 49.99, categoria: "Estrategia" },
    { id: 37, nombre: "Frostpunk", precio: 29.99, categoria: "Estrategia" },
    { id: 38, nombre: "Factorio", precio: 30, categoria: "Estrategia" },
    { id: 39, nombre: "Rimworld", precio: 34.99, categoria: "Estrategia" },
    { id: 40, nombre: "Northgard", precio: 29.99, categoria: "Estrategia" }
];

let carrito = [];

// Función para mostrar los productos
function mostrarProductos(categoria = null) {
    const contenedor = document.querySelector('.productos-container');
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        if (!categoria || producto.categoria === categoria) {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <p>Categoría: ${producto.categoria}</p>
                <button onclick="agregarAlCarrito(${producto.id})" class="neon-button">Agregar al carrito</button>
            `;
            contenedor.appendChild(productoElement);
            
            // Añadir animación de entrada
            setTimeout(() => {
                productoElement.style.opacity = '1';
                productoElement.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
    
    // Añadir animación al botón del carrito
    const carritoBtn = document.getElementById('carrito-btn');
    carritoBtn.classList.add('pulse');
    setTimeout(() => {
        carritoBtn.classList.remove('pulse');
    }, 300);
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const cantidad = carrito.length;
    document.getElementById('carrito-cantidad').textContent = cantidad;
    
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        itemElement.classList.add('carrito-item');
        carritoItems.appendChild(itemElement);
    });

    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.getElementById('carrito-total').textContent = total.toFixed(2);
}

// Evento para mostrar/ocultar el modal del carrito
document.getElementById('carrito-btn').addEventListener('click', () => {
    const modal = document.getElementById('carrito-modal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.querySelector('.modal-content').style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
});

document.querySelector('.cerrar').addEventListener('click', () => {
    const modal = document.getElementById('carrito-modal');
    modal.querySelector('.modal-content').style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

// Evento para "comprar" (limpiar el carrito)
document.getElementById('comprar-btn').addEventListener('click', () => {
    alert('¡Gracias por tu compra!');
    carrito = [];
    actualizarCarrito();
    document.getElementById('carrito-modal').style.display = 'none';
});

// Función para filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    mostrarProductos(categoria);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    // Agregar eventos a los botones de categoría
    document.querySelectorAll('.categoria').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = e.target.textContent;
            if (categoria === 'Todos') {
                mostrarProductos();
            } else {
                filtrarPorCategoria(categoria);
            }
            
            // Añadir efecto de clic
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 200);
        });
    });
});

// Añadir efecto de hover a los productos
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('producto')) {
        e.target.style.transform = 'scale(1.05)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('producto')) {
        e.target.style.transform = 'scale(1)';
    }
});
