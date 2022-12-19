<template>
  <div class="container-fluid d-flex align-items-center justify-content-center px-0">
    <p class="en-font title fs-3-lg fs-4-md mb-0">隱私政策</p>
    <p class="content en-font">為了讓您安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權政策</p>
    <img src="@/assets/img/Policy/Policy.png" class="d-lg-block d-none w-100" alt="banner">
    <img src="@/assets/img/Policy/Policy-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/img/Policy/Policy-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container mx-auto py-4 mt-4">
    <div class="section">
      <p class="fs-6 fw-bold mb-1">一、隱私權保護政策的適用範圍</p>
      <p class="fs-6 text-900">隱私權保護政策內容，包括本網站如何處理個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站。</p>
    </div>
    <div class="section mt-4">
      <p class="fs-6 fw-bold mb-1">二、個人資料的蒐集、處理及利用方式</p>
      <p class="fs-6 text-900">
        ・當您造訪本網站或使用本網站所提供之功能服務時，非經您書面同意，本網站不會將個人資料用於其他用途。<br/>
        ・本網站在您使用服務信箱、問卷調查等功能時，會保留所提供的姓名、電子郵件地址、聯絡方式及使用時間等。<br/>
        ・於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用的IP位址、使用時間等，做為我們網站服務的參考依據。<br/>
        ・為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之呈現，不涉及特定個人之資料。
      </p>
    </div>
    <div class="section mt-4">
      <p class="fs-6 fw-bold mb-1">三、隱私權保護政策之修正</p>
      <p class="fs-6 text-900">
        本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  position: absolute;
  z-index: 2;
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
