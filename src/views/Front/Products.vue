<template>
  <CustomLoading :active="isLoading" />
  <div class="container-fluid d-flex align-items-center justify-content-center px-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
    <p class="en-font title fs-3-lg fs-4-md">所有產品</p>
    <img src="@/assets/img/Products/banner.png" class="d-lg-block d-none w-100" alt="Carousel01">
    <img src="@/assets/img/Index/Carousel/01-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/img/Index/Carousel/01-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-3" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="900">
        <!-- 篩選列表 -->
          <div class="list-group mt-4 en-font" >
            <a :class="{'active':productClass===''}"  @click.prevent="allProduct()" href="#" class="list-group-item list-group-item-action" aria-current="true">
              所有產品
            </a>
            <a :class="{'active':item===productClass}" @click.prevent="changeProduct(item) " v-for="item in productFilter" :key="item.id" href="#" class="list-group-item list-group-item-action">
                {{ item }}
            </a>
          </div>

      </div>

      <div class="col-md-9 my-4" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="900">
          <!-- 產品資料 -->
          <div class="row">
            <div class="col-md-6 col-lg-4 px-md-2 px-4" v-for="item in filterProduct" :key="item.id">
              <div class="card rounded-0 mb-3">
                <div class="bg-image"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                  <router-link class="en-font h4 mask text-white text-center position-absolute" :to="`/user/product/${ item.id }`">
                    see more
                  </router-link>
                </div>
                <div class="card-body">
                  <router-link class="text-decoration-none" :to="`/user/product/${ item.id }`"><h5 class="card-title en-font text-hidden">{{ item.title }}</h5></router-link>
                  <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                  <div class="row">
                    <div class="col-5 pe-0">
                      <del class="h6 text-start lh-lg price-origin" v-if="item.price">NT {{ item.origin_price }} 元</del>
                    </div>
                    <div class="col-7">
                      <h4 class="text-end price">NT {{ item.price }} 元</h4>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button type="button" class="rounded-0 py-0 col-6 btn btn-outline-primary me-1"
                      @click="addFavorite(item)" >
                      <span v-if="JSON.stringify(myFavorite).includes(item.id)">
                        <i class="bi bi-heart-fill"></i>
                      </span>
                      <span v-else>
                        <i class="bi bi-heart"></i>
                      </span>
                    </button>
                    <button type="button" class="rounded-0 py-0 col-6 btn btn-cart btn-outline-primary ms-1" :class="{'disabled':status.loadingItem===item.id}" @click="addCart(item.id)" >
                      <i class="bi bi-cart3 p-0"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Pagination v-if="productClass ===''" class="my-5" :pages="pagination" :product-class="productClass" @emit-pages="getProductPage" ></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
const storageMethods = {
  getLikeItem () {
    return JSON.parse(localStorage.getItem('MyFavorite')) || []
  },
  setItem (key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  }
}
export default {
  data () {
    return {
      products: [],
      allProducts: [],
      pagination: {},
      pages: [],
      productFilter: [],
      productClass: '',
      status: {
        loadingItem: '' // 對應品項id
      },
      cart: {},
      coupon_code: '',
      orderId: '',
      myFavorite: storageMethods.getLikeItem() || []
    }
  },
  components: {
    Pagination
  },
  inject: ['emitter'],
  computed: {
    filterProduct () {
      return this.products.filter(item => item.category.match(this.productClass))
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.allProducts = res.data.products
          this.isLoading = false
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },

    getProductPage (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
          // 找出產品種類
          this.products.filter(item => {
            if (this.productFilter.indexOf(item.category) === -1) {
              this.productFilter.push(item.category)
            }
          })
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },
    allProduct () {
      this.getProductPage()
      this.productClass = ''
    },
    changeProduct (item) {
      this.getProductPage()
      this.productClass = item
    },

    // 取得收藏
    getFavorite () {
      this.myFavorite = storageMethods.getLikeItem() || []
    },
    // 加入收藏
    addFavorite (data) {
      this.myFavorite = storageMethods.getLikeItem() || []
      if (JSON.stringify(this.myFavorite).includes(data.id)) {
        this.myFavorite.forEach((item, index) => {
          if (item.id === data.id) {
            this.myFavorite.splice(index, 1)
          }
        })
        storageMethods.setItem('MyFavorite', this.myFavorite)
        this.$swal({ icon: 'warning', title: '已從最愛中移除' })
      } else {
        this.myFavorite.push(data)
        storageMethods.setItem('MyFavorite', this.myFavorite)
        this.myFavorite = storageMethods.getLikeItem()
        this.$swal({ icon: 'success', title: '儲存成功！' })
      }
      this.emitter.emit('favorite-qty')
    },

    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.status.loadingItem = id
      this.isLoading = true

      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          this.status.loadingItem = ''
          this.isLoading = false
          this.getCart()
          this.$httpMessageState(res, '已加入購物車')
          this.emitter.emit('update-qty')
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
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
        this.getCart()
        this.status.loadingItem = ''
        this.isLoading = false
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    }
  },
  created () {
    this.getCart()
    this.getProducts()
    this.getProductPage()
    this.getFavorite()
    this.emitter.emit('favorite-qty', this.myFavorite)
    this.emitter.on('remove-data', () => {
      this.getFavorite()
    })
  }

}
</script>

<style scoped lang="scss">
.title{
  position: absolute;
  z-index: 2;
  font-size: $text_titile;
  top: calc(50% - 220px);
  @mixin xl-screen{
    top:150px
  }
  @include pad{
    background-color: #ffffff82;
    padding: 10px;
  }
  @include phone{
    font-size: 20px;
  }
}
.list-group{
  border-radius: 0px;
  border: 2px solid #a49d738c;
}
.price-origin{
  @include xl-screen{
    font-size: 14px;
  }
}
.price{
  color: $primary;
  font-weight: 800;
  @include xl-screen{
    font-size: 18px;
  }
  @include pad{
    font-size: 14px;
  }
}
.card-title{
  font-size: 18px;
  @include pad{
    font-size: 14px;
  }
}
.text-hidden{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.btn-cart{
  background-color: $primary;
}
.bi-heart{
  color: $primary;
  font-size: 20px;
}

.btn:hover{
  background-color: #a49d73cf;
}
.btn:hover .bi-heart{
  color: #fff;
}
.bi-cart3{
  color: #fff;
  font-size: 20px;
}
del{
  color: $text_800;
}
.bg-image{
  position: relative;
  height: 250px;
  background-size: cover;
  background-position: center;
  @include pad{
    height: 300px;
  }
}
.card{
  @include pad{
    height: 400px;
  }
}
.mask{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color:rgba(0, 0, 0,0.5);
  line-height: 200px;
  opacity: 0;
  text-decoration: none;
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.mask:hover{
   opacity: 1;
}
</style>
