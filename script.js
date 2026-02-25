// Catálogo de 10 productos
const productos = [
    {
        id: 1,
        nombre: "Laptop Pro Developer 15\"",
        descripcion: "Procesador i7, 16GB RAM, 512GB SSD. Rendimiento ideal para programar y diseñar.",
        precio: "$3,200,000 COP",
        imagen: "https://picsum.photos/seed/laptop/300/200"
    },
    {
        id: 2,
        nombre: "Smartphone X",
        descripcion: "Pantalla OLED de 6.5 pulgadas, cámara de 108MP y batería para todo el día.",
        precio: "$1,800,000 COP",
        imagen: "https://picsum.photos/seed/phone/300/200"
    },
    {
        id: 3,
        nombre: "Monitor 4K Ultra HD",
        descripcion: "Monitor de 27 pulgadas con colores precisos, perfecto para diseño web y multimedia.",
        precio: "$1,100,000 COP",
        imagen: "https://picsum.photos/seed/monitor/300/200"
    },
    {
        id: 4,
        nombre: "Teclado Mecánico RGB",
        descripcion: "Switches azules táctiles, retroiluminación personalizable y diseño ergonómico.",
        precio: "$250,000 COP",
        imagen: "https://picsum.photos/seed/keyboard/300/200"
    },
    {
        id: 5,
        nombre: "Ratón Inalámbrico Pro",
        descripcion: "Alta precisión, batería de larga duración y diseño cómodo para la mano derecha.",
        precio: "$180,000 COP",
        imagen: "https://picsum.photos/seed/mouse/300/200"
    },
    {
        id: 6,
        nombre: "Auriculares Bluetooth con Cancelación de Ruido",
        descripcion: "Aíslate del entorno y concéntrate en tu trabajo con sonido de alta fidelidad.",
        precio: "$450,000 COP",
        imagen: "https://picsum.photos/seed/headphones/300/200"
    },
    {
        id: 7,
        nombre: "Disco Duro Externo 2TB",
        descripcion: "Almacenamiento rápido y seguro mediante conexión USB 3.0 para tus copias de seguridad.",
        precio: "$320,000 COP",
        imagen: "https://picsum.photos/seed/drive/300/200"
    },
    {
        id: 8,
        nombre: "Smartwatch Deportivo",
        descripcion: "Monitorea tu ritmo cardíaco, notificaciones en tu muñeca y resistencia al agua.",
        precio: "$300,000 COP",
        imagen: "https://picsum.photos/seed/watch/300/200"
    },
    {
        id: 9,
        nombre: "Cámara Web 1080p",
        descripcion: "Calidad profesional para tus videollamadas, incluye micrófono con reducción de ruido.",
        precio: "$150,000 COP",
        imagen: "https://picsum.photos/seed/webcam/300/200"
    },
    {
        id: 10,
        nombre: "Soporte Ajustable para Portátil",
        descripcion: "Mejora tu postura elevando tu pantalla. Fabricado en aluminio resistente.",
        precio: "$85,000 COP",
        imagen: "https://picsum.photos/seed/stand/300/200"
    }
];

// Función para renderizar los productos en el HTML
function mostrarProductos() {
    const contenedor = document.getElementById('grid-productos');
    let htmlContent = '';

    productos.forEach(producto => {
        htmlContent += `
            <article class="tarjeta-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="precio">${producto.precio}</span>
                    <button class="btn-comprar" onclick="contactarVendedor('${producto.nombre}')">Me interesa</button>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = htmlContent;
}

// Función simple para el botón (redirige a WhatsApp)
function contactarVendedor(nombreProducto) {
    const mensaje = encodeURIComponent(`Hola Tecnoriente JB, estoy interesado en el producto: ${nombreProducto}`);
    // Reemplaza el número con el formato internacional correcto para WhatsApp
    const urlWhatsapp = `https://wa.me/573116861370?text=${mensaje}`;
    window.open(urlWhatsapp, '_blank');
}

// Cargar los productos cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', mostrarProductos);