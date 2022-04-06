let fs = require('fs') ;
/* const { parse, dirname } = require('path');  *//* esto se pone solo */
let path = require('path');
/* let archivoTareas = path.join(__dirname, 'tareas.json'); */


//LISTAR
let tareas = fs.readFileSync(path.join(__dirname, 'tareas.json'), 'utf-8');
    tareas = JSON.parse(tareas);   

 tareas.forEach(function(tarea){
 console.log(tarea.titulo); 
});

//CREAR

let nuevaTarea = {
    "titulo": "Estudiar Boostraps 5",
    "descripcion": "",
    "estado": "lista"
   }