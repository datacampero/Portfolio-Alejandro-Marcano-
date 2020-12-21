<template>
  <div id="app">

    <px-header/>

   <router-view/>
  </div>
</template>

<script>
import PxHeader from './components/PxHeader'

export default {
  name: 'App',
  components : {PxHeader},
  data(){
    return {

    }
  }

}
</script>


<style scoped>
  .particles-js {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
