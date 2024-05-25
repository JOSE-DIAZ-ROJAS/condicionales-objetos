let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
var operacion = prompt("ingrese la operacion");
console.log(num1,operacion,num2);

 // operacion (+ - * /)
switch(operacion){
case '+':{
    let suma = num1+num2;
console.log(`la suma es : ${suma}`);
break;
}
case '-':{
    let resta = num1-num2;
console.log(`la resta es :${resta}`);
break;
}
case '*':{
    let producto = num1*num2;
console.log(`El producto es :${producto}`);
break;
}
case '/':{
    let division = num1/num2;
console.log(`la division es :${division}`);
break;
}
default: 
console.log(" hay algun error, corrijalo.");
break;
}