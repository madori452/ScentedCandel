<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-caption mx-auto">
      <h2 class="en-font title">Scented Candle</h2>
      <p class="en-font sub-title" >-發現生活中的美好-</p>
      <router-link to="../../user/products" >
        <button class="goShop en-font" type="button">開始選購</button>
      </router-link>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img src="@/assets/img/Index/Carousel/01.png" class="d-lg-block d-none w-100" alt="Carousel01">
        <img src="@/assets/img/Index/Carousel/01-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
        <img src="@/assets/img/Index/Carousel/01-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="@/assets/img/Index/Carousel/02.png" class="d-lg-block d-none w-100" alt="Carousel02">
        <img src="@/assets/img/Index/Carousel/02-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel02">
        <img src="@/assets/img/Index/Carousel/02-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel02">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="@/assets/img/Index/Carousel/03.png" class="d-lg-block d-none w-100" alt="Carousel03">
          <img src="@/assets/img/Index/Carousel/03-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel03">
        <img src="@/assets/img/Index/Carousel/03-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel03">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel{
  position: relative;
}
.carousel-caption{
  z-index: 2;
  padding: 40px 0;
  background-color: #ffffff80;
  width: 30%;
  @include pad{
    width: 60%;
  }
  @include phone{
    padding: 20px 0;
  }
}
.carousel-caption{
  bottom:12rem;
  @include xl-screen{
    bottom: 6rem;
  }
  @include lg-screen{
    bottom: 4rem;
  }
}
.carousel-caption h2{
  color: $text_bk;
  @include pad{
  }
}
.carousel-caption p{
  color: $text_bk;
  font-size: 18px;
}
h2.title{
  font-size: 36px;
  @include lg-screen{
    font-size: 30px;
  }
  @include phone{
    font-size: 24px;
  }
}
p.sub-title{
  font-size: 20px;
  @include lg-screen{
    font-size: 16px;
  }
  @include phone{
    font-size: 15px;
  }
}
button.goShop{
  width: 200px;
  height: 50px;
  margin-top: 5px;
  background-color: $primary;
  color: #fff;
  border: none;
  letter-spacing: 2px;
  transition: 0.5s;
  font-size: 18px;
  @include lg-screen{
    font-size: 16px;
    width: 180px;
    height: 40px;
  }
  @include phone{
    font-size: 14px;
    margin-top: 0px;
    width: 140px;
    height: 36px;
  }
}
button.goShop:hover{
  background-color: #403707;
}
</style>
