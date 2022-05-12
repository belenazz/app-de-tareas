const fs = require('fs');

let archivoTareas = {
  archivo: './data/tareas.json',
  leerJSON: function () {
    return  JSON.parse(fs.readFileSync(this.archivo, 'utf-8'))
  },
  escribirJSON: function (arrayTareas){
     let tarea = JSON.stringify(arrayTareas);
     return fs.writeFileSync(this.archivo,tarea)
  },

  // Desafio 2.1 Escribir metodo, escribirJSON, para escribir archivo JSON
  // ----
  // 1. El metodo debe recibir un parametro, que será un array tareas
  // 2. Pasar array a String con JSON.stringify
  // 3. Utilizar fs.writeFileSync() y escribir sobre tareas.json
  
  guardarTarea: function (objetoTarea) {
    let tareasActuales = this.leerJSON();    
    tareasActuales.push(objetoTarea);
    return this.escribirJSON(tareasActuales);
    
  }, 

  leerPorEstado: function (estadoTarea) {
    let tareasActuales = this.leerJSON();
    return tareasActuales.filter(function (params) {
      return params.estado == estadoTarea
      
    })
    /* 

leerPorEstado: function (estadoTarea) {
    let tareasActuales = this.leerJSON();
    let tareasPorEstado = tareasActuales.filter(function (params) {
      return params.estado == estadoTarea
      
    })
    return tareasPorEstado
    
  } 

*/
    
    
  } 
  
  // Desafio 2.2 Escribir metodo, guardarTarea, recibe un objeto tarea.
  // -- 
  // 1. usar leerJSON para obtener tareas actuales
  // 2. Hacer push de la nueva tarea al array actual
  // 3. Guardar array actualizado en tareas.json usando “escribirJSON”
}

module.exports = archivoTareas;


// Desafio 3 Filtrar tareas por estado,crear "leerPorEstado", que reciba un estado como parametro
  // Obtener todas las tareas con this.leerJSON
  // Usar .filter para obtener las tareas con estado ingresado
  // Retornar nuevo array con tareas ya filtradas.

 

