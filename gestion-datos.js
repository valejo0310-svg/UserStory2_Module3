//-------------------------------------------//
//Creación de objeto de productos
//-------------------------------------------//

let productos = [
    {"id":1,"nombre":"leche","precio" : 6000,"categoria":"lacteos"},
    {"id":2,"nombre":"Cocacola","precio" : 1000,"categoria":"bebidas"},
    {"id":3,"nombre":"Cerdo","precio" : 3000,"categoria":"Carnes Rojas"}
]

//------------------------------------------//
//Uso del set en JavaScript
//------------------------------------------//

let numbers = new Set ([1,1,2,3,4,5,6])

numbers.add(78)

numbers.has(3)

numbers.delete(4)

for (const number of numbers){
    console.log(`These are the numbers ${number}`)
}

//------------------------------------------//
//Creación de un Map
//------------------------------------------//

let myMap = new Map ();

for (const key in productos){
    const ver = productos[key]
    myMap.set(ver.nombre, ver.categoria)
}

//------------------------------------------//
//Validación y pruebas
//------------------------------------------//
