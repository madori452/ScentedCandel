<template>
  <Loading :active="isLoading" />
  <button type="button" class="btn btn-primary px-5 rounded-0 text-white mt-2" @click="openCouponModal(true)">
    建立新的優惠券
  </button>
  <table class="table mt-4 container-fluid">
    <thead>
    <tr>
      <th>優惠碼</th>
      <th>折扣百分比</th>
      <th>到期日</th>
      <th>是否啟用</th>
      <th class="text-center">編輯</th>
    </tr>
    </thead>
    <tbody v-for="(item, key) in coupons" :key="key">
      <tr>
      <td>{{ item.code }}</td>
      <td>{{ item.percent }}%</td>
      <td>{{ $filters.date(item.due_date) }}</td>
      <td>
        <span class="text-success" v-if="item.is_enabled==1">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td class="d-flex justify-content-center">
        <div class="btn-group">
          <button @click="openCouponModal(false, item)" type="button" class="btn btn-outline-primary btn-sm">編輯</button>
          <button @click="openDelCouponModal(item)" type="button" class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
      </tr>
    </tbody>
  </table>
  <CouponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon"></CouponModal>
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  components: {
    CouponModal,
    DelModal
  },

  inject: ['emitter'],
  methods: {
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        // 新增優惠卷
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        // 編輯優惠卷
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getCoupons () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.isLoading = true
      this.$http.get(api, this.tempProduct).then((res) => {
        this.isLoading = false
        this.coupons = res.data.coupons
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon }).then((res) => {
          this.$httpMessageState(res, '新增優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: err.data.message
          })
          this.isLoading = false
        })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon }).then((res) => {
          this.$httpMessageState(res, '編輯優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: err.data.message
          })
          this.isLoading = false
        })
      }
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '刪除優惠券')
        const delComponent = this.$refs.delModal
        this.isLoading = false
        delComponent.hideModal()
        this.getCoupons()
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
    this.getCoupons()
  }
}
</script>
