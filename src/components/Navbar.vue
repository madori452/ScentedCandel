<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark en-font">
  <div class="container-fluid px-5">
    <div class="row">
      <a class="navbar-brand me-5" href="#">
        <img src="../assets/img/Nav/logo-wh.svg" alt="logo" class="img-gluid" style="width:200px">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="../dashboard/prodcuts" class="nav-link " aria-current="page">產品頁面</router-link>
          <router-link to="../dashboard/order" class="nav-link " aria-current="page" href="#">訂單管理</router-link>
          <router-link to="../dashboard/article" class="nav-link " aria-current="page" href="#">文章管理</router-link>
          <router-link to="../dashboard/coupon" class="nav-link " aria-current="page" href="#">優惠卷</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link to="../user/index" class="nav-link pt-3" aria-current="page">回到前台</router-link>
          <a class="nav-link mt-1"  @click.prevent="Logout"><i class="bi bi-box-arrow-right" style="fontSize:24px"></i></a>
        </div>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  methods: {
    Logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          this.$router.push('/login')
        })
    }
  }

}
</script>

<style scoped lang="scss">
  .navbar{
    z-index: 9999;
  }
  .bi-box-arrow-right{
    cursor: pointer;
  }
  .navbar-toggler{
    width: 60px;
    position: absolute;
    right: 20px;
  }
  .navbar-brand{
    width: 200px;
  }
</style>
