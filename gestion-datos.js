//-------------------------------------------//
//Creación de objeto de productos       
//-------------------------------------------//

const productos = [
    {id:1,nombre:"leche",precio : 6000,categoria:"lacteos"},
    {id:2,nombre:"Cocacola",precio : 1000,categoria:"bebidas"},
    {id:0,nombre:"Cerdo",precio : 3000,categoria:"Carnes Rojas"}
]
//------------------------------------------//
//Validación                            
//------------------------------------------//
productos.forEach(product => {
    console.log("Validaciones")
    if(product.id > 0 && product.nombre && product.precio > 0){
        console.log (`Producto Valido: ${product.nombre}`)
    }else{
        console.log (`Producto invalido ${product.nombre}`)
    }
    
});

//------------------------------------------//
//Recorrer objeto for in                   
//------------------------------------------//

console.log("LISTA PRODUCTOS");

productos.forEach(product=>{

for(let key in product){
    console.log(`${key}: ${product[key]}`);
}

});
//------------------------------------------//
//Creación de un Map
//------------------------------------------//

let myMap = new Map ();
console.log("Mapa")
for (const key in productos){
    const ver = productos[key]
    myMap.set(ver.nombre, ver.categoria)
}

//------------------------------------------//
// Metodos con objetos
//------------------------------------------//

console.log("Object.keys");

productos.forEach(product=>{
console.log(Object.keys(product));
});

console.log("Object.values");

productos.forEach(product=>{
console.log(Object.values(product));
});

console.log("Object.entries");

productos.forEach(product=>{
console.log(Object.entries(product));
});


//------------------------------------------//
//Uso del set en JavaScript
//------------------------------------------//

let numbers = new Set ([1,1,2,3,4,5,6])
console.log ("Numeros, practica Set")
numbers.add(78)

numbers.has(3)

numbers.delete(4)

for (const number of numbers){
    console.log(`These are the numbers ${number}`)
}
//------------------------------------------//
// Pruebas
//------------------------------------------//

console.log("OBJETO COMPLETO");
console.log(productos);

console.log("SET COMPLETO");
console.log(numbers);

console.log("MAP COMPLETO");
console.log(myMap);
