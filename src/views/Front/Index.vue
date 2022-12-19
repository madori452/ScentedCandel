<template>
  <CustomLoading :active="isLoading" />
  <div class="container-fluid px-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <CarouselIndex></CarouselIndex>
  </div>
  <div class="container">
    <div class="row row-adj01">
      <div class="col-md-4 offset-md-1">
        <div class="content" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
          <h5 class="en-font fst-italic text-primary">- Home Ritual -</h5>
          <h3 class="fs-4-lg fs-5-md en-font sub-titel">創造居家儀式感</h3>
          <p class="content-p">一回到家，就想點起香氛蠟燭，看著溫暖搖曳的點點燭光，感受香氣緩緩擴散整個空間、被柔和香氛包圍。</p>
        </div>
      </div>
      <div class="col-md-5 offset-lg-1" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="900">
        <img class="img-fluid slide01" src="@/assets/img/Index/slide01.png" alt="slide01">
      </div>
    </div>
    <div class="row row-adj02">
      <div class="col-lg-5 col-xl-4 offset-xl-1 d-flex align-items-end order-lg-end">
        <div class="content" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
          <h5 class="en-font fst-italic text-primary">- Quiet & Peaceful -</h5>
          <h3 class="fs-4-lg en-font fs-5-md sub-titel">寧靜平和、靜思新生</h3>
          <p class="content-p">為生活空間奉上寧靜平和、靜思新生的力量，<br/>正可為現今焦慮的生活中注入一股安定的氛圍</p>
        </div>
      </div>
      <div class="col-lg-5 offset-lg-1 order-lg-first" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
        <img class="img-fluid slide02" src="@/assets/img/Index/slide02.png" alt="slide02">
      </div>
    </div>
  </div>
  <div class="container-fluid px-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <div class="value-content d-flex justify-content-center">
      <div class="value-text">
        <h3 class="fs-4-lg fs-5-md sub-titel en-font text-center">品牌理念</h3>
        <p class="text-center content-p">來自瑞典西部海岸的 Scented Candel，從北歐品味美學與生活風格孕育出溫柔保養之道。</p>
        <router-link to="../user/articles">
          <div class="mx-auto button-primary en-font">瞭解更多</div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container coupon-row" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <CouponIndex class="d-block mx-auto"></CouponIndex>
  </div>
</template>

<script>
import CarouselIndex from '@/components/front/CarouselIndex.vue'
import CouponIndex from '@/components/front/CouponIndex.vue'
export default {
  components: { CarouselIndex, CouponIndex },
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>

<style lang="scss">
img.slide01{
  height: 600px;
  display: block;
  margin-left: auto;
  @include lg-screen{
    margin-left:0px;
  }
  @include pad{
    height: 400px;
  }
}
img.slide02{
  height: 600px;
  display: block;
  @include lg-screen{
    margin-left:0px;
  }
  @include pad{
    height: 400px;
  }
}
h3, .value-content h5{
  font-size: $text_titile;
  color: $text_bk;
}
.row-adj01{
  padding: 200px 0 0 0;
  @include phone{
    padding: 100px 30px 0 30px;
  }
}
.row-adj02{
  margin-top: -200px;
  padding: 0 0 200px 0;
  @include pad{
    margin-top: 100px;
  }
  @include phone{
    margin-top: 50px;
    padding: 0px 30px 50px 30px ;
  }
}
.sub-titel{

  @include phone{
    font-size: 20px;
  }
}
.content-p{
  font-size: 16px;
}
.value-content{
  padding: 100px 0;
  background-image: url('../../assets/img/Index/value.png');
  background-size: cover;
  background-position: 50% 50%;
  @include phone{
    padding: 50px 20px;
  }
}
.value-text{
  background-color: #ffffff6e;
  padding: 50px 80px;
  @include phone{
    padding: 20px 10px;
  }
}
.button-primary{
  @include button-primary-border-index;
}
a{
  text-decoration: none;
}
.button-primary:hover{
  background-color: $primary;
  color: #fff;
  transition: 0.5s;
}
.coupon-row{
  padding: 100px 0;
}
</style>
