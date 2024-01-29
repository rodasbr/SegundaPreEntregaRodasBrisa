//productos marca Racefuels


const productos = [
    { id: 1, nombre: "metanol", precio: 15000 },
    { id: 2, nombre: "buzo", precio: 12000 },
    { id: 3, nombre: "bandera", precio: 8000 },
    { id: 4, nombre: "remera", precio: 10000 },

]


//ver solo producto y precio en terminal


productos.forEach(item => {
    console.log(item.nombre)
    console.log(item.precio)
})

//precios de productos en black friday


const preciosBlack = productos.map (item =>{
    return{
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.20, 
    };
})
console.log (preciosBlack);

//verificar si hay stock del producto en pagina

let nombre = prompt("ingrese el producto que desee comprar");
let encontrado = productos.find((item) => item.nombre === nombre)


if (encontrado) {
    alert(`
    su valor es ${encontrado.precio} `)
}
else {
    alert("producto no disponible")
}




//calcular el precio y el envio en pagina


const suma = (x, y) => x + y;
const envio = (x) => x * 0.15;


let precioProducto = Number(prompt("Ingrese el precio del producto (solo numero sin simbolos) "));
let donde = Number(prompt("Indique a cuantos kilometros se encuentra (solo numero entero)"));


let finalPrecio = suma(precioProducto, envio(precioProducto));


//alert ud va a realizar una compra menor/mayor a

if (finalPrecio <= 20000) {
    alert("usted va a realizar una compra menor a $20.000");
} else if (finalPrecio >= 30000) {
    alert("usted va a realizar una compra menor a $30.000");
} else {
    alert("usted va a realizar una compra mayor a $30.000");
}

//calcular dia de llegada del envio

const arribo = new Date ("february 6, 2024");
const hoy = new Date ("january 26,2024");

console.log(arribo-hoy);

const calcularMilisegundos = 86400000;
console.log((arribo-hoy) / calcularMilisegundos);
//dias