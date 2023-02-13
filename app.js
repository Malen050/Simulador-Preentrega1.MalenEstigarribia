// SIMULADOR DE PRESTAMOS


let monto = prompt('Ingrese el monto del prestamo que desea adquirir')

let cuota = prompt('Ingrese en cuantas cuotas desea abonar')
alert('Datos ingresados');


if (cuota >= 16){
    interés = 1.80
    alert ('El interés es del 80%')   
} 

else if(cuota >=10){
    interés = 1.50
    alert ('El interés es del 50%')
}

else if (cuota >= 7){
    interés = 1.15
    alert ('El interés es del 30%')
} 

else if (cuota <= 6){
    interés = 1.15
    alert ('El interés es del 15%')
}


alert('Su operación esta siendo procesada')

alert('Tiene que devolver: ' + monto * interés);
alert('En cuotas de: ' + (monto * interés)/cuota);

