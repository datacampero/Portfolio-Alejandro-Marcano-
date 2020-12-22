const url = 'https://portafolio-bfd60-default-rtdb.firebaseio.com/proyectos.json';

const url2 = 'https://portafolio-bfd60-default-rtdb.firebaseio.com';



function getProyectos() {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res)
}

function getCursos() {
  return fetch(`${url2}/cursos.json`)
    .then(res => res.json())
    .then(res => res)
}

function getCoursera() {
  return fetch('https://portafolio-bfd60-default-rtdb.firebaseio.com/coursera.json')
    .then(res => res.json())
    .then(res => res)
}

function get365() {
  return fetch('https://portafolio-bfd60-default-rtdb.firebaseio.com/365.json')
    .then(res => res.json())
    .then(res => res)
}

function getOtros() {
  return fetch('https://portafolio-bfd60-default-rtdb.firebaseio.com/otros.json')
    .then(res => res.json())
    .then(res => res)
}

function getUdemy() {
  return fetch('https://portafolio-bfd60-default-rtdb.firebaseio.com/udemy.json')
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
  getCoursera,
  getUdemy,
  get365,
  getOtros,
  getProyecto
  }