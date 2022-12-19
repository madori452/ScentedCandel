<template>
  <div style="z-index: 1500">
    <ToastContent v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import ToastContent from '@/components/ToastContent.vue'
export default {
  components: { ToastContent },
  data () {
    return {
      messages: []
    }
  },
  methods: {
    toastShow () {
      setTimeout(() => {
        this.messages.shift()
      }, 2000)
    },
    clearToast (index) {
      this.messages.splice(index, 1)
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>

<style lang="scss" scoped>
  .btn-close{
    color: #fff;
  }
</style>
