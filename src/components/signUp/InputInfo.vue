<template>
  <div class="info-form">
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" >
        <FormItem label="用户名" prop="name">
            <i-input v-model="formValidate.name" clearable size="large" placeholder="请输入你的姓名"></i-input>
        </FormItem>
        <!--<FormItem label="邮箱" prop="mail">-->
            <!--<i-input v-model="formValidate.mail" clearable size="large" placeholder="请输入你的邮箱"></i-input>-->
        <!--</FormItem>-->
       <FormItem label="手机号" prop="phone">
         <i-input v-model="formValidate.phone" clearable size="large"  placeholder="请输入手机号"></i-input>
       </FormItem>
        <FormItem label="密码" prop="password">
            <i-input type="password" v-model="formValidate.password" clearable size="large" placeholder="请输入你的密码"></i-input>
        </FormItem>
        <FormItem label="确认密码" prop="repassword">
            <i-input type="password" v-model="formValidate.repassword" clearable size="large" placeholder="请再次输入你的密码"></i-input>
        </FormItem>
       <FormItem prop="vali">
         <i-input type="text" v-model="formValidate.vali" clearable size="large" placeholder="验证码" style="width: 100px">
         </i-input>
         <img style="width: 100px;" :src="formValidate.imgSrc" @click="refreshCaptcha">
       </FormItem>
        <Button type="error" size="large" long @click="handleSubmit('formValidate')">注册</Button>
    </Form>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'InputInfo',
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formValidate.password) {
        callback(new Error('两次输入的密码不一样'));
      } else {
        callback();
      }
    };
    return {
      formValidate: {
        name: '',
        mail: '',
        phone: '',
        password: '',
        repassword: '',
        vali: '',
        imgSrc: 'http://localhost:8088/captcha.jpg'
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        // mail: [
        //   { required: true, message: '邮箱不能为空', trigger: 'blur' },
        //   { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        // ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6', trigger: 'blur' }
        ],
        repassword: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP']),
    ...mapActions(['addSignUpUser']),
    handleSubmit (name) {
      let userInfo = {
        adminName: this.formValidate.name,
        userPassword: this.formValidate.password,
        userPhone: this.formValidate.phone,
        captcha: this.formValidate.vali
      };
      // 定义一个变量指向vue实例
      let self = this;
      this.$axios.post('http://localhost:8088/sys/register',userInfo).then(function (res) {
        if(res.data.code === 200){
          //跳向注册成功界面
          // self.loadPage('result', {'type': 'user-register'});
          self.$Message.success('注册成功');
        }else {
          alert(res.data.msg);
        }
      }).catch(function (res) {
        alert("系统内部异常，请联系管理员");
      });
      // const father = this;
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$Message.success('注册成功');
      //     const userinfo = {
      //       username: this.formValidate.name,
      //       password: this.formValidate.password,
      //       mail: this.formValidate.mail,
      //       phone: this.$route.query.phone
      //     };
      //     this.addSignUpUser(userinfo);
      //     father.SET_SIGN_UP_SETP(2);
      //     this.$router.push({ path: '/SignUp/signUpDone' });
      //   } else {
      //     this.$Message.error('注册失败');
      //   }
      // });
    },
    refreshCaptcha: function() {
      this.formValidate.imgSrc =  "http://localhost:8088/captcha.jpg?t=" + new Date().getTime();
    }
  },
  store
};
</script>

<style scoped>
.info-form {
  width: 90% !important;
}
</style>
