<template>
     <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">

      <div class="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>





      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>




<div class="row portfolio-container">


    

        <div v-for="(b, i) in assets" :key="`tipo2-${i}`" :class="`col-lg-4 col-md-6 portfolio-item filter-${b.tipo}`">
          <div class="portfolio-wrap">
            <img :src="b.imagen" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{b.titulo}}</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a  @click="irProyecto(b.id)" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              
              </div>
            </div>
          </div>
        </div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

        <div v-for="(b, i) in assets" :key="`tipo1-${i}`" :class="`col-lg-4 col-md-6 portfolio-item filter-${b.tipo}`">
          <div class="portfolio-wrap">
            <img :src="b.imagen" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{b.titulo}}</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(b, i) in assets" :key="`tipo3-${i}`" :class="`col-lg-4 col-md-6 portfolio-item filter-${b.tipo}`">
          <div class="portfolio-wrap">
            <img :src="b.imagen" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{b.titulo}}</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>




      </div>

    </div>
  </section><!-- End Portfolio Section --> 

</template>

<script>
import api from '@/api'


export default {
  name: 'PxPortafolio',
  components: {

  },

  data() {
    return {
      title: 'Titulo del modal',
     isLoading:false,
     activo:true,
     activo2:false,
      assets: [],

    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    },

    irProyecto(id){
          this.$router.push({name:'project-detail', params: {id} })
      },


    // changeLocale(locale){
    // i18n.locale = locale;  
    // },
      presionar(){
    this.activo=!this.activo
     this.activo2=!this.activo
  },


  },


  created() {
     this.isLoading=true
    api.getProyectos().then(assets => (this.assets = assets))
    .finally(()=> this.isLoading=false)

    // api.getCursos().then(courses => (this.courses = courses))
    // .finally(()=> this.isLoading=false)

  }

  
}


</script>