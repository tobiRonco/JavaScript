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



/* poner la fecha de hoy */

/*  const anio=new Date(23,5,25);
console.log(anio)
 console.log("estamos en el dia",anio.getDate())
console.log("del año:",anio.getFullYear())
console.log("y de el mes numero",anio.getMonth()+1)  */


// Datos JSON de productos
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
function mostrarProductos() {
    const tipos = { Mate: mates, Termo: termos, Bombilla: bombillas };
    
    for (const tipo in tipos) {
        tipos[tipo].forEach(producto => {
            productosContainer.appendChild(crearElementoProducto(producto, tipo));
        });
    }
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
}

// Función para remover un producto del carrito
function removerDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Configuración inicial del DOM
const main = document.querySelector('main');
const h1 = document.createElement('h1');
h1.textContent = 'Bienvenido a la Web de mates';
main.appendChild(h1);

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
});

























