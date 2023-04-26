let nombre1, nombre2;
let decucciones1, bonificaciones1, bruto1, neto1;
let decucciones2, bonificaciones2, bruto2, neto2;

nombre1 = prompt('ingrese nombre del trabajador uno');
decucciones1 = Number(prompt('ingrese las prestaciones del usuario uno'));
bonificaciones1 = Number(prompt('ingrese las bonificaciones del usuario uno'));
bruto1 = Number(prompt('ingrese el salario'));

nombre2 = prompt('ingrese nombre del trabajador dos');
decucciones2 = Number(prompt('ingrese las prestaciones del usuario dos'));
bonificaciones2 = Number(prompt('ingrese las bonificaciones del usuario dos'));
bruto2 = Number(prompt('ingrese el salario del usuario dos'));

neto1= (bruto1 - decucciones1) + bonificaciones1;
neto2= (bruto2 - decucciones2) + bonificaciones2;

if (neto1>neto2){
    alert('el empleado' + nombre1 + 'tiene un salario más alto')
}
else {
    alert('el empleado' + nombre2 + 'tiene un salario más alto')
}