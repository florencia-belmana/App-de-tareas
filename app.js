let fs = require('fs') ;
/* const { parse, dirname } = require('path');  *//* esto se pone solo */
let path = require('path');
let archivoTareas = path.join(__dirname, 'tareas.json');

function leerTareas(){
    let tareas = fs.readFileSync(archivoTareas, 'utf-8');
    return JSON.parse(tareas);   
}

function listarTareas(){
    let tareas = leerTareas(); 
    tareas.forEach(function(tarea){
        console.log(tarea.titulo); 
       });
}

function listarTareasPendientes(){
    let tareas = leerTareas();

    let listarTareasPendientes = tareas.filter(function(tarea){
        return tarea.estado == 'pendiente';
    });

    listarTareasPendientes.forEach(function(tarea){
         console.log(tarea.titulo); 
       });

}

listarTareas();
console.log();
listarTareasPendientes();

//CREAR
/* let nuevaTarea = {
    "titulo": "Estudiar Boostraps",
    "descripcion": "",
    "estado": "lista"
   };

tareas.push(nuevaTarea);
console.log(tareas);

let tareasJson = JSON.stringify(tareas, null, ' '); //solo para dar formato
fs.writeFileSync(archivoTareas, tareasJson); */