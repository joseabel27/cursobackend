/* FUNCIONES NORMALES */

/* FUNCION SIN PAAMETROS */
// function saludar(){

//     console.log("hola");
// }

// saludar();

/* FUNCION CON PARAMETROS */

// function saludar(item){

//     console.log(`hola, ${item}`);
// }

// const nombre="jose";
// saludar(nombre);

/* FUNCION QUE RETORNE UN VALOR */

// function sumar(n1,n2){

//      const resultado = n1+n2;
//      return resultado;
// }

// const result = sumar(5,10);
// console.log(result);

/* FUNCIONES FLECHAS */

// const saludar = () => {

//     console.log("Hola Amigo");
// };

// saludar();


// const saludar = (item)=>{

//      console.log(`hola, ${item}`);
//  }

//  const nombre="jose";
// saludar(nombre);

// const sumar=(n1,n2)=>{

//  const resultado = n1+n2;
//       return resultado;
//  }

//  const result = sumar(5,10);
//  console.log(result);

/* FUNCIONES FLECHAS CON RETORNO IMPLICITO */

// const sumar = (n1,n2) => n1+n2;
// const result = sumar (5,10);
// console.log(result);


/*  FUNCIONES FLECHAS CON OBJETOS Y DESESTRUCTURACION*/

const saludar3 =(persona)=>{

    const {nombre,apellido,ciudad}=persona;

    console.log(`hola ${nombre} ${apellido} bienvenido, veo que eres de la ciudad de ${ciudad}`);
};

const persona ={

    nombre:"Jose",
    apellido:"Romero",
    ciudad:"Medellin",
};

saludar3(persona);