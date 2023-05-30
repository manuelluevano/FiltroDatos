//VARIABLES
const productos = document.querySelector("#producto");
const categoria = document.querySelector("#categoria");
const precioMin = document.querySelector("#precioMin");
const precioMax = document.querySelector("#precioMax");



// CONTENEDOR PARA LOS RESULTADOS
const resultado = document.querySelector("#resultado");

// CONTENEDOR PARA RESULTADOS DE API
const productosApi = [];

const datosBusqueda = {
  title:"",
  categoria: "",
  precioMin:"",
  precioMax:"",

}

//EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  // mostrarAccesorios();
  api();

});

// EVENT LISTENER PARA LOS SELECT DE BUSQUEDA
productos.addEventListener("change", (e)=>{
  datosBusqueda.title = e.target.value


  filtrarBusqueda()
})
categoria.addEventListener("change", (e)=>{
  datosBusqueda.categoria = e.target.value

  
  filtrarBusqueda()
})
precioMin.addEventListener("change", (e)=>{
  datosBusqueda.precioMin = e.target.value

  filtrarBusqueda()
})

precioMax.addEventListener("change", (e)=>{
  datosBusqueda.precioMax = e.target.value

  filtrarBusqueda()
})



//API
async function api() {
  const response = await fetch('https://fakestoreapi.com/products');
  const producto = await response.json();
  productosApi.push(producto);

  mostrarProductos()
  mostrarCategoria()
  mostrarPrecioMin()
  mostrarPrecioMax()
  mostrarResultado()
}


//FUNCIONES
async function mostrarProductos() {
  console.log("Datos de la busqueda", productosApi);
  
  //AGREGAR Y SEPARA LOS DATOS EN LOS SELECT
  productosApi.forEach((element) => {
    // console.log(element);
    element.forEach((item) => {

      //AGREGAR PRODUCTOS
      const accesorioHTML = document.createElement("OPTION");
      accesorioHTML.textContent = `
      ${item.title}`;
      //INSERTAR EN EL HTML
      productos.appendChild(accesorioHTML);
    })
  });
}
async function mostrarCategoria() {
  console.log("Datos de la busqueda", productosApi);
  
  //AGREGAR Y SEPARA LOS DATOS EN LOS SELECT
  productosApi.forEach((element) => {
    // console.log(element);
    element.forEach((item) => {

      //AGREGAR PRODUCTOS
      const accesorioHTML = document.createElement("OPTION");
      accesorioHTML.textContent = `
      ${item.category}`;
      //INSERTAR EN EL HTML
      categoria.appendChild(accesorioHTML);
    })
  });
}
async function mostrarPrecioMin() {
  console.log("Datos de la busqueda", productosApi);
  
  //AGREGAR Y SEPARA LOS DATOS EN LOS SELECT
  productosApi.forEach((element) => {
    // console.log(element);
    element.forEach((item) => {

      //AGREGAR PRODUCTOS
      const accesorioHTML = document.createElement("OPTION");
      accesorioHTML.textContent = `
      ${item.price}`;
      //INSERTAR EN EL HTML
      precioMin.appendChild(accesorioHTML);
    })
  });
}
async function mostrarPrecioMax() {
  console.log("Datos de la busqueda", productosApi);
  
  //AGREGAR Y SEPARA LOS DATOS EN LOS SELECT
  productosApi.forEach((element) => {
    // console.log(element);
    element.forEach((item) => {

      //AGREGAR PRODUCTOS
      const accesorioHTML = document.createElement("OPTION");
      accesorioHTML.textContent = `
      ${item.price}`;
      //INSERTAR EN EL HTML
      precioMax.appendChild(accesorioHTML);
    })
  });
}
//MOSTRAR EN HTML
async function mostrarResultado(resultadoFiltro){
  //ELIMINA HTML PREVIO
  limpiarHTML()

  if(resultadoFiltro){
  console.log("Hay resultado filtrado", resultadoFiltro);
  //AGREGAR Y SEPARA LOS DATOS EN LOS SELECT
  resultadoFiltro.forEach((e) => {

    //DESTRUCTURING 
    const {title, price, category} = e
    //AGREGAR PRODUCTOS
    const resultHTML = document.createElement("P");
    resultHTML.textContent = `
    title: ${title} -  PRECIO: ${price} --  CATEGORIA: ${category}
    ----------------------------------------------------------------
    `;

    //INSERTAR EN EL HTML
    resultado.appendChild(resultHTML);
  });
  }else{  
    //AGREGAR Y SEPARA LOS DATOS EN LOS SELECT
    productosApi.forEach((element) => {
      // console.log(element);
      element.forEach((item) => {
  
        //DESTRUCTURING 
        const {title, price, category} = item
        //AGREGAR PRODUCTOS
        const resultHTML = document.createElement("P");
        resultHTML.textContent = `
        title: ${title} -  PRECIO: ${price} --  CATEGORIA: ${category}
        ----------------------------------------------------------------
        `;
  
        //INSERTAR EN EL HTML
        resultado.appendChild(resultHTML);
      })
    });
  }
  
}

//LIMPAR HTML AL FILTAR
async function limpiarHTML(){
while (resultado.firstChild) {
  resultado.removeChild(resultado.firstChild);
}
}


// FUNCTION QUE FILTRA EN BASE A LA BUSQUEDA
async function filtrarBusqueda(){
let resultado 
  productosApi.forEach((element)   => {
     const result = element.filter(filtrarProducto).filter(filtrarCategoria).filter(filtrarPrecioMin).filter(filtrarPrecioMax)
     resultado = result
     console.log("Resultado de filtro", resultado);
    });

    //VALIDAR SI HAY RESULTADOS
if(resultado.length){
  //MOSTRAMOS RESULTADOS EN HTML
  mostrarResultado(resultado)

}else{
  //MENSAJE DE ERROR SI NO HAY
  mostrarMensajeError()
}

}

function mostrarMensajeError(){
  limpiarHTML()

  const mensajeError = document.createElement('DIV')
  mensajeError.classList.add("text-4xl", "pt-32" ,"text-center")
mensajeError.style.color = 'red';
  mensajeError.textContent = "No Hay Resultado"

  resultado.append(mensajeError)
}

 function filtrarProducto(producto){

   //DESTRUCTURING
   const {title} = datosBusqueda
  if(title){
    return producto.title == title;
  }else{
    return true;
  }
}

function filtrarCategoria(producto){

  //DESTRUCTURING
  const {categoria} = datosBusqueda

 if(categoria){
   return producto.category == categoria;
 }else{
   return true;
 }
}

function filtrarPrecioMin(producto){

  //DESTRUCTURING
  const {precioMin} = datosBusqueda

 if(precioMin){
   return producto.price >= precioMin;
 }else{
   return true;
 }
}

function filtrarPrecioMax(producto){

  //DESTRUCTURING
  const {precioMax} = datosBusqueda

 if(precioMax){
   return producto.price <= precioMax;
 }else{
   return true;
 }
}