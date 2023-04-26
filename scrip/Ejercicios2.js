let edad;

edad=Number(prompt('ingrese su edad'))

if (edad<10){
    alert('Usted pertenece a la categoría "niño"')
}
else if(edad>=10 && edad<15){
    alert('Usted pertenece a la categoría "preadolecente"')
}
else if(edad >=15 && edad<18){
    alert('Usted pertenece a la categoría "adolecente"')
}
else if(edad >=18 && edad<50){
    alert('Usted pertenece a la categoría "adulto"')
}
else if(edad>=50){
    alert('Usted pertenece a la categoría "adulto mayor"')
}