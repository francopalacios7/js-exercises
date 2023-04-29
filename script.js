let miNombre = "Franco" 
let miApellido= "Palacios"
let miEdad= 19
let miMascota= "Rocco"
let edadMacota= 6

let nombreCompleto= miNombre + " " + miApellido

let textoPresentacion= "Soy" + " " + miNombre + " " + miApellido +","+ "tengo" + " " + miEdad + " " + "años" + ", y mi perro se llama" + " " + miMascota +  " " + "y tiene" + " " + edadMacota + " " + "años."

let sumaEdades = miEdad + edadMacota
let restaEdades = miEdad - edadMacota
let productoEdades = miEdad * edadMacota
let divisionEdades = miEdad / edadMacota

const alumno = {
    nombre : "Franco",
    apellido : "Palacios",
    edad : "19",
    club : "Velez Sarsfield",
    deporte : "Basquet"
}

console.table(alumno)

const mascota = {
    nombre : "Rocco",
    apellido : "Palacios",
    edad : "6",
    club : "Velez Sarsfield",
    color : "Gris"
}

console.table(mascota)

const frutas = [
    "Manzana",
    "Banana",
    "Durazno",
    "Pera",
    "Cereza"
]

console.log(frutas)

const numeros = [
    1,2,3,4,5
]

console.log(numeros)

const familia = [
    papa = "Pablo",
    mama = "Graciela",
    hermano = "Lucas",
    yo = "Franco",
    perro = "Rocco"
]

console.log(familia)


let textoAleatrio = `hay ${numeros[3]} ${frutas[1]} en la casa de ${familia[4]}`  

console.log(textoAleatrio)
/* 
let edadUsuario = prompt("Escribe tu eddad")
let edadUsuario2 = prompt("Escribe tu eddad")

let edadesIguales = edadUsuario == edadUsuario2
console.log(edadesIguales)

let edadUsuario3 = prompt("Escribe tu eddad")
let edadUsuario4 = prompt("Escribe tu eddad")

let soyMayor = edadUsuario3 > edadUsuario4
console.log(soyMayor)

let edadUsuario5 = prompt("Escribe tu eddad")
let edadUsuario6 = prompt("Escribe tu eddad")

let soyMenor = edadUsuario5 < edadUsuario6
console.log(soyMenor) /


/ let soyMayorDeEdad = prompt("Ingrese su edad")

if (soyMayorDeEdad >= 18) {
    console.log("Soy mayor de edad" + " " + soyMayorDeEdad)
} /

/ let edad = prompt("Introduzca su edad")
let altura = prompt("Introduzca su altura")

let puedeSubir = edad + altura

if (edad >= 6 && altura >= 120) {
    console.log(" Puede subir a la atracción" + " " + puedeSubir)


} */


let saldo = prompt("Introduzca su saldo")

let pase = prompt("Indique si su pase es: VIP NORMAL O LIMITADO")

let puedePasar = pase || saldo
console.log(puedePasar)

if (pase === "VIP" || "NORMAL") {
    console.log("La persona puede pasar y tiene" + " " + pase)
}