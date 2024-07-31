/* calcular edad promedio  */
 
/* let edad
let sumaEdades=0
for(let i=1;i<=5;i++)
{
    let edad=parseInt(prompt("ingresar las edades para luego sacar el promedio de las mismas"));
    console.log("la edad es:"+edad);
    sumaEdades+=edad

}
let promedio= sumaEdades/5;
console.log("el promedio de las edades es:",promedio);
if(promedio>=18)
{
    console.log("el promedio de las edades es mayor  a 18 años")

}
else
{
    console.error("el promedio de edades es menor a 18 años")
}



 */

/* calcular las cuotas */
/* function cuotas (){
let compra=parseInt(prompt("ingrese el precio de su compra"))
let numero=parseInt(prompt("ingrese que opcion de cuotas quiere"))

let precioFinal;
let precioiva;
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

class mate{
    constructor(precio,tipo,color){
        this.precio=precio
        this.tipo=tipo
        this.color=color

    }
}
const mates=[]
mates.push(new mate(1000,"imperial,negro"))
mates.push(new mate(1000,"imperial,marron"))
mates.push(new mate(1000,"camionero,negro"))
mates.push(new mate(1000,"torpedo,negro"))
console.log(mates);


class termo{
    constructor(precio,tipo,color){
        this.precio=precio
        this.tipo=tipo
        this.color=color

    }
}
const termos=[]
termos.push(new termo(1000,"imperial,negro"))
termos.push(new termo(1000,"imperial,marron"))
termos.push(new termo(1000,"camionero,negro"))
termos.push(new termo(1000,"torpedo,negro"))
console.log(termos)

class bombilla{
    constructor(precio,tipo,color){
        this.precio=precio
        this.tipo=tipo

    }
}
const bombillas=[]
bombillas.push(new bombilla(1200,"pico loro"))
bombillas.push(new bombilla(1400,"bombillon"))
bombillas.push(new bombilla(1500,"bombilla de alpaca"))
bombillas.push(new bombilla(1600,"bombilla de acero inoxidable"))
console.log(bombillas)












