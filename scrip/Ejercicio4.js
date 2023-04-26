let n_pasajeros1, Vpasaje1, placa1,dineroR1
let n_pasajeros2, Vpasaje2, placa2,dineroR2

//Crear un algoritmo que le permita al usuario ingresar los datos de dos buses así: Placa,
//El número de pasajeros transportados y el valor del pasaje, y el computador le
//muestre la placa del bus que más dinero recogió.

placa1 = prompt('ingrese la placa')
n_pasajeros1 = Number(prompt('ingrese el número de pasajeros que transportó'))
Vpasaje1 = Number(prompt('ingrese el valor del pasaje'))

placa2 = prompt('ingrese la placa')
n_pasajeros2 = Number(prompt('ingrese el número de pasajeros que transportó'))
Vpasaje2 = Number(prompt('ingrese el valor del pasaje'))

dineroR1 = n_pasajeros1 * Vpasaje1
dineroR2 = n_pasajeros2 * Vpasaje2

if (dineroR1 > dineroR2){
    alert('el bus' + placa1 + 'recogió más dinero')
}
else {
    alert('el bus' + placa2 + 'recogió más dinero')  
}