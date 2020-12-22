<template>
    <div>
   
  <!-- ======= About Section ======= -->
  <section id="about" class="about">


    <!-- ======= About Me ======= -->
    <div class="about-me container">

      <div class="section-title">
        <h2>{{ $t('about') }}</h2>
        <p>{{ $t('sub_about') }}</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/me.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{{ $t('career') }}</h3>
          <p class="font-italic">
                    {{ $t('description') }}
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont-rounded-right"></i> <strong>{{ $t('birthday') }}</strong> {{ $t('birthday_ans') }}</li>
                <li><i class="icofont-rounded-right"></i> <strong>{{ $t('website') }}</strong> {{ $t('website_ans') }}</li>
                <li><i class="icofont-rounded-right"></i> <strong>{{ $t('phone') }}</strong> {{ $t('phone_ans') }}</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont-rounded-right"></i> <strong>{{ $t('city') }}</strong> {{ $t('city_ans') }}</li>
                <li><i class="icofont-rounded-right"></i> <strong>{{ $t('age') }}</strong> {{ $t('age_ans') }}</li>
                <li><i class="icofont-rounded-right"></i> <strong>{{ $t('degree') }}</strong> {{ $t('degree_ans') }}</li>
               
              </ul>
            </div>
          </div>
          <p>
            <!-- {{ $t('hobbies') }} -->
          </p>
        </div>
      </div>

    </div><!-- End About Me -->

    <!-- ======= Counts ======= -->
    <div class="counts container">

      <div class="row">

        <div class="col-lg-3 col-md-6">
          <div class="count-box">
            <i class="fas fa-calendar-minus"></i>
            <span data-toggle="counter-up"> {{ $t('years_exp') }}</span>
            <p>{{ $t('years_exp_text') }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div class="count-box">
            <i class="icofont-document-folder"></i>
            <span data-toggle="counter-up">{{ $t('works_num') }}</span>
            <p>{{ $t('works_num_text') }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div class="count-box">
            <i class="fas fa-user-graduate"></i>
            <span data-toggle="counter-up">{{ $t('GPA_uni') }}</span>
            <p>{{ $t('GPA_text') }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div class="count-box">
            <i class="fas fa-percentage"></i>
            <span data-toggle="counter-up">{{ $t('percent') }}</span>
            <p>{{ $t('percent_text') }}</p>
          </div>
        </div>

      </div>

    </div><!-- End Counts -->

    <!-- ======= Skills  ======= -->
    <div class="skills container">

      <div class="section-title">
        <h2>{{ $t('skills') }}</h2>
      </div>

      <div class="row skills-content">

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill">Python <i class="val">95%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">AI (Tensorflow, Keras, Pytorch) <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">BI (Tableau, Power BI, Google Data Studio) <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

                    <div class="progress">
            <span class="skill">HTML <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Javascript <i class="val">30%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">35%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill">SCRUM <i class="val">95%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">SQL (PostgreSQL, MySQL, SQLServer) <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>


          <div class="progress">
            <span class="skill">Django / Flask <i class="val">70%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Flutter <i class="val">65%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>


          <div class="progress">
            <span class="skill">Vue <i class="val">45%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Angular <i class="val">30%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div><!-- End Skills -->

    <!-- ======= Interests ======= -->
    <div class="interests container">

      <div class="section-title">
        <h2>{{ $t('interests') }}</h2>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="icon-box">
            <i class="devicon-python-plain" style="color: #ffbb2c;"></i>
            <h3>{{ $t('ai') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>
            <h3>{{ $t('bd') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="devicon-html5-plain-wordmark" style="color: #e80368;"></i>
            <h3>{{ $t('web') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div class="icon-box">
            <i class="ri-bar-chart-box-line" style="color: #e361ff;"></i>
            <h3>{{ $t('analysis') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-django-line" style="color: #29cc61;"></i>
            <h3>{{ $t('iot') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-flutter-plain" style="color: #47aeff;"></i>
            <h3>{{ $t('mobile') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-google-plain" style="color: #ffff;"></i>
            <h3>{{ $t('google') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-amazonwebservices-original" style="color: #4233ff;"></i>
            <h3>{{ $t('aws') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-github-original colored" style="color: #b2904f;"></i>
            <h3>{{ $t('scrum') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-mongodb-plain colored" style="color: #29cc61;"></i>
            <h3>{{ $t('api') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="devicon-linux-plain colored" style="color: #ff5828;"></i>
            <h3>{{ $t('linux') }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="fas fa-square-root-alt" style="color: #b20969;"></i>
            <h3>{{ $t('math') }}</h3>
          </div>
        </div>
      </div>

    </div><!-- End Interests -->

    <!-- ======= Testimonials ======= -->
    <!-- <div class="testimonials container portfolio">

      <div class="section-title">
        <h2>Testimonials</h2>
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
    <!-- End Testimonials  -->


  </section><!-- End About Section -->

    <px-resume/>
    <px-curriculum/>
    <px-services/>
    <px-portafolio/>
    <px-contact/>

    
    </div>
</template>

<script>

import PxResume from './PxResume.vue';
import PxServices from './PxServices.vue';
import PxContact from './PxContact.vue';
import PxPortafolio from './PxPortafolio.vue';
import PxCurriculum from './PxCurriculum.vue';

export default {
  name: 'PxAbout',
  components: {
    PxResume,
    PxServices,
    PxContact,
    PxPortafolio,
    PxCurriculum
  },

  data(){
    return {
        

    }
  },

    methods: {

    },

    created(){

    }


  
}


</script>
