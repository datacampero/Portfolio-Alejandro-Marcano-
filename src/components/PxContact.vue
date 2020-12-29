<template>
      <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>{{ $t('contact') }}</h2>
        <p>{{ $t('contact_me') }}</p>
      </div>

      <div class="row mt-2">

        <div class="col-md-6 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-map"></i>
            <h3>{{ $t('my_adress') }}</h3>
            <p>{{ $t('location') }}</p>
          </div>
        </div>

        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-share-alt"></i>
            <h3>{{ $t('social_networks') }}</h3>
            <div class="social-links">
        <a target="_blank" href="https://medium.com/@alemvangrieken" class="facebook"><i class="fab fa-medium"></i></a>
        <a target="_blank" href="https://www.instagram.com/datacampero" class="instagram"><i class="icofont-instagram"></i></a>
        <a target="_blank" href="https://github.com/datacampero" class="google-plus"><i class="fab fa-github"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/alejandro-marcano-van-grieken-814bb8104/" class="linkedin"><i class="icofont-linkedin"></i></a>
        <a target="_blank" href="https://twitter.com/datacampero" class="twitter"><i class="icofont-twitter"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-envelope"></i>
            <h3>{{ $t('email_me') }}</h3>
            <p>{{ $t('email') }}</p>
          </div>
        </div>
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-phone-call"></i>
            <h3>{{ $t('text_me') }}</h3>
            <p>{{ $t('phone_ans') }}</p>  
          </div>
        </div>
      </div>

      <form  @submit.prevent="sendEmail"  class="php-email-form mt-4">
        <div class="form-row">
          <div class="col-md-6 form-group">
            <input required type="text" name="name" v-model="name" class="form-control" id="name" :placeholder=" $t('your_name')" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validate"></div>
          </div>
          <div class="col-md-6 form-group">
            <input required type="email" class="form-control" v-model="email" name="email" id="email" :placeholder="$t('your_email')" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validate"></div>
          </div>
        </div>
        <div class="form-group">
          <input required type="text" class="form-control" v-model="subject"  name="subject" id="subject" :placeholder="$t('subject')" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validate"></div>
        </div>
        <div class="form-group">
          <textarea required class="form-control" v-model="message" name="message" rows="5" data-rule="required" data-msg="Please write something for us" :placeholder="$t('your_message')"></textarea>
          <div class="validate"></div>
        </div>
        <div class="mb-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button v-if="isHidden" @click="toastTopEnd" type="submit" value="Send">{{ $t('send_message') }}</button></div>
      </form>

    </div>
  </section><!-- End Contact Section -->
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'PxContact',


    data(){
        return{
        name: '',
        message: '',
        email: '',
        subject: '',
        isHidden: true,

        }
    },
    methods: {

    toastTopEnd() {
      this.isHidden = !this.isHidden,
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        title: 'Mail',
        text: 'sent successfully',
      });
      

    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_0dn1kui', 'template_0mr4axj', e.target,
        'user_5hSlJUumxO8LbMUvuk38i', {
          name: this.name,
          email: this.email,
          message: this.message,
          subject: this.subject,
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
       this.subject = ''
    },

    }
}



</script>