const productos = [
  {
    id: 1,
    nombre: "Laptop",
    categoria: "Electrónica",
    precio: 1500,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Teclado",
    categoria: "Accesorios",
    precio: 50,
    stock: 50,
  },
];


// **********************************************************
//  ** Agregar Productos: Crear una función para agregar productos al catálogo. Cada producto debe tener id, nombre, categoría, precio, y stock (el id debe ser único).
// ***********************************************************



// const crearproducto=(newproducto)=>{
// const idProducto = productos.length ? productos[productos.length -1].id+1 :1;

// const {nombre,categoria,precio,stock} = newproducto;
// const newdata={

//   id:idProducto,
//   nombre,
//   categoria,
//   precio,
//   stock,

// }
// productos.push(newdata);
  
// console.log("El Producto Creado es :",newdata);

// };

// const newproducto =
// {
//   nombre:"Mouse",
//   categoria: "Accesorios",
//   precio: 500,
//   stock: 10,

// }

// crearproducto(newproducto);
// console.log(productos);




// *************************************************************
// ** Eliminar Productos: Implementar una función que permita eliminar un producto por su id.
// ***************************************************************



// const deleteProducto = (id) => {

//     const indexProductoAEliminar = productos.findIndex((item)=> item.id ===id);


// if (indexProductoAEliminar === -1){

//     console.log("Prodcuto no encontrado");
//     return;
// }

// productos.splice(indexProductoAEliminar, 1);
// console.log("Producto Eliminado es el ID:",id);

// };
// deleteProducto(2);
// console.log(productos);



// *********************************************************
//  ** Actualizar Stock y Precio: Permitir actualizar la cantidad en stock y el precio de un producto específico.
// *********************************************************


// const updateProducto =(id,newdata) => {

// const indexProductoAActualizar = productos.findIndex((item)=> item.id ===id);


// if (indexProductoAActualizar === -1){

//     console.log("Prodcuto no encontrado");
//     return;
// }
//  productos[indexProductoAActualizar]={

//     ...productos[indexProductoAActualizar],
//     ...newdata
//  }
//  console.log("Producto Actualizado");
// };

// const newdata={
//     precio:1000,
//     stock:20,

// };

// updateProducto(1,newdata);
// console.log(productos);

 




// *************************************************************
//  ** Buscar Productos: Buscar productos por nombre y mostrar su información.
// *************************************************************




// const buscarProductoName=(nombre)=>{

// const nameProductoABuscar = productos.find((productos)=>productos.nombre === nombre);

// if(!nameProductoABuscar){
// console.log("Producto no encontrado");
// return;
// }
    
//  console.log(nameProductoABuscar);

// };
//  buscarProductoName("Teclado");




// ******************************************************
//  **  Filtrar Productos: Implementar filtros por:
//   Rango de precios (precio minimo, precio maximo).
//   Categoría.
// ******************************************************



// const precioMinimoMaximo = (array, min , max)=>{
// return array.filter (

//   producto => producto.precio >= min && producto.precio <=max);

// };

// console.log(precioMinimoMaximo(productos, 40, 1500));





// ***************************************************************
//  ** Cálculo Total de Inventario: Calcular el valor total del inventario (precio * stock).
// ***************************************************************


const calculototalInventario = (array)=>{

  return array.reduce((total,producto)=>{
    return total + (producto.precio * producto.stock);
  }, 0);
};

const totalInventario = calculototalInventario(productos);
console.log("El valor total del inventario es :",totalInventario);


//   ** Descuento en Productos: Crear una función que aplique un descuento a todos los productos de una categoría específica y mostrar el nuevo precio.
