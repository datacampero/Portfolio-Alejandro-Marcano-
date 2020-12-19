<template>
   <!-- ======= Header ======= -->
  <header id="header" class="header-tops">
    <div class="container">

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
          <li class="active"><a href="#header">{{ $t('home') }}</a></li>
          <li><a href="#about">{{ $t('about') }}</a></li>
            <li><a  href="#cv">{{ $t('cv') }}</a></li>
          <li><a   href="#resume">{{ $t('resume') }}</a></li>
          <li><a href="#services">{{ $t('services') }}</a></li>
          <li><a href="#portfolio">{{ $t('portfolio') }}</a></li>
          <li><a href="#contact">{{ $t('contact') }}</a></li>
        </ul>



      </nav><!-- .nav-menu -->

      <div class="social-links">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="google-plus"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
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
        activo:true,
        activo2:true,

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


  },


  
}


</script>
