import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: 0, // 0表示用户未登录，1表示用户已登录
    isLoading: false, // 是否展示loading动画
    orderBy: 'sale', // 根据什么字段排序
    goodsInfo: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    userInfo: { // 用户信息
      username: ''
    },
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [], // 轮播图
      activity: [] // 活动
    },
    seckills: { // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      goodsList: []
    },
    computer: {}, // 1F专栏
    eat: {}, // 2F专栏
    third: {}, // 3F专栏
    fourth: {}, // 4F专栏
    fifth: {}, // 5F专栏
    sixth: {}, // 6F专栏
    asItems: [], // 广告
    goodsList: [], // 商品列表
    shoppingCart: [], // 购物车
    newShoppingCart: [], // 刚加入的购物车，作为展示
    recommend: [] // 推荐购买
  },
  getters,
  actions,
  mutations
});
