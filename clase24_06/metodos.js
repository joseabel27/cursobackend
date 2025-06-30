/* METODOS QUE MAS SE UTILIZAN CON ARREGLOS */

/* 1) PUSH() : AGREGA UNO O MAS ELEMENTOS AL FINAL DEL ARREGLO */
// RETORNA : LA NUEVA LONGITUD DEL ARREGLO

// EJEMPLO :

// const arr1 = [1,2,3];
// arr1.push(4);

// console.log(arr1);

/* 2) POP() : ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO */
// RETORNA : EL ELEMENTO ELIMINADO.

// EJEMPLO:

// const arr2 = [1,2,3,4,5,6];
// arr2.pop();

// console.log(arr2);

/* 3) SHIFT() : ELIMINA EL PRIMER ELEMENTO DEL ARREGLO */
// RETORNA:EL ELEMENTO ELIMINADO

// EJEMPLO:

// const arr3 =[4,3,2,4,5];
// arr3.shift();

// console.log(arr3);


/* 4) UNSHIFT() : AGREGA UNO O MAS ELEMENTOS AL PRINCIPIO DEL ARREGLO */
// RETORNA: LA NUEVA LONGITUD DEL ARREGLO.

// EJEMPLO:

// const arr4 =[3,2,4,6];
// arr4.unshift(1,3,4);

// console.log(arr4);

/* 5) SLICE() : RETORNA UNA COPIA SUPERFICIAL DE UNA PORCION DEL ARREGLO EN UN NUEVO ARREGLO */
// RETORNA: UN NUEVO ARREGLO CON LOS ELEMENTOS SELECCIONADOS

// EJEMPLO:

// const arr5 = [1,2,3,4];

// const sliced = arr5.slice(1,3);

// console.log(sliced);

/* 6) SPLICE() : AGREGA O ELIMINA ELEMENTOS EN CUALQUIER PARTE DEL ARREGLO */
// RETORNA: UN NUEVO ARREGLO CON LOS ELEMENTOS ELIMINADOS.

// EJEMPLO

// const arr6 = [5,6,7,8,9];

// arr6.splice(3,4);
// console.log(arr6);


/* 7) FOREACH() : EJECUTA UNA FUNCION SOBRE CADA ELEMENTO DEL ARREGLO */
// RETORNA : UNDEFINED (NO RETORNA NADA)

// EJEMPLO:

    // const arr7 = [1,2,3];

    // arr7.forEach((el)=>console.log(el));

/*  8) MAP() : CREA UN NUEVO ARREGLO CON LOS RESULTADOS DE APLICAR UNA FUNCION A CADA ELEMENTO DEL ARREGLO ORIGINAL */
// RETORNA : UN NUEVO ARREGLO.

// EJEMPLO:

// const arr8 = [1,2,4];
// const porDos = arr8.map((item)=> item*2);
// console.log(porDos);

/* 9) FILTER(): CREA UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS QUE PASEN LA PRUEBA IMPLEMENTADA POR UNA FUNCION*/
// RETORNA: UN NUEVO ARREGLO CON LOS ELEMENTOS FILTRADOS.

// EJEMPLO:

// const arr9 = [1,3,8,9];
// const par = arr9.filter((el)=> el % 2 ===0);
// console.log(par);

// // OTRA FORMA SIN GUARDAR EL RESULTADO EN UNA VARIABLE

// arr9.filter((el)=> el % 2 === 0 ? console.log("Este es par :",el):console.log("No hay pares"));


/* 10)  REDUCE() : APLICA UNA FUNCION A UN ACUMULADOR Y A CADA VALOR DEL ARREGLO (DE IZQUIERDA A DERECHA) PARA REDUCIRLO A UN SOLO VALOR. */
// RETORNA: EL VALOR REDUCIDO.

// EJEMPLO:

// const arr10 = [1,2,3,4];
// const sum = arr10.reduce((suma,el)=> suma + el,0);
// console.log(sum);

/*  11) FIND() : RETORNA EL PRIMER ELEMENTO QUE CUMPLA CON LA CONDICION DE LA FUNCION PROPORCIONADA*/
// RETORNA: EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION, O UNDEFINED SI NO SE ENCUENTRA.

// EJEMPLO:

// const arr11 = [

//     {

//         id:1,
//         nombre:"Jose",
//     },
//     {
//         id:2,
//         nombre:"Juan",
//     },
//     {
//         id:3,
//         nombre:"Jairo",

//     }
// ]

// const search = arr11.find((el)=> el.id===3);
// console.log(search);

/*  12) FINDINDEX() : RETORNA EL INDICE DEL PRIMER ELEMENTO QUE CUMPLA CON LA CONDICION DE LA FUNCION PROPORCIONADA */
// RETORNA: EL INDICE DEL PRIMER ELEMENTO QUE CUMPLE LA CONDICION, O -1 SI NO SE ENCUENTRA.

// const arr12 = [

//     {

//         id:1,
//         nombre:"Jose",
//     },
//     {
//         id:2,
//         nombre:"Juan",
//     },
//     {
//         id:3,
//         nombre:"Jairo",

//     }
// ]

// const result = arr12.findIndex((el)=> el.id===3);
// console.log(result); 

// if (result === -1){
//     console.log("No hay nadie registrado");
// }

/* 13) INCLUDES() : VERIFICA SI UN ARREGLO CONTIENE UN ELEMENTO ESPECIFICO  */
//RETORNA: TRUE O FALSE.

// EJEMPLO:

// const arr13 = [1,2,3,4];
// const hay = arr13.includes(4);
// console.log(hay);

/*  14) CONCAT() : COMBINA DOS O MAS ARREGLOS Y RETORNA UN NUEVO ARREGLO */
// RETORNA: UN NUEVO ARREGLO.

// EJEMPLO:

// const arrA = [1,2];
// const arrB = [3,4];

// const mix = arrA.concat(arrB);
// console.log(mix);

/*  15) SORT() : ORDENA LOS ELEMENTOS DE UNA ARREGLO IN PLACE Y RETORNA EL ARREGLO. */
// RETORNA: EL ARREGLO ORDENADO.

// EJEMPLO:

// const arr15 = [3,5,1,2,4];
// const orden = arr15.sort();
// console.log(orden);

/*  16) REVERSE() : INVIERTE EL ORDEN DE LOS ELEMENTOS EN EL ARREGLO IN PLACE */
// RETORNA: EL ARREGLO INVERTIDO.

// EJEMPLO:

// const arr16 = [1,2,3];
// arr16.reverse();
// console.log(arr16);

/*  17) JOIN() : UNE TODOS LOS ELEMENTOS DEL ARREGLO EN UNA CADENA, SEPARADOS POR UN SEPARADOR ESPECIFICADO */
// RETORNA: UNA CADENA DE TextO

// EJEMPLO:

// const arr17 = [7,8,9];
// const union=arr17.join("*");
// console.log(union);

/* 18) SOME() : VERIFICA SI AL MENOS UN ELEMENTO DEL ARREGLO CUMPLE CON LA CONDICION IMPLEMENTADA POR UNA FUNCION */
// RETORNA:TRUE O false.

// EJEMPLO:

const arr18 = [
    {
        id:1,
        hasCar:false,
    },
    {
        id:2,
        hasCar:false,
    },
    {
        id:3,
        hasCar:false,
    },
    {
        id:4,
        hasCar:false,
    },
    {
        id:5,
        hasCar:false,
    },
]

const conCar = arr18.some(persona=> persona.hasCar);
console.log(conCar);