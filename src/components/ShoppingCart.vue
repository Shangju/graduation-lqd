<template>
  <div>
    <Sreach></Sreach>
    <!-- 添加成功提示 -->
    <div class="add-info-box-container">
      <div class="add-info-box">
        <div class="add-info-detail">
          <div class="add-info-title">
            <p>
              <i class="fa fa-check-circle"></i> 商品已成功加入购物车！</p>
          </div>
        </div>
        <div class="car-btn-group">
          <div></div>
          <div class="car-btn-row">
            <router-link to="/">
              <button class="btn-car btn-car-to-detail">继续购物</button>
            </router-link>
            <router-link to="/order">
              <button class="btn-car btn-car-to-pay">去购物车结算</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sreach from '@/components/Sreach';
import Footer from '@/components/footer/Footer';
import store from '@/vuex/store';

export default {
  name: 'ShoppingCart',
  components: {
    Sreach,
    Footer,
    store
  }
};
</script>

<style scoped>
/****************************加入购物车页面开始*****************************/
.add-info-box-container{
  width: 100%;
  background-color: #F5F5F5;
}
.add-info-box{
  width: 50%;
  margin: 0px auto;
  padding: 100px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.add-info-detail{
  display: flex;
    flex-direction: column;
}
.add-info-title{
  font-size: 25px;
  color: #71b247;
}
.add-info-box-row{
  display: flex;
    flex-direction: row;
    margin-top: 15px;
}
.add-info-img{
  width: 56px;
  height: 56px;
  margin-right: 15px;
}
.add-info-img img{
  width: 100%;
}
.add-info-intro{
  display: flex;
    flex-direction: column;
    justify-content: center;
}
.add-info-intro-detail{
  font-size: 12px;
  color: #999999;
}
.car-btn-group{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/*按钮*/
.btn-car{
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 0px;
  border:none;
  margin-right: 15px;
}
.btn-car-to-detail{
  background-color: #fff;
  color: #e4393c;
  border:1px solid #fff;
}
.btn-car-to-detail:hover{
border:1px solid #e4393c;
}
.btn-car-to-pay{
  background-color: #e4393c;
  color: #fff;
  border:1px solid #e4393c;
}
.btn-car-to-pay:hover{
  background-color: #c91623;
  border:1px solid #c91623;
}
/****************************加入购物车页面结束*****************************/
</style>
