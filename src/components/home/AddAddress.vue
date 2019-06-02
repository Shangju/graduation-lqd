<template>
  <div>
    <div class="add-container">
      <div class="add-title">
        <h1>添加收货地址</h1>
      </div>
      <div class="add-box">
        <Form :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
          <FormItem label="收件人" prop="userName">
            <i-input v-model="formData.userName" size="large"></i-input>
          </FormItem>
          <FormItem label="收件地区" prop="address">
            <Distpicker :province="formData.province" :city="formData.city" :area="formData.area" @province="getProvince" @city="getCity" @area="getArea"></Distpicker>
          </FormItem>
          <FormItem label="收件地址" prop="userAddress">
            <i-input v-model="formData.userAddress" size="large"></i-input>
          </FormItem>
          <FormItem label="手机号码" prop="userPhone">
            <i-input v-model="formData.userPhone" size="large"></i-input>
          </FormItem>
        </Form>
      </div>
      <div class="add-submit">
        <Button type="primary" @click="addAddress()">添加地址</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Distpicker from 'v-distpicker';
import { addAddressInfo } from '../../api.js';
export default {
  name: 'AddAddress',
  data () {
    return {
      formData: {
        userName: '',
        userAddress: '',
        userPhone: '',
        // postalcode: '',
        province: '海南省',
        city: '海口市',
        area: '美兰区'
      },
      ruleInline: {
        userName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        userAddress: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        userPhone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    getProvince (data) {
      this.formData.province = data.value;
    },
    getCity (data) {
      this.formData.city = data.value;
    },
    getArea (data) {
      this.formData.area = data.value;
    },
    addAddress () {
      let params = {
        userId: '123',
        userName: this.formData.userName,
        userAddress: this.formData.userAddress,
        userPhone: this.formData.userPhone,
        cityName: this.formData.province,
        areaName: this.formData.city
      };
      addAddressInfo(params).then(res => {
        this.$message.success('添加地址成功！');
      });
    }
  },
  components: {
    Distpicker
  }
};
</script>

<style scoped>
.add-container {
  margin: 15px auto;
  width: 60%;
  min-width: 600px;
}
.add-title {
  margin-bottom: 15px;
  text-align: center;
}
.add-submit {
  display: flex;
  justify-content: center;
}
</style>
