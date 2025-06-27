/* PRACTICA */


const usuarios =[
    {
        id:1,
        name:"Mayra",
        age:38,

    },
    {

        id:2,
        name:"Jose",
        age:40,
    },
    {
        id:3,
        name:"Jairo",
        age:42,
    },

    {

        id:4,
        name:"Juan",
        age:50,
    },

    {

        id:5,
        name:"Celia",
        age:57,
    },

    {
        id:6,
        name:"Anabel",
        age:9,

    },
];

// *********************************************
/* SUMAR LAS EDADES DE TODAS LAS PERSONAS */
// *********************************************

// let acumuladorEdades=0;

// for(i=0; i<usuarios.length;i++){

// acumuladorEdades += usuarios[i].age;
// }


// console.log("La suma de las edades es igual a:",acumuladorEdades);

/* OTRA FORMA DE HACERLO CON METODOS RECUCE ( PERMITE REALIZAR UN CONTADOR DE UN ARREGLO) */

// const acumuladorEdades = usuarios.reduce(
//     (acumulador,item)=> acumulador + item.age,0
// );

// console.log(acumuladorEdades);

// **********************************************
/* BUSCAR A JOSE E IMPRIMIR TODO SU OBJETO */
// **********************************************

// for (i=0 ; i < usuarios.length; i++){

//     if(usuarios[i].name==="Jose"){

//         console.log(usuarios[i]);
//         break;
//     }
// }

/* OTRA FORMA DE REALIZARLO CON METODOS DE ARREGLO FIND */
/* FIND PERMITE REALIZAR UNA BUSQUEDAD,ENCONTRAR Y DEVUELVE UN RESULTADO MAS NO UN ARREGLO */


// const resultado=usuarios.find(item=>item.name==="Jose");

// if(!resultado){

//     console.log("Usuario no encontrado");
//     return
// }
// console.log(resultado);


// ***************************************************
/* BUSCAR TODAS LAS PERSONAS MENORES DE 39 AÑOS */
// ***************************************************


// const personasMenores =[];

// for (const item of usuarios){

//     if(item.age<39){

//         personasMenores.push(item)
//     }
// }

// console.log(personasMenores);

/* OTRA FORMA DE HACERLO CON METODOS DE ARREGLO FILTER */
/* FILTER SI DEVUELVE UN ARREGLO  */

const personasMenores = usuarios.filter((item)=> item.age <39);
console.log(personasMenores);


