<template>
  <Navbar></Navbar>
  <div class="container-fluid px-5 pt-5 dashboard en-font">
    <router-view/>
    <ToastMessages></ToastMessages>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import emitter from '../methods/emitter'
import ToastMessages from '../components/ToastMessage.vue'
export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)tracyToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    }).catch(err => {
      this.$swal({
        icon: 'error',
        title: `${err.data.message}`
      })
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss">
html,body{
  height: 100%;
}
.dashboard{
  background-image: url('../assets/img/Admin/bg02.png');
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100vh;
  top:-20px;
  position: relative;
}
</style>
