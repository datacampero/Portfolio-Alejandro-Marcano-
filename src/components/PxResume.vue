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
                <a data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                   </a>
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
  <carousel-3d :count="coursera.length" :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(c, i) in coursera" :index="i" :key="i">
      <figure>
   <div class="portfolio-item">
                 <div class="portfolio-wrap">

            <img :src="c.imagen">
            <div class="portfolio-info">
              <h4>{{c.nombre}}</h4>
              <p>{{c.plataforma}}</p>
              <div class="portfolio-links">
                <a data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                    </a>
            </div>
          </div>
        </div>
        </div>   
      </figure>
    </slide>
  </carousel-3d>

      <div class="section-title">
        <h2>Udemy</h2>
      </div>
  <carousel-3d :count="udemy.length" :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(c, i) in udemy" :index="i" :key="i">
      <figure>
   <div class="portfolio-item">
                 <div class="portfolio-wrap">

            <img :src="c.imagen">
            <div class="portfolio-info">
              <h4>{{c.nombre}}</h4>
              <p>{{c.plataforma}}</p>
              <div class="portfolio-links">
                <a data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                    </a>
            </div>
          </div>
        </div>
        </div>   
      </figure>
    </slide>
  </carousel-3d>




      <div class="section-title">
        <h2>365 Data Science</h2>
      </div>
  <carousel-3d :count="cursos365.length" :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(c, i) in cursos365" :index="i" :key="i">
      <figure>
   <div class="portfolio-item">
                 <div class="portfolio-wrap">

            <img :src="c.imagen">
            <div class="portfolio-info">
              <h4>{{c.nombre}}</h4>
              <p>{{c.plataforma}}</p>
              <div class="portfolio-links">
                <a data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                    </a>
            </div>
          </div>
        </div>
        </div>   
      </figure>
    </slide>
  </carousel-3d>



      <div class="section-title">
        <h2>{{ $t('others') }}</h2>
      </div>
  <carousel-3d :count="otros.length" :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(c, i) in otros" :index="i" :key="i">
      <figure>
   <div class="portfolio-item">
                 <div class="portfolio-wrap">

            <img :src="c.imagen">
            <div class="portfolio-info">
              <h4>{{c.nombre}}</h4>
              <p>{{c.plataforma}}</p>
              <div class="portfolio-links">
                <a  data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details">
                    </a>
            </div>
          </div>
        </div>
        </div>   
      </figure>
    </slide>
  </carousel-3d>

  </div>






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
        coursera: [],
        udemy: [],
        cursos365: [],
        otros: []

        }
    },

    methods: {
        getCursos(){
        api.getCursos().then(courses => (this.courses = courses))
        .finally(()=> this.isLoading=false)

        Promise.all([
          api.getCursos(),
            api.getCoursera(),
            api.getUdemy(),
            api.get365(),
            api.getOtros(),

          ])
          .then(([courses, coursera, udemy, cursos365, otros])=>{
              this.courses = courses;
              this.coursera = coursera;
              this.udemy = udemy;
              this.cursos365 = cursos365;
              this.otros = otros;
          })
          
        }

        
    },

    created(){

    this.getCursos()

    }



}
</script>