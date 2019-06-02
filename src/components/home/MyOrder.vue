<template>
  <div>
    <Table border :columns="columns" :data="orderData" size="large" no-data-text="你还有订单，快点去购物吧"></Table>
    <div class="page-size">
      <Page :total="totalLength" show-sizer></Page>
    </div>
  </div>
</template>

<script>
import { getOrders } from '../../api.js';
export default {
  name: 'MyOrder',
  data () {
    return {
      orderData: [],
      totalLength: 0,
      columns: [
        {
          title: '订单号',
          key: 'productId',
          width: 150,
          align: 'center'
        },
        {
          title: '图片',
          key: 'mainImage',
          width: 180,
          render: (h, params) => {
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
          // width: 200,
          key: 'productName',
          align: 'center'
        },
        {
          title: '数量',
          key: 'quantity',
          width: 100,
          align: 'center'
        },
        {
          title: '价格',
          width: 100,
          key: 'productPrice',
          align: 'center'
        }
      ]
    };
  },
  mounted () {
    this.loadOrders(); // 加载订单数据
  },
  methods: {
    loadOrders () {
      let params = '';
      getOrders(params).then(res => {
        this.orderData = res.data[0].orderGoods;
        this.totalLength = res.data[0].orderGoods.length;
      });
    }
  }
};
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.ivu-table-column-center img {
  height: 100px;
}
.ivu-table-cell {
  padding-right: 0px;
  padding-left: 0px;
}
</style>
