<template>
  <CustomLoading :active="isLoading" />
  <div class="container-fluid d-flex align-items-center justify-content-center px-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <div class="content-area">
      <p class="en-font title text-center fs-3-lg fs-4-md mb-0">關於我們</p>
      <p class="content en-font  text-center">以瑞典當地自然環境為風格啟發，揀選天然有機原料，堅持只給最好的。</p>
    </div>
    <img src="@/assets/img/Article/About.png" class="d-lg-block d-none w-100" alt="banner">
    <img src="@/assets/img/Index/Carousel/03-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/img/Index/Carousel/03-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container mx-auto py-4">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-12 position-relative my-4 me-3"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600" v-for="item in allArticles" :key="item.id">
        <div class="row d-flex justify-content-center article">
          <div class="col-5 col-sm-4 px-0 overflow-hidden bg-white">
            <router-link :to="`/user/article/${ item.id }`"  style="height:100px">
              <div class="px-0 cover-img " :style="{ backgroundImage:'url(' +item.image+ ')'}" alt="cover"></div>
            </router-link>
          </div>
          <div class="col-6 col-sm-7 bg-white d-flex flex-column justify-content-center">
            <p class="h5 mt-4 en-font sub-title">{{ item.title }}</p>
            <p class="description text-900">{{ item.description }}</p>
            <router-link class="en-font h4 mask text-white text-left" :to="`/user/article/${ item.id }`">
              <button type="button" class="continue en-font h6">...繼續閱讀</button>
            </router-link>
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
      allArticles: '',
      isLoading: false

    }
  },
  inject: ['emitter'],
  methods: {
    getArticles () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.allArticles = res.data.articles
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
    this.getArticles()
  }
}
</script>

<style scoped lang="scss">
.title{
  font-size: $text_titile;
  @include phone{
    font-size: 20px;
  }
}
.content-area{
  position: absolute;
  margin-top: 50px;
  @include xl-screen{
    margin-top: 80px;
  }
}
.content{
  z-index: 2;
  font-size: 18px;
  text-align: center;
  @include pad{
    font-size: 16px;
    padding: 0 50px;
  }
  @include phone{
     padding: 0 10px;
  }
}
.article{
  position: relative;
  height: 250px;
  overflow: hidden;
  @include pad{
    height: 200px;
  }
}
p.sub-title{
  padding-left: 10px;
  @include phone{
    font-size: 14px;
  }
}
p.description{
  display: block;
  padding: 0 10px;
  line-height: 1em;
  letter-spacing: 0;
  overflow: hidden;
  @include pad{
    font-size: 12px;
    line-height: 1em;
  }
}
button.continue{
  width: auto;
  height: 30px;
  background-color: $primary;
  margin-left: 10px;
  border: 0px;
  color: #fff;
  @include lg-screen{
    font-size: 14px;
  }
  @include phone{
    font-size: 14px;
  }
}
.cover-img{
  background-size: cover;
  height: 250px;
  transition: 0.5s;
  cursor: pointer;
  background-position: 50% 0%;
  position: relative;
  top: 0px;
  @include pad{
    height: 200px;
  }
}
.cover-img:hover{
  scale: 1.2;
}
</style>
