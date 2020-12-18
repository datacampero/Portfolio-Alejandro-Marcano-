<template>
  <div id="app">
         
   <router-view/>
    <vue-particles
    color="#7B1FA2"
    :particleOpacity="0.9"
    :particlesNumber="120"
    shapeType="polygon"
    :particleSize="6"
    linesColor="#00acd6"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="100"
    :moveSpeed="6"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="repulse"
      >
      </vue-particles>
  </div>
</template>

<script>
//import PxAbout from './components/PxAbout'

export default {
  name: 'App',
  //components : {PxAbout},

}
</script>
