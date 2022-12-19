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
    <div class="row my-5">
      <!-- 步驟 -->
      <div class="step-line mb-4">
        <ul class="col-12 d-flex ps-0 justify-content-center align-items-center en-font mx-auto">
          <li class="circle circle01 col-3">
            <p class="num d-block mx-auto" :class="{primaryStep:true}">1</p>
            <p class="step">確認訂單資訊</p>
          </li>
          <li class="circle circle01 col-3  offset-1">
            <p class="num d-block mx-auto">2</p>
            <p class="step">建立個人訂單</p>
          </li>
          <li class="circle circle01 col-3  offset-1">
            <p class="num d-block mx-auto">3</p>
            <p class="step">付款完成</p>
          </li>
        </ul>
      </div>
      <!-- 購物列表 -->
      <div class="row mx-auto" v-if="cart.carts">
          <!-- 購物車0-->
          <div class="col-lg-6 mx-auto text-center my-5 cart-none bg-white" v-if="cart.carts.length===0">
            <div class="go-shop mx-auto d-flex justify-content-center align-items-center flex-column">
              <h5 class="text-primary en-font">目前還沒有商品！快去選購吧</h5>
              <router-link to="../user/products">
                <button type="button" class="shop btn btn-primary py-2 px-5 text-white rounded-0">選擇商品</button>
              </router-link>
            </div>
          </div>
          <!-- 購物車列表 -->
          <div class="col-xl-5 cart-list-menu bg-white offset-xl-1" v-if="cart.carts.length>=1">
            <div class="px-1">
              <p class="h5 en-font mt-5">購物清單</p>
              <hr />
              <table class="table align-middle px-4">
                <thead>
                  <tr>
                    <th class="remove-item"></th>
                    <th class="title-item">品名</th>
                    <th class="qty-item">數量</th>
                    <th class="price-item text-end">單價</th>
                  </tr>
                </thead>
                <tbody>
                <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="px-0">
                      <button type="button" class="btn btn-outline-primary btn-sm btn-cancel"
                              :disabled="status.loadingItem === item.id"
                              @click="removeCartItem(item.id)">
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                    <td>
                      <span class="product_title">{{ item.product.title }}</span>
                      <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <button type="button" :disabled="item.qty===1" @click="reduceNum(item)"
                            class="btn btn-primary btn-sm rounded-0">
                            -
                        </button>
                        <span :disabled="item.id===status.loadingItem" class="qty_input border border-2 text-center">{{ item.qty }}</span>
                        <button type="button" @click="addNum(item)" class="btn btn-primary btn-sm rounded-0">
                            +
                        </button>

                      </div>
                    </td>
                    <td class="text-end">
                      <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                      <span class="product_price">{{ $filters.currency(item.final_total) }}</span>
                    </td>
                  </tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end price-total">{{ $filters.currency(cart.total) }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
                </tr>
                </tfoot>
              </table>
              <!-- 優惠卷 -->
              <div class="row w-100 m-0 coupon-code">
                <div class="col-12 d-flex justify-content-end">
                    <input type="text" class="form-control d-inline-block" v-model="coupon_code" placeholder="請輸入優惠碼">
                    <button class="btn btn-outline-primary coupon d-inline-block ms-2 col-4" type="button" @click="addCouponCode">
                        套用優惠碼
                    </button>
                </div>
              </div>
            </div>
          </div>
          <!-- 表格 -->
          <div class="form-table-info col-xl-5 px-0"  v-if="cart.carts.length>=1">
            <div class="bg-white">
              <div class="row">
                <Form class="col-md-12 d-flex justify-content-center flex-column form-order" @submit="createOrder"  v-slot="{ errors }">
                  <p class="h5 en-font mt-5">訂購人資料</p>
                  <hr />
                  <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email</label>
                    <Field id="email" name="email" type="email" class="form-control"
                              :class="{ 'is-invalid': errors['email'] }"
                              placeholder="請輸入 Email" rules="email|required"
                              v-model="form.user.email"></Field>
                    <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3">
                    <label for="name" class="form-label">姓名</label>
                    <Field id="name" name="姓名" type="text" class="form-control"
                              :class="{ 'is-invalid': errors['姓名'] }"
                              placeholder="請輸入姓名" rules="required"
                              v-model="form.user.name"></Field>
                    <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3">
                    <label for="tel" class="form-label">電話</label>
                    <Field id="tel" name="電話" type="tel" class="form-control"
                              :class="{ 'is-invalid': errors['電話'] }"
                              placeholder="請輸入電話" rules="required"
                              v-model="form.user.tel"></Field>
                    <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">地址</label>
                    <Field id="address" name="地址" type="text" class="form-control"
                              :class="{ 'is-invalid': errors['地址'] }"
                              placeholder="請輸入地址" rules="required"
                              v-model="form.user.address"></Field>
                    <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">留言</label>
                    <textarea name="" id="message" class="form-control" cols="30" rows="2"
                              v-model="form.message"></textarea>
                  </div>
                  <div class="text-end">
                    <input type="submit" class="btn btn-primary w-100 mb-5 py-2 text-white rounded-0" value="送出訂單">
                  </div>
                </Form>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      status: {
        loadingItem: '' // 對應品項id
      },
      isLoading: false,
      cart: {},
      coupon_code: ''
    }
  },

  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        this.isLoading = false
        this.getCart()
        this.status.loadingItem = ''
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        this.$httpMessageState(res, '加入優惠券')
        this.getCart()
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    },
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.status.loadingItem = id
      this.$http.delete(url).then((res) => {
        this.status.loadingItem = ''
        this.emitter.emit('update-qty')
        this.$httpMessageState(res, '刪除購物車品項')
        this.getCart()
        this.isLoading = false
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    },
    // 建立訂單
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          this.orderId = res.data.orderId
          this.$router.push({ path: `/checkout/${this.orderId}` })
          // this.$router.push(`/checkout/${this.orderId}`)
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
          this.isLoading = false
        })
    },
    addNum (item) {
      if (item.product_id === item.product.id) {
        item.qty += 1
        this.updateCart(item)
      }
    },
    // 減少數量按鈕
    reduceNum (item) {
      if (item.product_id === item.product.id) {
        item.qty -= 1
        this.updateCart(item)
      }
    }

  },
  created () {
    this.getCart()
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
    width: 298px;
    left: calc(50% - 149px);
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
.product_price,.price-total{
  @include phone{
    font-size: 14px;
  }
}
.primaryStep{
  background-color: $primary;
  animation: step 1.5s infinite alternate;
}

@keyframes step{
  0%{
    box-shadow: 2px 2px 8px 6px #8077442b;
  }
  100%{
    box-shadow: 2px 2px 8px 6px #80774454;
  }
}
.remove-item{
  width: 10%;
}
.title-item{
  width: 50%;
  @include phone{
    font-size: 14px;
  }
  @include phone-sm{
    width: 47%;
  }
}
.qty-item{
  width: 25%;
  @include phone{
    width: 100px;
    font-size: 14px;
  }
  @include phone{
    width: 26%;
  }
  @include phone-s{
    width: 47%;
  }
}
.price-item{
  width: 50px;
  @include phone{
    width: 72px;
    font-size: 14px;
  }
}
.text-success{
  @include phone{
    font-size: 13px;
  }
}
span.border.qty_input{
  width: 40px;
  font-size: 15px;
  @include phone{
    width: 30px;
    font-size: 14px;
    line-height: 26px;
  }
}
span.product_title{
  font-size: 16px;
  @include phone{
     font-size: 14px;
  }
}
.cart-list-menu{
  position: relative;
  z-index: 0;
  height: auto;
  margin-right: 20px;
}
.cart-none{
  padding: 100px 0;
}
.form-control{
  width: 200px;
  border-radius: 0px;
}
button.coupon{
  font-size: 16px;
  @include phone{
    font-size: 14px;
  }
}
.btn-next{
  @include button-primary-cart;
  width: 110px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
}

.btn-cancel{
  width: 30px;
  height: 30px;
}
.form-control{
  width: 100%;
  margin: auto;
}
.form-order{
  padding: 0px 30px;
  @include phone{
    padding: 0px 40px;
  }
}
.coupon-code{
  @include pad{
    padding-bottom: 40px;
  }
}
.form-table-info {
  @include pad{
    margin-top: 20px;
  }
}
</style>
