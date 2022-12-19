<template>
  <div class="container-fluid d-flex align-items-center justify-content-center px-0">
    <p class="en-font title fs-3-lg fs-4-md mb-0">QA</p>
    <img src="@/assets/img/QA/QA.png" class="d-lg-block d-none w-100" alt="banner">
    <img src="@/assets/img/QA/QA-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/img/QA/QA-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container mx-auto py-4 mt-4">
    <div class="section">
      <p class="fs-6 fw-bold mb-1">使用蠟燭需注意什麼事情？</p>
      <p class="fs-6 text-900">保持空氣流通，並且避免讓小孩及寵物單獨留在使用蠟燭的空間。</p>
    </div>
    <div class="section mt-4">
      <p class="fs-6 fw-bold mb-1">蠟燭該如何保存？</p>
      <p class="fs-6 text-900">置放於陰涼乾燥處。</p>
    </div>
    <div class="section mt-4">
      <p class="fs-6 fw-bold mb-1">為什麼蠟燭會收縮、裂開、冒汗、凹凸不平？</p>
      <p class="fs-6 text-900">屬天然大豆蠟正常現象，燃燒至出現蠟池並等待凝固，即可呈現平滑狀態。</p>
    </div>
    <div class="section mt-4">
      <p class="fs-6 fw-bold mb-1">裸裝蠟燭有白霧感、暈色，復古容器蠟燭有白膜、脫杯怎麼辦？</p>
      <p class="fs-6 text-900">均屬蠟燭正常現象，可安心使用。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title{
  position: absolute;
  z-index: 2;
  margin-top: 40px;
  font-size: $text_titile;
  @include  xl-screen{
    margin-top: 80px;
  }
  @include phone{
    font-size: 20px;
  }
}
.article_title{
  @include pad{
    font-size: 18px;
  }
}
p.content{
  position: absolute;
  z-index: 2;
  font-size: 18px;
  margin-top: 120px;
  text-align: center;
  width: 80%;
  @include pad{
    font-size: 16px;
    padding: 0 50px;
  }
  @include phone{
    font-size: 14px;
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
    font-size: 14px;
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
    font-size: 14px;
  }
}
</style>
