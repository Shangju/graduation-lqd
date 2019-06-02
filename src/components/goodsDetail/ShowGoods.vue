<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img" >
          <img :src="initSrc" alt="">
        </div>
        <div class="item-detail-img-row">
          <div class="item-detail-img-small" v-for="(item, index) in subImage" :key="index" @mouseover="showBigImg(item)">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>{{product.goodsName}}</p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <span class="item-price">{{product.sellPrice}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.promotion" :key="index">{{item}}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 选择规格 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>商品介绍</p>
          </div>
          <div class="item-select-column">
            <span>{{product.goodsIntroduce}}</span>
          </div>
        </div>
        <!-- 库存 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>库存</p>
          </div>
          <div class="item-reserve">
              <span>{{product.stock}}</span>
          </div>
        </div>
        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" size="large" @click="addShoppingCartBtn()">加入购物车</Button>
            <!-- <Button type="error" size="large" @click="loadDetail()">加入购物车</Button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ShowGoods',
  data () {
    return {
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0,
      subImage: [],
      product: {},
      initSrc: ''
    };
  },
  computed: {
    ...mapState(['goodsInfo'])
  },
  methods: {
    ...mapActions(['addShoppingCart']),
    select (index1, index2) {
      this.selectBoxIndex = index1 * 3 + index2;
      this.price = this.goodsInfo.setMeal[index1][index2].price;
    },
    showBigImg (index) {
      this.initSrc = index;
    },
    addShoppingCartBtn () {
      let userCart = {
        productId: this.product.goodsId,
        quantity: this.count,
        productName: this.product.goodsName,
        productPrice: this.product.sellPrice,
        mainImage: this.product.image,
        checked: true,
        productStock: this.product.stock
      };
      // Cookies.set('userCart',userCart);
      this.$axios.post(
        this.global.baseUrl + '/cart/addCart',
        userCart
      ).then((res) => {
        if (res.data.code === 200) {
          this.$router.push('/ShoppingCart');
        } else {
          alert(res.data.msg);
        }
      }).catch(function (res) {
        alert(res);
      });
    },
    // 此方法获取url后面的值
    getUrlParam (name) {
    // let reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)");
      // console.log(reg);
      // let result = window.location.search.substr(1).match(reg);
      // console.log(result);
      // return result ? decodeURIComponent(result[2]) : null;

      var str = location.href; // 取得整个地址栏
      var num = str.indexOf('?');
      str = str.substr(num + 1); // 取得所有参数   stringvar.substr(start [, length ]

      var arr = str.split('&'); // 各个参数放到数组里
      // console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        var result = arr[i].split('=');
        if (result[0] === name) {
          return decodeURI(result[1]);
        }
      }
    },
    loadDetail () {
      let goodsId = this.getUrlParam('goodsId');
      if (!goodsId) {
        this.goHome();
        return;
      }
      let goodsInfo = {goodsId: goodsId};
      this.$axios.post(this.global.baseUrl + '/loadDetail', goodsInfo).then((res) => {
        if (res.data.code === 200) {
          // alert(JSON.stringify(res.data.data));
          this.product = res.data.data;
          // this.mainImage = this.product.image;
          let subImages = this.product.subImages;
          this.subImage = subImages.split(',');
          this.initSrc = this.subImage[0];
          // alert(JSON.stringify(this.product));
          // for (let i = 0; i < array.length; i++) {
          //   this.subImages.push(array[i]);
          // }
        // alert(this.subImages[2]);
        } else {
          this.isShowProduct = false;
        }
      }).catch(function (res) {
        alert(res);
      });
    }
  },
  created () {
    this.loadDetail();
  },
  mounted () {
    const father = this;
    setTimeout(() => {
      father.price = father.goodsInfo.setMeal[0][0].price || 0;
    }, 300);
  },
  store
};
</script>

<style scoped>
/******************商品图片及购买详情开始******************/
.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class, .item-reserve {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
/******************商品图片及购买详情结束******************/
</style>
