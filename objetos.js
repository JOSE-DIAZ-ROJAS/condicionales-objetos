
// CREACIONDE UN OBJETO
const person = {
    name : 'juan',
    lastName : 'perez',
    age : '30',
    
    account : {
        bcp : '20102092190',
        interbank : 6788293292,   
        tarjeta:{
            basica: 'blanco',
            premium: 'black',
        },
    },
    jobTitle : 'Full stack developer',
    };
//ACCEDER Y MOSTRAR PROPIEDADES DEL OBJETO
    console.log(person.age);
    console.log(person.jobTitle);
    console.log(person.account.interbank);
    console.log(person.account.bcp);
// AGREGAR VALORES A UN OBJETO
    console.log(person);
    person.nationality = 'peru';
    console.log(person);

// ELIMINAR PROPIEDADES DEL OBJETO
delete person.nationality;
console.log(person.account.interbank);

// DESESTRUCTURACION DE OBJETOS PARA ACCEDER A LAS PROPIEDADES

const { name , account:{interbank,tarjeta:{premium}}, lastName} = person;
 console.log(lastName);
 console.log(name);
 console.log(interbank);
 console.log(premium);

 // CONGELAR UN OBJETO (no permite modificar, agregar o eliminar propiedades)

// Object.freeze(person);
// person.name = 'jose';
// console.log(person); // juan

// SELLAR OBJETO(permite modificaciones pero no agregar ni eliminar propiedades)
Object.seal(person);
person.account.bcp = '47097307'; // se modifica el numero de cuenta
console.log(person.account);



//-----------------CREAMOS 02 OBJETOS NUEVOS PARA UNIR CON ASSIGN Y SPREAD OPERATOR-------------------

const developer ={
name: "Pedro",
lastName: "Rivas",
age: "29",
};

const pedro = {
jobTitle : "frontend",
company: "idat",
};
// usanso assign
const unirObjetos = Object.assign(developer,pedro);
console.log(unirObjetos);
// usando spread operator
const unirObjetos2 = {...developer,...diego};
console.log(unirObjetos);

// palabra reservada this en objetos literales
const pc = {
so: 'windows',
ssd: '256G',
ram : "16G",
procesador: "intel 5700G",
tvideo : "4100 Nvidia",
};
//-------------------RECORREMOS EL OBJETO USANDO: KEYS, VALUES Y ENTRIES-----------------------
//  (object.keys()) se obtiene un arreglo de las propiedades

let claves = Object.keys(pc); // se obtiene el array de propiedades
console.log(claves); // muestro el array
console.log(claves[0]); // se puede acceder  a las propiedades(elementos del array obtenido)

// --practica extra------
for (let i=0; i<claves.length; i++){  // se recorre dicho arreglo
 let clave = claves[i];
 console.log(clave);
 //console.log(pc[clave]);
}

// (object.values()) se obtiene un arreglo de los valores
let valores = Object.values(pc);
console.log(valores);
console.log(valores[1]);

// --practica extra------
for(let i=0; i<valores.length; i++){
let valor = valores[i];
console.log(valor);
}

// (object.entries()) crea  un array cuyos elementos son arrays  [propiedad, valor] 
// [[prop1,val1],[prop2,val2],[prop3,val3],[pro4,val4]]
let propvals = Object.entries(pc);
console.log(propvals);
console.log(propvals[4]);

// --practica extra------
for(let i=0;i<propvals.length;i++){
let propval = propvals[i];
console.log(propval);
}

// (usando boocle for...in)
   for(let clave in pc){
console.log(pc[clave]);
   }

// (usando object.entries() con un forEach())

Object.entries(pc).forEach(([hola,mundo])=>{console.log(mundo);});

// (usando object.entries() con for.....of
for(const[key,value] of Object.entries(pc)){
console.log(key);
};



// --------------------FUNCIONES----------------------

// las funciones nos permite englobar logica
//----------------------DECLARATIVA------------------

//funcion clasica, tienen nombre, se puede llamar desde cualquier parte del codigo)
function sumNum(a,b){

    return a+b;
}
console.log(sumNum(2,8));

//-------------------------EXPRESIVA---------------
//no tienen nombre, no se pueden llamar desde cualquier parte del codigo
//Estas son funciones anonimas, se almacena en una variable para luego usarlo, se le puede
//invocar lineas despues de haberla declarado, pero no  desde cualquier parte del codigo.

// 1. Funcion anonima Arrow function (funcion flech)
const restNumbers = (num1 , num2)=>{ return num1-num2};
console.log(restNumbers(20,7));

// 2. funcion anonima usando palabra reservada function

const producto = function(num1,num2){
return num1*num2;
};
console.log(producto(2,200));


let saludo = function(nombre){

    return `hola ${nombre}`;
};
console.log(saludo("carlos"));



// argumentos y parametros que se le puede asiganar a una funcion
function message(name, lastName){
return `mi nombre es:${name} y mi apellido: ${lastName}.`
}
console.log(message('joseph','diaz'));


function promedio(v=[a,b,c,d]){
let inicial = 0;
let sumconinicial = v.reduce((acumulador,currentvalue)=> acumulador+currentvalue,inicial);
return sumconinicial/v.length;
};

console.log(promedio(v=[20,4,6,8]));


//comunicacion entre funcionese
function initApp() {
console.log('...iniciando App');
const user = 'jose';
(user? authenticated(user) : noAuthenticated());
};


function authenticated(userName){
    console.log(`iniciaste sesion con: ${userName}`);
};
function noAuthenticated(){
    console.log("no iniciaste sesion");
};
 initApp();