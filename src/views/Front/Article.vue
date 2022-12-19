<template>
  <CustomLoading :active="isLoading" />
  <div class="container-fluid d-flex align-items-center justify-content-center px-0">
    <div class="content-area">
      <p class="en-font title text-center fs-3-lg fs-4-md mb-0">關於我們</p>
      <p class="content en-font  text-center " >以瑞典當地自然環境為風格啟發，揀選天然有機原料，堅持只給最好的。</p>
    </div>
    <img src="@/assets/img/Article/About.png" class="d-lg-block d-none w-100" alt="banner" >
    <img src="@/assets/img/Index/Carousel/03-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/img/Index/Carousel/03-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container mx-auto py-4 mt-4">
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb">
        <li class="breadcrumb-item ">
          <router-link to="/user/articles" class="text-black-50 text-decoration-none">
            所有文章
          </router-link>
        </li>
        <li class="breadcrumb-item active text-black-50 fw-bolder" aria-current="page">{{ article.title }}</li>
      </ol>
    </nav>
    <div class="row pb-5">
      <div class="col-lg-6">
        <img :src="article.image" alt="product_pic" class="img-fluid">
      </div>
      <div class="col-lg-6 all-content">
        <p class="tag en-font">{{ article.tag }}</p>
        <p class="fst-italic en-font">Author : {{ article.author }}</p>
        <p class="h5 mb-2 en-font article_title">{{ article.title }}</p>
        <p class="article_content text-900">{{ article.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: '',
      id: '',
      isLoading: false

    }
  },

  inject: ['emitter'],
  methods: {
    getArticle (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${id}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.article = res.data.article
        }
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
    this.id = this.$route.params.articleId
    this.getArticle(this.id)
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
.article_title{
  @include pad{
    font-size: 18px;
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
.tag{
  background-color: $primary;
  color: #fff;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.breadcrumb{
  @include pad{
    font-size: 16px;
  }
}
.all-content{
  @include pad{
    margin-top: 20px;
  }
}
.article_content{
  line-height: 26px;
  @include pad{
    font-size: 16px;
    line-height: 32px;
  }
}
</style>
