<template>
  <div class="coupon" >
    <div class="row bg-white rounded">
      <div class="col-lg-4 offset-lg-1">
        <p class="text">限時優惠折價卷</p>
        <h3 class="en-font num">15<span class="percent">%</span><span class="en-font off ms-2">off</span></h3>
        <p class="mt-4 text-primary">輸入 CDR5542 折扣碼 </p>
      </div>
      <div class="col-lg-7 px-0">
        <div class="coupon-pic"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coupon{
  width: 80%;
}
.coupon-pic{
  background-image: url('../../assets/img/Index/coupon.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height:250px;
}
.text{
  font-size: 20px;
  font-weight: 600;
  color: $primary;
  margin-top: 40px;
}
.num{
  font-size: 60px;
  margin-top: -20px;
  @include phone{
    font-size: 40px;
    margin-top: 10px;
  }
}
.percent{
  font-size: 40px;
}
.off{
  font-size: 32px;
  @include phone{
    font-size: 26px;
  }
}
</style>
