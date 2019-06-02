// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global from '@/utils/global';
// import store from './vuex/store';
Vue.use(ElementUI);

Vue.use(iView);
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$axios = axios;
Vue.prototype.global = global;

axios.defaults.withCredentials = true;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

// 依据是否登录跳转路由
router.beforeEach((to, from, next) => {
// 登录界面登录成功之后，会把用户信息保存在会话
// 存在时间为会话生命周期，页面关闭即失效。
// token 7天后失效
  let token = localStorage.getItem('loginInfo');
  if (to.path === '/Login') {
    // 如果是访问登录界面，如果用户会话信息token存在，代表已登录过，跳转到主页
    if (token) {
      next({path: '/'});
    } else {
      next();
    }
  }
  if (to.meta.requestAuth) {
    if (token) {
      next();
    } else {
      next({ path: '/Login' });
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
