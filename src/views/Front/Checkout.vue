<template>
  <CustomLoading :active="isLoading" />
  <!-- Banner -->
  <div class="container-fluid d-flex align-items-center justify-content-center px-0">
    <h4 class="en-font-title en-font">CART</h4>
    <img src="@/assets/img/Cart/banner-cart.png" class="d-lg-block d-none w-100" alt="banner">
    <img src="@/assets/img/Cart/cart-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/img/Cart/cart-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <!-- 內容 -->
  <div class="container">
    <div class="row my-5 d-flex justify-content-center">
      <div class="step-line mb-4">
        <ul class="col-12 d-flex ps-0 justify-content-center align-items-center en-font mx-auto">
          <li class="circle circle01 col-3">
            <p class="num d-block mx-auto" :class="{primaryStep:true}">1</p>
            <p class="step">確認訂單資訊</p>
          </li>
          <li class="circle circle01 col-3 offset-1">
            <p class="num d-block mx-auto" :class="{primaryStep:true}">2</p>
            <p class="step">建立個人訂單</p>
          </li>
          <li class="circle circle01 col-3 offset-1">
            <p class="num d-block mx-auto" :class="{primaryStep: order.is_paid }">3</p>
            <p class="step">付款完成</p>
          </li>
        </ul>
      </div>
      <div class="bg-white col-xl-7 row justify-content-center">
        <div  v-if="order.is_paid === true" class="payFinish d-flex flex-column align-items-center justify-content-center">
          <p class="h5 en-font">訂單成立，感謝您的購買！</p>
          <div class="text-center">
            <router-link to="../../user/products">
              <input value="再去逛逛" type="submit" class="btn btn-primary px-4 text-white en-font rounded-0">
            </router-link>
          </div>
        </div>
        <form class="py-5 px-2" @submit.prevent="payOrder">
          <p class="en-font h4">訂單資訊</p>
          <hr />
          <table class="table align-middle mt-3 mb-2 text-900">
            <tbody>
              <tr>
                <td>訂單編號</td>
                <td>{{ orderId }}</td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>建立日期</td>
                <td>{{ $filters.date(create_at) }}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table class="table align-middle mt-5 text-900">
            <thead>
              <th></th>
              <th class="ps-3">品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
            <tr v-for="item in order.products" :key="item.id" style="height:100px">
              <td style="width: 100px; height:60px; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${item.product.imageUrl})`}"></td>
              <td class="ps-3">{{ item.product.title }}</td>
              <td>{{item.qty}} / {{ item.product.unit }}</td>
              <td class="text-end">{{ Math.round(item.final_total) }}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ Math.round(order.total) }}</td>
            </tr>
            </tfoot>
          </table>
          <table class="table text-900">
            <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="order.is_paid === false">尚未付款</span>
                <span class="text-success" v-if="order.is_paid === true">付款完成</span>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="text-center" v-if="order.is_paid === false">
            <input value="確認付款去" type="submit" class="btn btn-primary px-4 text-white en-font rounded-0">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false,
      is_paid: false,
      create_at: ''
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order
          this.create_at = res.data.order.create_at
          this.emitter.emit('update-qty')
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getOrder()
          this.is_paid = true
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>

<style lang="scss">
h4.en-font-title{
  position: absolute;
  z-index: 2;
  color: #fff;
  font-size: $text_titile;
}
.step,.step-line {
  position: relative;
}

.step-line:after{
  display: block;
  content: '';
  width: 351px;
  height: 2px;
  position: absolute;
  left: calc(50% - 182px);
  top: 15px;
  z-index: 0;
  background-color: #ddd;
  @include pad{
    width: 340px;
    left: calc(50% - 158px);
  }
  @include phone{
    width: 263px;
    left: calc(50% - 130px);
  }
}
.step-line ul{
  width: 500px;
  @include phone{
    width: 100%;
  }
}
p.step{
  @include phone{
    font-size: 14px;
  }
}
.step-line ul li{
  list-style: none;
}
.step-line .step{
  text-align: center;
}
.num{
  z-index: 1;
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  color: #fff;
  line-height: 30px;
  border-radius: 50%;
  font-size: 20px;
  background-color: #aaa;
}
.primaryStep{
  background-color: $primary;
  animation: step 1.5s infinite alternate;
}

.payFinish{
  margin-top: 20px;
  width: 100%;
  height: 150px;
  background-image: url('../../assets/img/Products/banner.png');
  background-size: cover;
  background-position: 50% 50%;
}
</style>
