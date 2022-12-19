<template>
  <div class="toast toast-msg toast-container position-fixed p-3 top-5 end-0 " style="z-index: 1500" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <button type="button" class="btn-close mb-0  ms-auto d-block" data-bs-dismiss="toast" aria-label="Close"></button>
    <div class="d-flex flex-column justify-content-center">
      <div class="toast-header bg-transparent border-0 mx-auto">
        <i class="bi bi-check-circle-fill d-inline-block" :class="`text-${msg.style}`"></i>
        <div class="me-auto toast-header bg-transparent border-0 w-100">{{ msg.title }}</div>
      </div>
      <div class="row text-muted mx-auto" v-if="msg.content">
          {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  name: 'Toast',
  props: [
    'msg'
  ],
  mounted () {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 2000
    })
    toast.show()
  }
}
</script>

<style lang="scss" scoped>
  .toast-msg{
    width: 300px;
    height: auto;
    position: absolute;
    left: calc(50% - 150px);
    bottom: 50%;
    background-color: #fff;
    border: 0px;
  }
  .bi-check-circle-fill{
    font-size: 24px;
  }
  .toast-msg,.toast-header{
    font-size: 16px;
  }
</style>
