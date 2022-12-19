<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"  ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title en-font mt-4" id="offcanvasRightLabel">我的最愛收藏</h5>
      <button c type="button" class="btn-close h2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" v-if="favoriteList.length!==0">
      <div class="card card-list mt-3" v-for="item in favoriteList" :key="item.id">
        <div class="row">
          <div class="col-5 pe-0">
            <div class="bg-cover" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'80px' }"></div>
          </div>
          <div class="col-5 px-0">
            <p class="list-title">{{ item.title }}</p>
          </div>
          <div class="col-2 px-0">
            <span @click="removeItem(item)" class="ms-3">
              <i class="bi bi-x-square h3"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas-body" v-else>
      <p>目前還沒有收藏喔！</p>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
const storageMethods = {
  getLikeItem () {
    return JSON.parse(localStorage.getItem('MyFavorite')) || []
  },
  setItem (key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  }
}
export default {
  inject: ['emitter'],
  data () {
    return {
      bsOffcanvas: '',
      myFavorite: storageMethods.getLikeItem() || [],
      allProducts: [],
      filters: [],
      favoriteList: []
    }
  },

  methods: {
    // 打開畫布時取得的資料
    showCanvas () {
      this.bsOffcanvas.show()
      this.favoriteList = storageMethods.getLikeItem()
    },
    // 取的喜愛項目
    getFavorite () {
      this.favoriteList = storageMethods.getLikeItem()
    },
    // 移除喜愛項目
    removeItem (data) {
      this.myFavorite = storageMethods.getLikeItem() || []
      this.favoriteList.forEach((element, index) => {
        if (element.id === data.id) {
          this.favoriteList.splice(index, 1)
          storageMethods.setItem('MyFavorite', this.favoriteList)
          this.emitter.emit('favorite-qty', this.myFavorite)
          this.emitter.emit('remove-data', this.myFavorite)
          this.$swal({ icon: 'warning', title: '已從最愛中移除' })
          this.getFavorite()
        }
      })
    }
  },
  mounted () {
    this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasRight)
    this.getFavorite()
  }
}
</script>

<style lang="scss">
    .offcanvas-backdrop{
        background-color: #0000006b;
    }
    .cardBtn{
      margin-top: -15px;
    }
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
    .list-title{
      font-size: 14px;
      margin-top: 25px;
      margin-left: 8px;
    }
    .bi-x-square{
      color: $primary;
      cursor: pointer;
    }
</style>
