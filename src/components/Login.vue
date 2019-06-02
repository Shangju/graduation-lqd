<template>
<!-- 登陆页面 -->
  <div>
    <Row class="container">
      <i-col span="13" offset="2" class="login-img-box">
        <img src="static/img/sale.jpg" alt="">
      </i-col>
      <i-col span="7" class="login-box">
        <div class="login-container">
          <div class="login-header">
            <p>欢迎登陆</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formDate" :rules="ruleInline">
              <FormItem prop="username">
                  <i-input type="text" v-model="formDate.username" clearable size="large" placeholder="用户名">
                      <Icon type="person" slot="prepend"></Icon>
                  </i-input>
              </FormItem>
              <FormItem prop="password">
                  <i-input type="password" v-model="formDate.password" clearable size="large" placeholder="密码">
                      <Icon type="ios-locked-outline" slot="prepend"> </Icon>
                  </i-input>
              </FormItem>
              <FormItem prop="vali">
                <i-input type="text" v-model="formDate.vali" clearable size="large" placeholder="验证码" style="width: 100px">
                </i-input>
                <div class="verifiCode">
                  <img style="width: 140px;" :src="formDate.imgSrc" @click="refreshCaptcha">
                </div>
              </FormItem>
              <FormItem>
                <Button type="error" size="large" @click="handleSubmit()" long>登陆</Button>
              </FormItem>
          </Form>
          </div>
        </div>
      </i-col>
    </Row>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer/Footer';
import store from '@/vuex/store';

// import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data () {
    return {
      formDate: {
        username: '',
        password: '',
        vali: '',
        imgSrc: 'http://localhost:8088/captcha.jpg'
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSubmit () {
      let userInfo = {adminName: this.formDate.username, userPassword: this.formDate.password, captcha: this.formDate.vali};
      // let self = this; // 定义一个变量指向vue实例
      this.$axios.post(this.global.baseUrl + '/sys/login', userInfo).then(function (res) {
        if (res.data.msg != null) {
          alert(res.data.msg);
        } else {
          // alert(res.data.data.token);
          // 放置token到Cookie,保存7天
          // Cookies.set('token', res.data.data.token,{expires: 7});
          // 保存用户到本地会话
          localStorage.setItem('loginInfo', JSON.stringify(userInfo));
          // 登录成功，跳转到主页
          // localStorage.setItem('loginInfo', JSON.stringify(userInfo));
          window.location.href = '/';
        }
      }).catch(function (res) {
        alert(res);
      });
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login(this.formDate).then(result => {
            if (result) {
              this.$Message.success('登陆成功');
              this.$router.push('/');
            } else {
              this.$Message.error('用户名或密码错误');
            }
          });
        } else {
          this.$Message.error('请填写正确的用户名或密码');
        }
      });
    },
    refreshCaptcha: function () {
      this.formDate.imgSrc = this.global.baseUrl + '/captcha.jpg?t=' + new Date().getTime();
    }
  },
  components: {
    Footer
  },
  store
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  height: 485px;
  background-color: #fff;
}
.login-img-box {
  height: 485px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-img-box>img {
  width: 68%;
}
.login-box {
  height: 485px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  width: 80%;
  height: 325px;
  border: #ED3F14 solid 1px;
}
.login-header {
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 5px;
  color: #fff;
  background-color: #ED3F14;
}
.form-box {
  width: 80%;
  margin: 30px auto;
}
.verifiCode {
  margin-left: 113px;
  margin-top: -37px;
}
</style>
