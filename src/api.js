const url = 'https://portafolio-bfd60-default-rtdb.firebaseio.com/proyectos.json';

function getProyectos() {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res)
}

function getProyecto(id) {
  return fetch(`https://portafolio-bfd60-default-rtdb.firebaseio.com/proyectos/${id}`)
    .then(res => res.json())
    .then(res => res)
}


export default {
    getProyectos,
    getProyecto
  }