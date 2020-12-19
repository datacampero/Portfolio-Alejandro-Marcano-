const url = 'https://portafolio-bfd60-default-rtdb.firebaseio.com/proyectos.json';

const url2 = 'https://portafolio-bfd60-default-rtdb.firebaseio.com/cursos.json';


function getProyectos() {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res)
}

function getCursos() {
  return fetch(`${url2}`)
    .then(res => res.json())
    .then(res => res)
}

function getProyecto(id) {
  return fetch(`https://portafolio-bfd60-default-rtdb.firebaseio.com/proyectos/${id}`+'.json')
    .then(res => res.json())
    .then(res => res)
}


export default {
    getProyectos,
    getCursos,
    getProyecto
  }