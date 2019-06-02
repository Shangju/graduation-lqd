<template>
  <div class="container">
    <Sreach></Sreach>
    <HomeNav></HomeNav>
    <!-- 商品显示区域 -->
    <div class="content">
      <!-- 加盟 -->
      <div class="join">
        <router-link to="/joinSupplier">
          <div class="join-left join-common">
            <span>立即申请加盟供应商</span>
          </div>
        </router-link>
        <router-link to="/joinInvestor">
          <div class="join-right join-common">
            <span>立即申请加盟投资者</span>
          </div>
        </router-link>
      </div>
      <!-- 隆重推荐 -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="static/img/index/clock.png">
          </div>
          <div class="seckill-text">
            <span class="seckill-title">隆重推荐</span>
            <!-- <span class="seckill-remarks">总有你想不到的低价</span> -->
          </div>
          <div class="count-down">
            <span class="count-down-text">当前场次</span>
            <span class="count-down-num count-down-hour">{{ seckillsHours }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-minute">{{ seckillsMinutes }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-seconds">{{ seckillsSeconds }}</span>
            <span class="count-down-text">后结束抢购</span>
          </div>
        </div>
        <!-- 推荐内容 -->
        <div class="seckill-content">
          <div class="seckill-item" v-for="(item, index) in seckills.goodsList" :key="index">
            <div class="seckill-item-img">
              <!-- <router-link to="/goodsDetail" @click="gotoDetail(123)"><img :src="item.img"></router-link> -->
              <a @click="gotoDetail(recomId[index])">
                <img :src="item.img">
              </a>
            </div>
            <div class="seckill-item-info">
              <p>{{item.intro}}</p>
              <p>
                <span class="seckill-price text-danger"><Icon type="social-yen"></Icon>{{item.price}}</span>
                <span class="seckill-old-price"><s>{{item.realPrice}}</s></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 1F新疆特色扶贫馆 -->
      <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">{{computer.title}}</span>
          <ul>
            <li v-for="(item, index) in computer.link" :key="index">
              <router-link to="/goodsDetail">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in computer.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsDetail">
                <img :src="item.bigImg" alt="">
              </router-link>
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-img">
                  <router-link to="/goodsDetail">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
                <div class="item-four-detail-text">
                    <p class="pt_bi_tit">{{subItem.title}}</p>
                    <p class="pt_bi_promo">{{subItem.intro}}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 2F西藏特色扶贫馆 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{eat.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsDetail">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in eat.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-img">
                  <router-link to="/goodsDetail">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 3F湖南特色扶贫馆 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{third.title}}</span>
        </div>
        <div class="item-class-content" v-for="(item, index) in third.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-img">
                  <router-link to="/goodsDetail">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 4F江西特色扶贫馆 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{fourth.title}}</span>
        </div>
        <div class="item-class-content" v-for="(item, index) in fourth.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-img">
                  <router-link to="/goodsDetail">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 5F陕西特色扶贫馆 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{fifth.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsDetail">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in fifth.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-img">
                  <router-link to="/goodsDetail">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 6F湖北特色扶贫馆 -->
      <!-- <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{sixth.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsDetail">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in sixth.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-img">
                  <router-link to="/goodsDetail">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sreach from '@/components/Sreach';
import HomeNav from '@/components/nav/HomeNav';
import Footer from '@/components/footer/Footer';
import store from '@/vuex/store';
import JoinSupplier from '@/components/JoinSupplier';
import joinInvestor from '@/components/JoinInvestor';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Index',
  created () {
    this.loadSeckillsInfo();
    this.loadCarouselItems();
    this.loadFirstFloor();
    this.loadSecondFloor();
    this.loadThirdFloor();
    this.loadFourthFloor();
    this.loadFifthFloor();
    this.loadSixthFloor();
    // this.loadShoppingCart();
  },
  mounted () {
    const father = this;
    this.setIntervalObj = setInterval(function () {
      father.REDUCE_SECKILLS_TIME();
    }, 1000);
  },
  data () {
    return {
      setIntervalObj: null,
      // page: 123,
      recomId: [1, 2, 3, 4]
    };
  },
  methods: {
    ...mapActions([ 'loadSeckillsInfo', 'loadCarouselItems', 'loadFirstFloor', 'loadSecondFloor', 'loadThirdFloor', 'loadFourthFloor', 'loadFifthFloor', 'loadSixthFloor' ]),
    ...mapMutations(['REDUCE_SECKILLS_TIME']),
    gotoDetail (goodsId) {
      if (goodsId) {
        this.$router.push({
          path: 'goodsDetail',
          query: {
            goodsId
          }
        });
      } else {
        this.$router.push({path: 'goodsDetail'});
      }
    }
  },
  computed: {
    ...mapState([ 'seckills', 'computer', 'eat', 'third', 'fourth', 'fifth', 'sixth' ]),
    ...mapGetters([ 'seckillsHours', 'seckillsMinutes', 'seckillsSeconds' ])
  },
  components: {
    Sreach,
    HomeNav,
    Footer,
    JoinSupplier,
    joinInvestor
  },
  destroyed () {
    clearInterval(this.setIntervalObj);
  },
  store
};
</script>

<style scoped>
.container {
  background-color: #F6F6F6;
}
.content {
  width: 1020px;
  margin: 0px auto;
}
/* 加盟专栏 */
.join {
  margin-top: 20px;
  height: 130px;
}
.join-left {
  float: left;
  background: -webkit-linear-gradient(left, #d47585 , rgb(217, 220, 46)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #d47585, rgb(217, 220, 46)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #d47585, rgb(217, 220, 46)); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #d47585 , rgb(217, 220, 46)); /* 标准的语法（必须放在最后） */
}
.join-right {
  float: right;
  background: -webkit-linear-gradient(left, #d69047 , rgb(224, 221, 120)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #d69047, rgb(224, 221, 120)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #d69047, rgb(224, 221, 120)); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #d69047 , rgb(224, 221, 120)); /* 标准的语法（必须放在最后） */
}
.join-common {
  cursor: pointer;
  width: 48%;
  height: 130px;
  line-height: 130px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
/*****************************秒杀专栏开始*****************************/
/*秒杀专栏*/
.seckill {
  width: 100%;
  height: 330px;
  margin: 15px auto;
  background-color: #fff;
}
.seckill-head {
  width: 100%;
  height: 50px;
  background-color: #e01222;
}
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 6px;
  margin-left: 15px;
  animation-name: shake-clock;
  animation-duration: 0.3s;
  animation-iteration-count: infinite; /*设置无线循环*/
}
/*定义闹钟震动动画关键帧*/
@keyframes shake-clock {
  0% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
.seckill-text {
  width: 300px;
  height: 100%;
  float: left;
}
.seckill-text .seckill-title {
  font-size: 22px;
  line-height: 50px;
  color: #fff;
}
.seckill-text .seckill-remarks {
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
}
/*倒计时*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

.seckill-content {
  width: 100%;
  height: 280px;
}
.seckill-item {
  width: 240px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 240px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 210px;
  height: 135px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #009688;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
/*****************************秒杀专栏结束*****************************/

/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 515px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-color: #4488a7;
}
.item-class-eat-head {
  background-color: #53cfda;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
  line-height: 50px;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6da6be;
  border: 1px solid #6da6be;
  text-decoration: none;
  color: #fff;
}
.item-class-eat-head a {
  background-color: #eeb955;
  border: 1px solid #eeb955;
}
.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content {
  width: 99%;
  cursor: pointer;
  margin-left: 0.9%;
  float: left;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height: 465px;
}
.item-big-img {
  width: 363px;
  height: 465px;
  overflow: hidden;
  float: left;
}
.item-big-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.item-four-img {
  width: 646px;
  float: left;
}
.item-four-detail img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-four-detail:hover img {
  margin-left: -6px;
  transition: margin-left 0.3s;
}
.item-four-detail {
  width: 216px;
  height: 233px;
  margin-left: -1px;
  float: left;
}
.item-four-detail {
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.item-four-detail-text {
  width: 213px;
  height: 40px;
  text-align: center;
  float: left;
}
.item-four-detail-img {
  width: 196px;
  margin-top: 15px;
  margin-left: 20px;
  overflow: hidden;
  float: left;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 165px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #4488a7;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  font-size: 16px;
  margin-top: -10px;
  font-weight: bold;
  color: #00695c;
}
.item-content-bottom {
  width: 100%;
  margin-top: 8px;
}
.item-content-bottom-img {
  width: 156px;
  margin-right: 8px;
  overflow: hidden;
  float: left;
}
.item-content-bottom-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-content-bottom-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
/*****************************商品专栏结束*****************************/
</style>
