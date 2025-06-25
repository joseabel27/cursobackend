/* TIPOS DE DATOS USADO EN JS */

/* NUMERICOS */
const salario = 120000;
const edad = 40;
const descuento = 12.5;

/* TEXTO, CADENAS DE CARACTERES ( STRING)*/

const nombre = 'Jose Abel Romero';
const mensaje = 'hola bienvendido';

/* BOOLEANOS TRUE O FALSE */

const activado = true;
const desactivado = false;

/*  ARRAYS, ARREGLOS, VECTORES, LISTAS */

const numero = [1, 2, 3, 4, 5, 6, 7];


numero.push(8);
numero.push(9);
numero.push(10);

// console.log(numero);

// NO SE SABE CUANTAS POSICIONES TIENE EL ARREGLO

// const numeros = [10,20,30,40,50,60,70,80,90,100];

// // for (i=0;i<numeros.length; i++){

//     // console.log(numeros[i])


// OPTIMIZAR EL FOR SIN TENER UN INDEX (i=0)

//  for (const item of numeros){

// console.log(item);



// //  OTRA FORMA DE RECORRE EL ARREGLO MAS OPTIMIZADO



// /* OBJETOS EN JAVASCRIPT */

// const persona = {

//     nombre:"Josee",
//     apellido:"Romero",
//     edad:40,
// numeros.map((item)=>console.log(item)); devuelve un resultado
// 
// };
// numeros.forEach(item=>console.log(item)); no devuelve resultado

// let i = 0;

// while (i<numeros.length){

//     console.log(numeros[i]);
//     i++; 
// }


/* OBJETOS EN JAVASCRIPT */

let persona = {

    nombre: "Jose",
    apellido: "Romero",
    edad: 40,
};
// console.log(persona.nombre); 

const masDatosDelaPersona = {

    estatura: 1.69,
    nacionalidad: "venezolana",
}

/* PROPAGACION */

persona = {

    ...persona,
    ...masDatosDelaPersona,
};



persona.hermanos = 4 //agregar atributos a persona


delete persona.estatura;
//  console.log(persona);

// const alumno1={

//     id:1,
//     nombre:"Juan",
//     apellido:"Perez",
//     edad:18,

// };

// const alumno2={

//     id:2,
//     nombre:"Diego",
//     apellido:"Monsalve",
//     edad:19,
// }

// const estudiantes=[alumno1,alumno2];

// console.log(alumnos[0].ed ad);

/* OBJETOS DENTRO DE UN ARREGLO */

// const estudiantes =[

//     {
//         id:1,
//         nombre:"Jose",
//         apellido:"Clemente",
//         edad:20,

//     },

//     {
//         id:2,
//         nombre:"Carlos",
//         apellido:"Hernandez",
//         edad:38,

//     },


// ];

// // console.log(estudiantes[1].edad);
// estudiantes.forEach((item)=>console.log(item));


const data = [

    {
        id: 1,
        cuentaAhorros: "123456",
        usuario: "Jose",
        monto: 30000000.00,
        deuda: null,
        ciudad: "Medellin",
        tarjetDeCredito: false,
        transferencias: [

            {
                id: 90,
                monto: -20000,
                de: "123",
                para: "123456",
                fecha: "2025-06-19",
            },

            {
                id: 91,
                monto: 20000,
                de: "123",
                para: "123456",
            },
        ]
        
    },

    {    
        id: 2,
        cuentaAhorros: "123456",
        usuario: "Jose",
        monto: 30000000.00,
        deuda: null,
        ciudad: "Medellin",
        tarjetDeCredito: false,
    },


];

console.log(data[1].cuentaAhorros);

