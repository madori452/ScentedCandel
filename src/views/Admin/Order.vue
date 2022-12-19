<template>
  <Loading :active="isLoading" />
  <table class="table pt-5">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody v-for="item in orders" :key="item.id">
      <tr>
        <td>{{$filters.date(item.create_at)}}</td>
        <td>{{item.user.email}}</td>
        <td>
          <li v-for="(product, i) in item.products" :key="i">
            {{ product.product.title }} &nbsp; 數量: {{ product.qty }} &nbsp; 單位: {{ product.product.unit }}
          </li>
        </td>
        <td>
          {{ Math.round(item.total) }}
        </td>
        <td>
          <li v-if="item.is_paid===true">是</li>
          <li v-else>否</li>
        </td>
        <td>
          <button @click="openModal(false,item)" type="button"  class="btn btn-outline-primary btn-sm">檢視</button>
          <button @click="openDelOrderModal(item)" type="button" class="btn btn-outline-danger btn-sm">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  <OrderModal ref="orderModal" :order="tempOrder" @update="updatePaid" ></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
</template>

<script>
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import OrderModal from '@/components/OrderModal.vue'
export default {
  data () {
    return {
      orders: [],
      tempOrder: {},
      isLoading: false,
      isNew: false,
      pagination: {}
    }
  },
  components: {
    DelModal,
    Pagination,
    OrderModal
  },

  inject: ['emitter'],
  methods: {

    // 取得資料
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.isLoading = true
      this.$http.get(api, this.orders).then((res) => {
        this.isLoading = false
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    },
    // 刪除視窗
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    // 刪除某筆訂單
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, '刪除訂單')
        const delComponent = this.$refs.delModal
        this.isLoading = false
        delComponent.hideModal()
        this.getOrders()
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
        this.isLoading = false
      })
    },
    // 開啟order Modal
    openModal (item01) {
      this.isNew = true
      this.tempOrder = { ...item01 }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    // 更改訂單付款狀態
    updatePaid (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      this.isLoading = true
      this.$http.put(url, { data: item }).then((res) => {
        this.$httpMessageState(res, '更改訂單付款狀態')
        const orderComponent = this.$refs.orderModal
        orderComponent.hideModal()
        this.isLoading = false
        this.getOrders()
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
    this.getOrders()
  }
}
</script>

<style scoped lang="scss">
li{
  list-style: none;
}
</style>
