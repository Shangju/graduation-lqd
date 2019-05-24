<template>
  <div>
    <Sreach></Sreach>
    <!-- 申请投资者加盟 -->
    <div class="container">
      <div class="header-line"></div>
      <div class="progress">
        <p class="title">投资者加盟流程</p>
        <Row>
          <i-col span="6">
            <img src="../../static/img/supply/progress-1.png" alt="" />
            <span>填写投资者加盟资料</span>
          </i-col>
          <i-col span="6">
            <img src="../../static/img/supply/progress-2.png" alt="" />
            <span>等待系统审核</span>
          </i-col>
          <i-col span="6">
            <img src="../../static/img/supply/progress-3.png" alt="" />
            <span>获取当地厂家信息</span>
          </i-col>
          <i-col span="6">
            <img src="../../static/img/supply/progress-4.png" alt="" />
            <span>双方互签合作协议</span>
          </i-col>
        </Row>
      </div>
      <ul class="information">
        <li class="info-list"><span>姓名：</span><i-input size="large" placeholder="请输入真实姓名"></i-input></li>
        <li class="info-list"><span>邮箱：</span><i-input size="large" placeholder="请输入邮箱"></i-input></li>
        <li class="info-list"><span>联系方式：</span><i-input size="large" placeholder="请输入联系电话"></i-input></li>
        <li class="info-list">
          <span>投资意向：</span><i-input type="textarea" :rows="5" placeholder="请输入..."></i-input>
        </li>
        <li class="info-list"><span>投资金额(万)：</span><Input-number :value="2" size="large"></Input-number></li>
        <li class="info-list list-submit"><i-button type="success" long>提交申请</i-button></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sreach from '@/components/Sreach';
import Footer from '@/components/footer/Footer';
export default {
  name: 'joinInvestor',
  data () {
    return {

    };
  },
  components: {
    Sreach,
    Footer
  },
  methods: {

  }
};
</script>

<style scoped lang='less'>
.header-line {
  height: 38px;
  background-color: #333333;
  line-height: 38px;
  color: #2c2c2c;
}
.title {
  padding-top: 40px;
  text-align: center;
  font-size: 20px;
}
.ivu-row {
  width: 1020px;
  margin: auto;
  padding-top: 40px;
  .ivu-col-span-6 {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
    }
  }
}
.information {
  padding-top: 20px;
  width: 1020px;
  margin: auto;
  .info-list {
    list-style-type: none;
    width: 50%;
    margin: auto;
    span {
      display: inline-block;
      width: 130px;
      line-height: 50px;
      font-size: 15px;
      text-align: right;
    }
  }
  .ivu-input-wrapper {
    width: 70%;
    .ivu-input-large {
      height: 43px;
    }
  }
  .ivu-select {
    width: 70%;
    margin-left: -4px;
  }
  .ivu-select-placeholder {
    height: 40px;
    font-size: 14px !important;
    line-height: 40px;
  }
  .list-submit {
    .ivu-btn-success {
      height: 45px;
      width: 60%;
      margin-left: 90px;
      margin-top: 45px;
      font-size: 16px;
      background-color: #fd9923;
      border-color: #fd9923;
    }
  }
}
</style>
