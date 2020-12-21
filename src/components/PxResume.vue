<template>




    

    
  <!-- ======= Resume New Section ======= -->
  <section id="resume" class="resume">

    <!-- ======= About Me ======= -->
    <div class="about-me container">

      <div class="section-title">
        <h2>{{ $t('courses') }}</h2>
        <p>{{ $t('my_courses') }}</p>
      </div>




<div class="testimonials container portfolio">
        <div class="section-title">
        <h2>Platzi</h2>
      </div>
  <carousel-3d :count="courses.length" :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(c, i) in courses" :index="i" :key="i">
      <figure>
   <div class="portfolio-item">
                 <div class="portfolio-wrap">

            <img :src="c.imagen">
            <div class="portfolio-info">
              <h4>{{c.nombre}}</h4>
              <p>{{c.plataforma}}</p>
              <div class="portfolio-links">
                <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                    <i class="bx bx-link"><h5>Ver Credencial</h5></i></a>
            </div>
          </div>
        </div>
        </div>   
      </figure>
    </slide>
  </carousel-3d>



      <div class="section-title">
        <h2>Coursera</h2>
      </div>
  <carousel-3d :count="courses.length" :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(c, i) in courses" :index="i" :key="i">
      <figure>
   <div class="portfolio-item">
                 <div class="portfolio-wrap">

            <img :src="c.imagen">
            <div class="portfolio-info">
              <h4>{{c.nombre}}</h4>
              <p>{{c.plataforma}}</p>
              <div class="portfolio-links">
                <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                    <i class="bx bx-link"><h5>Ver Credencial</h5></i></a>
            </div>
          </div>
        </div>
        </div>   
      </figure>
    </slide>
  </carousel-3d>



  </div>


    <!-- ======= Testimonials ======= -->
    <!-- <div class="testimonials container portfolio">

      <div class="section-title">
        <h2>Platzi</h2>
      </div>

      <div class="owl-carousel testimonials-carousel">
        <div class="col-lg-11 portfolio-item">
          <div class="portfolio-wrap">
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-bfd60.appspot.com/o/diploma-data-studio_page-0001.jpg?alt=media&token=1c924fc6-9218-4c73-b09e-4311ca766d8d" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-11 portfolio-item">
          <div class="portfolio-wrap">
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-bfd60.appspot.com/o/diploma-data-studio_page-0001.jpg?alt=media&token=1c924fc6-9218-4c73-b09e-4311ca766d8d" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>


      </div>

      

    </div> -->



      </div>
      </section>

</template>

<script>
import api from '@/api' 
import { Carousel3d, Slide } from 'vue-carousel-3d';


export default {
  name: 'PxResumen',
  components: {
    Carousel3d,
    Slide,
  },

     data(){
        return{
        courses: [],

        }
    },

    methods: {
        getCursos(){
        api.getCursos().then(courses => (this.courses = courses))
        .finally(()=> this.isLoading=false)
        }
    },

    created(){

    this.getCursos()

    }



}
</script>