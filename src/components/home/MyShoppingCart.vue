<template>
  <div>
    <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
    <div class="go-to">
      <Button @click="goTo" type="primary">支付订单</Button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  name: 'MyShoppingCart',
  data () {
    return {
      shoppingCart: [],
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: '图片',
          key: 'mainImage',
          width: 180,
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
          title: '单价 ',
          width: 100,
          key: 'productPrice',
          align: 'center'
        },
        {
          title: '数量',
          key: 'quantity',
          width: 100,
          align: 'center'
        },
        {
          title: '合计',
          width: 100,
          key: 'price',
          align: 'center'
        }
      ]
    };
  },
  created () {
  },
  computed: {
  },
  mounted () {
    this.getCartInfo();
  },
  methods: {
    goTo () {
      this.$router.push('/pay');
    },
    // 获取购物车数据
    getCartInfo () {
      this.$axios.post(
        this.global.baseUrl + '/cart/getCartInfo'
      ).then((res) => {
        if (res.data.code === 200) {
          console.log(JSON.stringify(res.data));
          this.shoppingCart = res.data.data;
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
  store
};
</script>

<style scoped>
.go-to {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
