<template>
 <div class="top-icon">
  <img src="../../assets/img/top.png" class="top" @click="backTop" alt="top">
 </div>
</template>

<script>
export default {
  methods: {
    scroll () {
      window.addEventListener('scroll', function () {
        const top = this.document.querySelector('img.top')
        const scorllPercent = this.scrollY
        if (scorllPercent > 100) {
          top.classList.add('show-top')
        } else {
          top.classList.remove('show-top')
        }
      })
    },
    backTop () {
      const elementBody = document.documentElement
      elementBody.scrollTop = 0
    }
  },
  created () {
    this.scroll()
  }
}
</script>

<style lang="scss">
.top{
  width: 50px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: 0.5s;
  z-index: 999999;
  opacity: 0;
}
.show-top{
  opacity: 1 ;
}
</style>
