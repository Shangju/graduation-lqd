<template>
  <div>
    <Sreach></Sreach>
    <div class="header-line"></div>
    <div class="goods-list-container">
      <Alert show-icon class="tips-box">
        小提示
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">请点击商品前的选择框，选择购物车中的商品，点击付款即可。</template>
      </Alert>
      <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" @on-selection-change="select" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
      <div class="address-container">
        <h3>收货人信息</h3>
        <div class="address-box">
          <div class="address-check">
            <div class="address-check-name">
              <span><Icon type="ios-checkmark-outline"></Icon> {{checkAddress.name}}</span>
            </div>
            <div class="address-detail">
              <p>{{checkAddress.address}}</p>
            </div>
          </div>
          <Collapse>
            <Panel>
                选择地址
                <p slot="content">
                  <RadioGroup vertical size="large" @on-change="changeAddress">
                    <Radio :label="item.addressId" v-for="(item, index) in addressData" :key="index">
                      <span props="userAddress">{{item.userAddress}} {{item.cityName}} {{item.areaName}}</span>
                    </Radio>
                  </RadioGroup>
                </p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div class="invoices-container">
        <h3>发票信息</h3>
        <p>该商品不支持开发票</p>
      </div>
      <div class="pay-container">
        <div class="pay-box">
          <p><span>提交订单应付总额：</span> <span class="money"><Icon type="social-yen"></Icon> {{totalPrice.toFixed(2)}}</span></p>
          <div class="pay-btn">
            <Button type="error" size="large" @click="addOrder()">支付订单</Button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sreach from '@/components/Sreach';
import Footer from '@/components/footer/Footer';
import { getAddress } from '../api.js';
import store from '@/vuex/store';
export default {
  name: 'Order',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.loadAddress();
  },
  data () {
    return {
      addressData: '',
      goodsId: '',
      goodsCheckList: [],
      shoppingCart: [],
      goodsdata: [],
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: '图片',
          key: 'mainImage',
          width: 200,
          render: (h, params) => {
            // console.log(params.row);
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.mainImage,
                  style: 'width: 120px; height: 83px'
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '商品名称',
          key: 'productName',
          align: 'center'
        },
        {
          title: '单价',
          width: 120,
          key: 'productPrice',
          align: 'center'
        },
        {
          title: '数量',
          key: 'quantity',
          width: 120,
          align: 'center'
          // render: (h, params) => {
          //   return h('div', [
          //     h('InputNumber', {
          //       on: {
          //         'on-change': (event) => {
          //           // alert(event); // event表示数字输入框的数字
          //           this.quantity = event;
          //           console.log(params.row.quantity);
          //         }
          //       },
          //       props: {
          //         min: 0,
          //         value: params.row.quantity
          //         // disabled: true
          //       }
          //     })
          //   ]);
          // }
        }
        // {
        //   title: '合计',
        //   width: 120,
        //   key: 'price',
        //   align: 'center',
        //   render: (h, params) => {
        //     return h('div', [
        //       h('div', {
        //         props: {
        //           value: params.row.quantity * params.row.productPrice
        //         }
        //       })
        //     ])
        //   }
        // },
        // {
        //   title: '操作',
        //   width: 120,
        //   key: 'deleteGoods',
        //   align: 'center',
        //   render: (h, params) => {
        //     return h('div', [
        //       h('i-button', {
        //         props: {
        //           type: 'primary'
        //         },
        //         style: {
        //           width: '80%',
        //           display: 'flex',
        //           'justify-content': 'center'
        //         },
        //         on: {
        //           click: () => {
        //             let params = {
        //               goodsId: params.row.goodsId
        //             };
        //             alert(goodsId);
        //             delGoods(params).then(res => {
        //               this.$message.success('删除成功！');
        //               this.getCartInfo();
        //             });
        //           }
        //         }
        //       }, '删除')
        //     ]);
        //   }
        // }
      ],
      checkAddress: {
        name: '未选择',
        address: '请选择地址'
      },
      remarks: ''
    };
  },
  computed: {
    totalPrice () {
      let price = 0;
      this.goodsCheckList.forEach(item => {
        price += item.productPrice * item.quantity;
      });
      return price;
    }
  },
  methods: {
    addOrder () { //支付订单按钮 向后台发送订单数据
    // console.log(this.shoppingCart);
      this.$axios.post(
        this.global.baseUrl + '/addOrder',
        this.shoppingCart
      ).then((res) => {
        if (res.data.code === 200) {
          this.$router.push('/Pay');
        } else {
          alert(res.data.msg);
        }
      }).catch(function (res) {
        alert(res);
      });
    },
    loadAddress () { // 加载收货地址信息
      let params = {
        userId: '123'
      };
      getAddress(params).then(res => {
        // console.log(JSON.stringify(res.data));
        this.addressData = res.data;
      });
    },
    select (selection, row) {
      // console.log(selection);
      this.goodsCheckList = selection;
    },
    changeAddress (data) {
      // const father = this;
      this.addressData.forEach(item => {
        if (item.addressId === data) {
          this.checkAddress.name = item.name;
          this.checkAddress.address = `${item.userAddress} ${item.cityName} ${item.areaName}`;
        }
      });
    },
    // 获取购物车数据
    getCartInfo () {
      this.$axios.post(
        this.global.baseUrl + '/cart/getCartInfo'
      ).then((res) => {
        if (res.data.code === 200) {
          // console.log(JSON.stringify(res.data));
          this.shoppingCart = res.data.data;
          // console.log(this.shoppingCart);
          // this.cartList = res.data.data;
          // for (let i = 0; i < this.cartList.length; i++) {
          //   this.totalNum = this.totalNum + this.cartList[i].quantity;
          //   this.totalPrice = this.totalPrice + this.cartList[i].productPrice * this.cartList[i].quantity;
          // }
        } else {
          // this.cartList = [];
          this.isShowCart = false;
        }
      }).catch(function (res) {
        alert(res);
      });
    }
  },
  mounted () {
    this.getCartInfo(); // 获取购物车列表
    this.loadAddress(); // 获取收货地址
    setTimeout(() => {
      this.$refs.selection.selectAll(true);
    }, 500);
  },
  components: {
    Sreach,
    Footer
  },
  store
};
</script>

<style scoped>
.header-line {
  background-color: #333333;
  height: 35px;
}
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.address-container {
  margin-top: 15px;
}
.address-box {
  margin-top: 15px;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;
}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px 0px;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container p{
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;
}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
