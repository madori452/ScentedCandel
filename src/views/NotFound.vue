<template>
  <div class="bg-light text-center d-flex flex-column justify-content-center align-items-center vh-100">
    <h1 class="display-1 ff-special text-primary mb-5">404</h1>
    <h2 class="ff-special text-primary mb-5">Page not found</h2>
    五秒後會自動跳轉回商店首頁唷
  </div>
</template>

<script>
export default {
  name: '404 Page',
  mounted () {
    setTimeout(() => {
      this.$router.push('/')
    }, 5000)
  }
}
</script>
