/* descuento por compra */
/* let totalcondescuentoi;
let porcentajeDeDescuento=0.05;
let descuento
let a=parseInt(prompt("ingrese el monto de su compra"))
if(a>=10000)
{
    descuento=a*porcentajeDeDescuento;
    totalcondescuentoi=a-descuento;
    console.log("usted tiene un descuento de el 5%");
    console.log("su descuento es de ",Math.round(descuento))
    console.log("usted debe pagar  :",Math.round(totalcondescuentoi))


   
}
else{
    console.log("usted no tenddra descuento")
}
  */
 

/* calcular las cuotas */
 /* function cuotas (){
let compra=parseInt(prompt("ingrese el precio de su compra"))
let numero=parseInt(prompt("ingrese que opcion de cuotas quiere"))

let precioFinal=Math.round(precioFinal);
let precioiva=Math.round(precioiva);
let iva=1.21;
switch(numero){
    
    case 1:
    console.log("se le agregara el 15% a la compra");
    precioFinal=compra*1.15;
    console.log("el precio final sera"+precioFinal);
    precioiva=precioFinal*iva;
    console.log("el precio con iva es de :"+precioiva)

    break;
    case 3:
    console.log("se le agregara el 30% a la compra");
    precioFinal=compra*1.30;
    console.log("el precio final sera"+precioFinal);
    precioiva=precioFinal*iva;
    console.log("el precio con iva es de :"+precioiva)
    break;

    case 6:
    console.log("se le agregara el 50% a la compra");
    precioFinal=compra*1.50;
    console.log("el precio final sera"+precioFinal);
    precioiva=precioFinal*iva;
    console.log("el precio con iva es de :"+precioiva)
    break;

    case 12:
    console.log("se le agregara el 100% a la compra");
    precioFinal=compra*2;
    console.log("el precio final sera"+precioFinal);
    precioiva=precioFinal*iva;
    console.log("el precio con iva es de :"+precioiva)
    break;

    default:
        console.log("opcion invalida")
}
}
cuotas();
 */

/* hacer una pag de mates  */
/* hacer los mates dentro de class , las bombillas dentro de otra class, y los termos dentro de otra class */
/* precio con y sin iva */
/* let iva=1.21;
let precio=parseFloat(prompt("ingrese el prcio con iva de el producto"))
let precionoiva=precio*iva;
console.log("el precio con iva es",precio);
console.log("el precio sin iva es", precionoiva); */



// Datos JSON de productos
// JSON de productos
const productosJSON = {
    "mates": [
        {"precio": 1000, "tipo": "imperial", "color": "negro"},
        {"precio": 1000, "tipo": "imperial", "color": "marron"},
        {"precio": 1000, "tipo": "camionero", "color": "negro"},
        {"precio": 1000, "tipo": "torpedo", "color": "negro"}
    ],
    "termos": [
        {"precio": 1000, "tipo": "imperial", "color": "negro"},
        {"precio": 1000, "tipo": "imperial", "color": "marron"},
        {"precio": 1000, "tipo": "camionero", "color": "negro"},
        {"precio": 1000, "tipo": "torpedo", "color": "negro"}
    ],
    "bombillas": [
        {"precio": 1200, "tipo": "pico loro"},
        {"precio": 1400, "tipo": "bombillon"},
        {"precio": 1500, "tipo": "bombilla de alpaca"},
        {"precio": 1600, "tipo": "bombilla de acero inoxidable"}
    ]
};

// Clases de productos
class Mate {
    constructor(precio, tipo, color) {
        this.precio = precio;
        this.tipo = tipo;
        this.color = color;
    }
}

class Termo {
    constructor(precio, tipo, color) {
        this.precio = precio;
        this.tipo = tipo;
        this.color = color;
    }
}

class Bombilla {
    constructor(precio, tipo) {
        this.precio = precio;
        this.tipo = tipo;
    }
}

// Arrays de productos
let mates = [];
let termos = [];
let bombillas = [];

// Cargar datos desde JSON
function cargarDatos() {
    const matesData = productosJSON.mates;
    const termosData = productosJSON.termos;
    const bombillasData = productosJSON.bombillas;

    mates = matesData.map(d => new Mate(d.precio, d.tipo, d.color));
    termos = termosData.map(d => new Termo(d.precio, d.tipo, d.color));
    bombillas = bombillasData.map(d => new Bombilla(d.precio, d.tipo));
    
    mostrarProductos();
}

// Crear elemento de producto
function crearElementoProducto(producto, tipo) {
    const div = document.createElement('div');
    div.className = 'producto';
    
    let descripcion = '';
    if (producto instanceof Mate) {
        descripcion = `Mate ${producto.tipo}, Color: ${producto.color}`;
    } else if (producto instanceof Termo) {
        descripcion = `Termo ${producto.tipo}, Color: ${producto.color}`;
    } else if (producto instanceof Bombilla) {
        descripcion = `Bombilla ${producto.tipo}`;
    }
    
    const button = document.createElement('button');
    button.textContent = 'Agregar al carrito';
    button.addEventListener('click', () => agregarAlCarrito(tipo, producto.precio));
    
    div.innerHTML = `
        <p>${descripcion}</p>
        <p>Precio: $${producto.precio}</p>
    `;
    div.appendChild(button);
    
    return div;
}

// Mostrar productos en el DOM
function mostrarProductos(filtroTipo = '') {
    productosContainer.innerHTML = ''; // Limpiar productos previos

    const tipos = { Mate: mates, Termo: termos, Bombilla: bombillas };
    const productosAFiltrar = filtroTipo ? tipos[filtroTipo] || [] : [...mates, ...termos, ...bombillas];

    productosAFiltrar.forEach(producto => {
        let tipo;
        if (producto instanceof Mate) tipo = 'Mate';
        else if (producto instanceof Termo) tipo = 'Termo';
        else if (producto instanceof Bombilla) tipo = 'Bombilla';

        productosContainer.appendChild(crearElementoProducto(producto, tipo));
    });
}

// Función para agregar al carrito
let carrito = [];
let total = 0;

function agregarAlCarrito(tipo, precio) {
    carrito.push({ tipo, precio });
    total += precio;
    actualizarCarrito();
}

// Función para actualizar el carrito en el DOM
function actualizarCarrito() {
    carritoContainer.innerHTML = '';
    carrito.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'carrito-item';
        div.innerHTML = `
            <p>Producto: ${item.tipo}</p>
            <p>Precio: $${item.precio}</p>
            <button onclick="removerDelCarrito(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(div);
    });
    totalElement.querySelector('#total').textContent = total;
    
    // Guardar el carrito en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para remover un producto del carrito
function removerDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para cargar el carrito desde localStorage y actualizar el DOM
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        total = carrito.reduce((acc, item) => acc + item.precio, 0); // Recalcular el total
        actualizarCarrito(); // Actualizar la vista del carrito con los datos cargados
    }
}

// Función para calcular las cuotas
function calcularCuotas() {
    const monto = parseFloat(document.getElementById('monto').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);

    if (isNaN(monto) || cuotas <= 0) {
        alert("Por favor ingrese un monto válido y seleccione un número de cuotas.");
        return;
    }

    let precioFinal;
    let precioiva;
    const iva = 1.21;
    
    switch (cuotas) {
        case 1:
            precioFinal = monto * 1.15;
            break;
        case 3:
            precioFinal = monto * 1.30;
            break;
        case 6:
            precioFinal = monto * 1.50;
            break;
        case 12:
            precioFinal = monto * 2;
            break;
        default:
            alert("Opción de cuotas inválida");
            return;
    }

    precioiva = precioFinal * iva;
    precioFinal = Math.round(precioFinal);
    precioiva = Math.round(precioiva);

    resultadosCuotas.innerHTML = `
        <p>Precio final (con recargo): $${precioFinal}</p>
        <p>Precio final (con IVA): $${precioiva}</p>
    `;
}

// Configuración inicial del DOM
const main = document.querySelector('main');
const h1 = document.createElement('h1');
h1.textContent = 'Bienvenido a la Web de mates';
main.appendChild(h1);

// Crear menú de filtro
const filtroContainer = document.createElement('div');
filtroContainer.id = 'filtro';

const filtroSelect = document.createElement('select');
filtroSelect.id = 'filtro-tipo';
filtroSelect.innerHTML = `
    <option value="">Mostrar Todos</option>
    <option value="Mate">Mate</option>
    <option value="Termo">Termo</option>
    <option value="Bombilla">Bombilla</option>
`;
filtroContainer.appendChild(filtroSelect);

const aplicarFiltroButton = document.createElement('button');
aplicarFiltroButton.textContent = 'Aplicar Filtro';
aplicarFiltroButton.addEventListener('click', () => {
    const filtroTipo = filtroSelect.value;
    mostrarProductos(filtroTipo);
});
filtroContainer.appendChild(aplicarFiltroButton);

main.appendChild(filtroContainer);

// Crear sección para cuotas
const cuotasContainer = document.createElement('div');
cuotasContainer.id = 'cuotas';

const montoInput = document.createElement('input');
montoInput.type = 'number';
montoInput.id = 'monto';
montoInput.placeholder = 'Ingrese el monto de la compra';
cuotasContainer.appendChild(montoInput);

const cuotasSelect = document.createElement('select');
cuotasSelect.id = 'cuotas';
cuotasSelect.innerHTML = `
    <option value="">Seleccione cuotas</option>
    <option value="1">1 cuota</option>
    <option value="3">3 cuotas</option>
    <option value="6">6 cuotas</option>
    <option value="12">12 cuotas</option>
`;
cuotasContainer.appendChild(cuotasSelect);

const calcularCuotasButton = document.createElement('button');
calcularCuotasButton.textContent = 'Calcular Cuotas';
calcularCuotasButton.addEventListener('click', calcularCuotas);
cuotasContainer.appendChild(calcularCuotasButton);

const resultadosCuotas = document.createElement('div');
resultadosCuotas.id = 'resultados-cuotas';
cuotasContainer.appendChild(resultadosCuotas);

main.appendChild(cuotasContainer);

const productosContainer = document.createElement('div');
productosContainer.id = 'productos';
main.appendChild(productosContainer);

const carritoContainer = document.createElement('div');
carritoContainer.id = 'carrito';
main.appendChild(carritoContainer);

const totalElement = document.createElement('p');
totalElement.innerHTML = 'Total: <span id="total">0</span>';
main.appendChild(totalElement);

// Cargar datos y mostrar productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    cargarCarritoDesdeLocalStorage(); // Cargar carrito desde localStorage
    mostrarProductos(); // Mostrar todos los productos por defecto
});



























