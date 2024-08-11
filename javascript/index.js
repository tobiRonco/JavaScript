/* descuento por compra */
let totalcondescuentoi;
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

/*   class mate{
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
 */

/* poner la fecha de hoy */

/*  const anio=new Date(23,5,25);
console.log(anio)
 console.log("estamos en el dia",anio.getDate())
console.log("del año:",anio.getFullYear())
console.log("y de el mes numero",anio.getMonth()+1)  */


















