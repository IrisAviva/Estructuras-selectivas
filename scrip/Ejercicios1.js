let edadh1, edadh2, nombreh1, nombreh2;

edadh1 = Number(prompt('Ingrese la edad del hermano 1'))
edadh2 = Number(prompt('Ingrese la edad del hermano 2'))
nombreh1 = prompt('Ingrese el nombre del hermano 1')
nombreh2 = prompt('Ingrese el nombre del hermano 2')

if (edadh1>edadh2){
    alert('el hermano mayor es'+ nombreh1)
}
else{ 
    alert('el hermano mayor es'+ nombreh2)
}