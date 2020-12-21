<template>
   <!-- ======= Header ======= -->
  <header id="header" class="header-tops">
 
    
    <div class="container">
        <vue-particles
    v-show="activo"
    color="#7B1FA2"
    :particleOpacity="0.9"
    :particlesNumber="80"
    shapeType="polygon"
    :particleSize="6"
    linesColor="#B6C71F"
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
      <h1><a href="index.html">{{ $t('name') }}</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
      <h2>{{ $t('role') }}</h2>
        <!-- <div>
            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </button>
        </div> -->

              <div class="social-links">
        <!-- <a v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)" class="active twitter">
            <flag :iso="entry.flag" v-bind:squared=false /> 

        </a> -->
            <button v-on:click="presionar" :class="activo ? 'btn btn-outline-success active': 'btn btn-outline-success'" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </button>

      </div>
      <nav class="nav-menu d-none d-lg-block inicio">
        
        <ul>
          <li  v-on:click="desactivar" class="active"><a href="#header">{{ $t('home') }}</a></li>
          <li><a v-on:click="presionar" href="#about">{{ $t('about') }}</a></li>
            <li><a  v-on:click="activar"  href="#cv">{{ $t('cv') }}</a></li>
          <li><a  v-on:click="activar"   href="#resume">{{ $t('resume') }}</a></li>
          <li><a  v-on:click="activar" href="#services">{{ $t('services') }}</a></li>
          <li><a  v-on:click="activar" href="#portfolio">{{ $t('portfolio') }}</a></li>
          <li><a  v-on:click="activar" href="#contact">{{ $t('contact') }}</a></li>
        </ul>



      </nav><!-- .nav-menu -->

      <div class="social-links">
        <a target="_blank" href="https://medium.com/@alemvangrieken" class="facebook"><i class="fab fa-medium"></i></a>
        <a target="_blank" href="https://www.instagram.com/datacampero" class="instagram"><i class="icofont-instagram"></i></a>
        <a target="_blank" href="https://github.com/datacampero" class="google-plus"><i class="fab fa-github"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/alejandro-marcano-van-grieken-814bb8104/" class="linkedin"><i class="icofont-linkedin"></i></a>
        <a target="_blank" href="https://twitter.com/datacampero" class="twitter"><i class="icofont-twitter"></i></a>

      </div>

    </div>
    
  </header><!-- End Header -->        
</template>



<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'PxHeader',


  data() {
    return {
        activo:false,
        activo2:true,
        press: false,

      languages: [{ flag: 'us', language: 'en', title: 'English' },
                  { flag: 'es', language: 'es', title: 'Español' }] 
    }
  },
  methods: {
    changeLocale(locale){
    i18n.locale = locale;  
    },
      presionar(){
    this.activo=!this.activo
     this.activo2=!this.activo
  },

    activar(){
      this.press=!this.activo
    },

    desactivar(){
      this.press=false 
    }



  },


  
}


</script>
