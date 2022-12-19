<template>
  <div class="login d-flex align-items-center justify-content-center flex-column">
    <div class="container">
      <form class="row justify-content-center en-font" @submit.prevent="signIn">
        <div class="col-md-6">
          <img src="../../assets/img/Nav/logo-bk.svg" class="img-fluid d-block mx-auto" alt="logo">
          <h1 class="h3 mb-3 font-weight-normal en-font text-center mt-3">後台管理系統</h1>
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control rounded-0"
              placeholder="Email address"
              v-model="user.username"
              required
              autofocus
            />
          </div>
          <div class="mt-4">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control rounded-0"
              placeholder="Password"
              v-model="user.password"
              required
            />
          </div>
          <div class="text-end mt-4">
            <input class="rounded-0 w-100 btn btn-lg btn-primary btn-block text-white" type="submit" value="Login">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: { username: '', password: '' }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          // 如果驗證成功，跳轉到dashboard頁面
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `tracyToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard/prodcuts')
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: err.data.message
          })
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.login{
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/img/Admin/login.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>
