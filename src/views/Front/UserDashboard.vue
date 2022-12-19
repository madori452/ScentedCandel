<template>
  <NavbarFront></NavbarFront>
  <div class="container-fluid px-0">
      <router-view/>
      <ToastMessages></ToastMessages>
  </div>
  <FooterFront></FooterFront>
</template>

<script>
import NavbarFront from '@/components/front/NavbarFront.vue'
import FooterFront from '@/components/front/FooterFront.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessage.vue'
export default {
  components: {
    ToastMessages,
    NavbarFront,
    FooterFront
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
