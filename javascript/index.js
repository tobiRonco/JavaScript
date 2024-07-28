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
function cuotas (){
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


/* hacer una pag de mates  */
/* hacer los mates dentro de class , las bombillas dentro de otra class, y los termos dentro de otra class */














