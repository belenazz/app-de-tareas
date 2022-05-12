

// console.log(tareasJSON)
// console.log('------------------');
// console.log(JSON.parse(tareasJSON))
// console.log('------------------');

let archivoTareas = require('./funcionesDeTareas')
let tareas = archivoTareas.leerJSON()



// 1. Refactorizar, cambiando for con forEach
// tener encuenta forEach recibe como segundo parametro el index.
let listarTareas2 = () => {
  tareas.forEach (function(valor, index){
    console.log((index+1)+ ".- " +valor.titulo )
  })
  /*for (let i = 0; i < tareas.length; i++) {
    let texto = (i+1) + ".- " + tareas[i].titulo;
    console.log(texto)
  }*/
}


let crearTareas = () => {
  let nuevoArrayTarea= { titulo: process.argv[3],
     estado: "pendiente"};
     return archivoTareas.guardarTarea(nuevoArrayTarea) 

} 

let listarNoTerminadas = param => {
  for (let i = 0; i < param.length; i++) {
    const tarea = param[i];
    if(tarea.estado !== 'terminada') {
      let texto = (i+1) + ".- " + param[i].titulo;
      console.log(texto)
    }
  }
}
let filtrarPorEstado = estadoTarea =>{
    let estado= estadoTarea
    let tareasFiltradas = archivoTareas.leerPorEstado(estadoTarea)
    tareasFiltradas.forEach(function (params) {
      console.log(params)
      
    })
}


// Desafio 3.5a crear Funcion “filtrarPorEstado”
// Guardar estado, "pendiente", en una variable
// La varable estado se le pasa como parametro a la funcion leerPorEstado
// Guardar el array resultante de leerPorEstado en una variable
// mostrar en consola los elemtos del array con forEach

// console.log(listarTareas());
// console.log('-----');
// listarTareas2()
let accion = process.argv[2];

switch (accion) {
  case "listar":
    listarTareas2();
    break;
  case "pendiente":
    listarNoTerminadas(tareas);
    break;
   case "crear" : crearTareas();
  break;
  // Desafio 2.3. Crear nuevo case "crear"
  // $ node app.js crear "Nueva tarea"
  // process.argv[3] = "Nueva tarea"
  // Crear variable tipo objeto 
  // {
  //   "titulo": "Nueva tarea",
  //   "estado": "pendiente"
  // }
  // Usar el metodo guardarTarea  de archivoTareas
case "filtrar" :
  filtrarPorEstado(process.argv[3]);
  break;
  // Desafio 3.5 Crear nuevo case "filtrar"
  // $ node app.js filtrar pendiente
  // llamar funcion “filtrarPorEstado” y pasar como parametor el estado
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
      console.log("No entiendo qué quieres hacer.");
    break;
}

//console.log(archivoTareas.leerPorEstado("progreso"))