<template>
  <div>
    <Sreach></Sreach>
    <!-- 申请供应商 -->
    <div class="container">
      <div class="header-line"></div>
      <div class="progress">
        <p class="title">供应商加盟流程</p>
        <Row>
          <i-col span="6">
            <img src="../../static/img/supply/progress-1.png" alt="" />
            <span>填写加盟供应商资料</span>
          </i-col>
          <i-col span="6">
            <img src="../../static/img/supply/progress-2.png" alt="" />
            <span>等待系统审核</span>
          </i-col>
          <i-col span="6">
            <img src="../../static/img/supply/progress-3.png" alt="" />
            <span>网签加盟协议</span>
          </i-col>
          <i-col span="6">
            <img src="../../static/img/supply/progress-4.png" alt="" />
            <span>获取网店、优质推广资源</span>
          </i-col>
        </Row>
      </div>
      <ul class="information">
        <li class="info-list"><span>姓名：</span><i-input size="large" placeholder="请输入真实姓名"></i-input></li>
        <li class="info-list"><span>邮箱：</span><i-input size="large" placeholder="请输入邮箱"></i-input></li>
        <li class="info-list"><span>联系方式：</span><i-input size="large" placeholder="请输入联系电话"></i-input></li>
        <li class="info-list">
          <span>特产种类：</span>
          <i-select :model.sync="model8" clearable>
            <i-option v-for="item in cityList" :value="item.value" :key="item.label">{{ item.label }}</i-option>
          </i-select>
        </li>
        <li class="info-list"><span>特产名称：</span><i-input size="large" placeholder="请输入特产名称"></i-input></li>
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
  name: 'joinSupplier',
  data () {
    return {
      cityList: [
        {
          value: 'shucai',
          label: '水果蔬菜'
        },
        {
          value: 'liangyou',
          label: '粮油副食'
        },
        {
          value: 'xiuxian',
          label: '休闲零食'
        },
        {
          value: 'jiushui',
          label: '酒水茶饮'
        },
        {
          value: 'shushi',
          label: '熟食面点'
        },
        {
          value: 'rouqin',
          label: '肉禽蛋奶'
        },
        {
          value: 'gongyiping',
          label: '民族工艺品'
        }
      ],
      model8: ''
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

<style scoped lang="less">
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
      width: 100px;
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
