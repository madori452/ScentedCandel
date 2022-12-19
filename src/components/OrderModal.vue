<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="mb-3 col-md-6" v-if="tempOrder.user">
              <h5>用戶資料</h5>
              <tr>
                <th for="title">姓名</th>
                <td>{{ tempOrder.user.name }}</td>
              </tr>
              <tr>
                <th for="title">Email</th>
                <td>{{ tempOrder.user.email }}</td>
              </tr>
              <tr>
                <th for="title">電話</th>
                <td>{{ tempOrder.user.tel }}</td>
              </tr>
              <tr>
                <th for="title">地址</th>
                <td>{{ tempOrder.user.address }}</td>
              </tr>
            </div>
            <div class="col-md-6">
              <h5>訂單細節</h5>
              <tr>
                <th style="width: 100px">訂單編號</th>
                <td>{{ tempOrder.id }}</td>
              </tr>
              <tr>
                <th>下單時間</th>
                <td>{{ $filters.date(tempOrder.create_at)}}</td>
              </tr>
              <tr>
                <th>付款時間</th>
                <td>
                  <span v-if="tempOrder.paid_date">
                    {{ $filters.date(tempOrder.paid_date) }}
                  </span>
                  <span v-else>時間不正確</span>
                </td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                  <span v-else class="text-muted">尚未付款</span>
                </td>
              </tr>
              <tr>
                <th>總金額</th>
                <td>
                  {{ $filters.currency(tempOrder.total) }}
                </td>
              </tr>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="update(tempOrder)">
            修改訂單狀態
          </button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    order: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return { tempOrder: {} }
  },
  emits: ['update'],
  mixins: [modalMixin],
  inject: ['emitter'],
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  methods: {
    update (tempOrder) {
      this.$emit('update', tempOrder)
    }
  }
}
</script>
