<template>
  <div>
    <Table border :columns="columns" :data="order" size="large" no-data-text="你还有订单，快点去购物吧"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {
      order: [
        {
          order_id: 1,
          count: 2,
          img: 'static/img/goodsDetail/itemDetailOne/1.jpg',
          price: 68,
          title: '【西藏扶贫商品】藜麦',
          address: '崇文路2号重庆邮电大学',
          createAt: '2018-06-06 20:06:08'
        },
        {
          order_id: 2,
          count: 1,
          img: 'static/img/goodsDetail/itemDetailOne/6.jpg',
          price: 54,
          title: '【西藏扶贫商品】核桃仁',
          address: '崇文路3号重庆邮电大学',
          createAt: '2018-06-06 19:36:40'
        },
        {
          order_id: 3,
          count: 5,
          img: 'static/img/goodsDetail/itemDetailOne/11.jpg',
          price: 48,
          title: '【中国民用航空扶贫商品】蘑菇',
          address: '崇文路4号重庆邮电大学',
          createAt: '2019-03-06 22:36:08'
        }
      ],
      columns: [
        {
          title: '订单号',
          key: 'order_id',
          width: 150,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 180,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img,
                  style: 'width: 120px; height: 83px'
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '商品名称',
          width: 200,
          key: 'title',
          align: 'center'
        },
        {
          title: '收货地址',
          key: 'address',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 100,
          align: 'center'
        },
        {
          title: '价格',
          width: 100,
          key: 'price',
          align: 'center'
        },
        {
          title: '购买时间',
          width: 200,
          key: 'createAt',
          align: 'center'
        }
      ]
    };
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
