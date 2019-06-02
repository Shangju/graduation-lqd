<template>
  <div>
    <div class="address-box" v-for="(item, index) in addressData" :key="index">
      <div class="address-header">
        <span props="addressId">{{item.addressId}}</span>
        <div class="address-action">
          <span @click="delAddress(item.addressId)"><Icon type="trash-a"></Icon> 删除</span>
        </div>
      </div>
      <div class="address-content">
        <p><span class="address-content-title"> 收 货 人 :</span>{{item.userName}}</p>
        <p><span class="address-content-title"> 联系电话 :</span>{{item.userPhone}}</p>
        <p><span class="address-content-title">收货地区:</span>{{item.cityName}} {{item.areaName}}</p>
        <p><span class="address-content-title">收货地址:</span> {{item.userAddress}}</p>
      </div>
    </div>
    <!-- <Modal v-model="modal" width="530">
        <p slot="header">
          <Icon type="edit"></Icon>
          <span>修改地址</span>
        </p>
        <div>
            <Form :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
              <FormItem label="收件人" prop="name">
                <i-input v-model="formData.name" size="large"></i-input>
              </FormItem>
              <FormItem label="收件地区" prop="address">
                <Distpicker :province="formData.province" :city="formData.city" :area="formData.area" @province="getProvince" @city="getCity" @area="getArea"></Distpicker>
              </FormItem>
              <FormItem label="收件地址" prop="address">
                <i-input v-model="formData.address" size="large"></i-input>
              </FormItem>
              <FormItem label="手机号码" prop="phone">
                <i-input v-model="formData.phone" size="large"></i-input>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long @click="editAction">修改</Button>
        </div>
    </Modal> -->
  </div>
</template>

<script>
import store from '@/vuex/store';
import { delAddressInfo, getAddress } from '../../api.js';
import Distpicker from 'v-distpicker';
export default {
  name: 'MyAddress',
  data () {
    return {
      modal: false,
      addressData: '',
      formData: {
        name: '',
        address: '',
        phone: '',
        postalcode: '',
        province: '广东省',
        city: '广州市',
        area: '天河区'
      },
      ruleInline: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        postalcode: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ]
      }
    };
  },
  mounted () {
    this.loadAddress();
  },
  computed: {
  },
  methods: {
    loadAddress () {
      let params = {
        userId: '123'
      };
      getAddress(params).then(res => {
        // console.log(JSON.stringify(res.data));
        this.addressData = res.data;
      });
    },
    editAction () {
      this.modal = false;
      this.$Message.success('修改成功');
    },
    delAddress (addressId) {
      this.$Modal.confirm({
        title: '信息提醒',
        content: '你确定删除这个收货地址',
        onOk: () => { // 引用elment-ui 或iview的组件
          let params = {
            addressId
          };
          delAddressInfo(params).then(res => {
            this.$Message.success('删除成功');
            this.loadAddress();
          });
        },
        onCancel: () => {
          this.$Message.info('取消删除');
        }
      });
    }
  },
  components: {
    Distpicker
  },
  store
};
</script>

<style scoped>
.address-box {
  padding: 15px;
  margin: 15px;
  width: 40%;
  float: left;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
}
.address-header {
  height: 35px;
  display: flex;
  justify-content: space-between;
  color: #232323;
  font-size: 18px;
}
.address-content {
  font-size: 14px;
}
.address-content-title {
  color: #999;
}
.address-action span{
  margin-left: 15px;
  font-size: 14px;
  color: #2d8cf0;
  cursor: pointer;
}
</style>
