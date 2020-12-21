<template>
      <!-- ======= Resume Section ======= -->
  <section id="cv" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>{{ $t('cv') }}</h2>
        <p>{{ $t('check') }}</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">{{ $t('sumary') }}</h3>
          <div class="resume-item pb-0">
            <h4>{{ $t('name') }}</h4>
            <p><em>{{ $t('description') }}</em></p>
            <p>
            <ul>
              <li>{{ $t('location') }}</li>
              <li>{{ $t('email') }}</li>
            </ul>
            </p>
          </div>

          <h3 class="resume-title">{{ $t('education') }}</h3>
          <div class="resume-item">
            <h4>{{ $t('career') }}</h4>
            <h5>{{ $t('year_career') }}</h5>
            <p><em>{{ $t('Institute') }}</em></p>
            <p>
              <ul>
                  <li>{{ $t('education_point1') }}</li>
                  <li>{{ $t('education_point2') }}</li>
                  <li>{{ $t('education_point3') }}</li>
                  <li>{{ $t('education_point4') }}</li>
            </ul>
            </p>
          </div>
          <h3 class="resume-title">{{ $t('professor') }}</h3>
          <div class="resume-item">
            <h4>{{ $t('subject1') }}</h4>
            <h5>{{ $t('year_subject1') }}</h5>
            <p><em>{{ $t('Institute1') }}</em></p>
            <p>
              <ul>
                  <li>{{ $t('subject1_point1') }}</li>
                  <li>{{ $t('subject1_point2') }}</li>
                  <li>{{ $t('subject1_point3') }}</li>
            </ul>
            </p>
          </div>

          <div class="resume-item">
            <h4>{{ $t('subject2') }}</h4>
            <h5>{{ $t('year_subject2') }}</h5>
            <p><em>{{ $t('Institute2') }}</em></p>
            <p>
              <ul>
                  <li>{{ $t('subject2_point1') }}</li>
            </ul>
            </p>
          </div>
        </div>
        
        <div class="col-lg-6">
          <h3 class="resume-title">{{ $t('professional') }}</h3>
          <div class="resume-item">
            <h4>{{ $t('role1') }}</h4>
            <h5>{{ $t('year_role1') }}</h5>
            <p><em>{{ $t('Company1') }}</em></p>
            <p>
            <ul>
              <li>{{ $t('role1_point1') }}</li>
              <li>{{ $t('role1_point2') }}</li>
              <li>{{ $t('role1_point3') }}</li>
             
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>{{ $t('role2') }}</h4>
            <h5>{{ $t('year_role2') }}</h5>
            <p><em>{{ $t('Company2') }}</em></p>
            <p>
            <ul>
              <li>{{ $t('role2_point1') }}</li>
              <li>{{ $t('role2_point2') }}</li>
              <li>{{ $t('role2_point3') }}</li>
             
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>{{ $t('role3') }}</h4>
            <h5>{{ $t('year_role3') }}</h5>
            <p><em>{{ $t('Company3') }}</em></p>
            <p>
            <ul>
              <li>{{ $t('role3_point1') }}</li>
              <li>{{ $t('role3_point2') }}</li>
              <li>{{ $t('role3_point3') }}</li>
             
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>{{ $t('role4') }}</h4>
            <h5>{{ $t('year_role4') }}</h5>
            <p><em>{{ $t('Company4') }}</em></p>
            <p>
            <ul>
              <li>{{ $t('role4_point1') }}</li>
              <li>{{ $t('role4_point2') }}</li>
              <li>{{ $t('role4_point3') }}</li>
             
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>{{ $t('role5') }}</h4>
            <h5>{{ $t('year_role5') }}</h5>
            <p><em>{{ $t('Company5') }}</em></p>
            <p>
            <ul>
              <li>{{ $t('role5_point1') }}</li>
              <li>{{ $t('role5_point2') }}</li>
              <li>{{ $t('role5_point3') }}</li>
             
            </ul>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Resume Section -->

</template>


<script>

export default {
  name: 'PxCurriculum',


  data(){
    return {
        

    }
  },

    methods: {

    },


}


</script>