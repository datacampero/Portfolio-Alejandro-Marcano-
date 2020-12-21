<template>
<!-- ======= Services Section ======= -->
  <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>{{ $t('services') }}</h2>
        <p>{{ $t('my_services') }}</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="icon-box">
            <div class="icon"><i class="fas fa-chart-pie"></i></div>
            <h4><a >{{ $t('data') }}</a></h4>
            <p>{{ $t('data_def') }}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div class="icon-box">
            <div class="icon"><i class="devicon-android-plain"></i></div>
              <h4><a >{{ $t('mobile_2') }}</a></h4>
            <p>{{ $t('mobile_def') }}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div class="icon-box">
            <div class="icon"><i class="fas fa-chalkboard-teacher"></i></div>
             <h4><a >{{ $t('class') }}</a></h4>
            <p>{{ $t('class_def') }}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="devicon-chrome-plain"></i></div>
             <h4><a >{{ $t('web_dev') }}</a></h4>
            <p>{{ $t('web_dev_def') }}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="devicon-python-plain"></i></div>
              <h4><a >{{ $t('ai_2') }}</a></h4>
            <p>{{ $t('ai_def') }}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div class="icon-box">
            <div class="icon"><i class="devicon-nodejs-plain"></i></div>
              <h4><a >{{ $t('backend') }}</a></h4>
            <p>{{ $t('backend_def') }}</p>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Services Section -->
</template>

<script>
export default {
    name: 'PxServices',
}
</script>