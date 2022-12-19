<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from '../components/front/Navbar_front.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
