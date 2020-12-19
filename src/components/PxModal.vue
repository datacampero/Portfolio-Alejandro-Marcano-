<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ title }}</h3>
          <div>
            <slot name="body"></slot>
          </div>
          <footer>
            <button v-on:click="close">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'PxModal',
     props: ['title'],
  
  methods: {
    close () {
      this.$emit('close')
    }
  },
}
</script>