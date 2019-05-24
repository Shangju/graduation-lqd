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
      order: [{
        order_id: 1529931938150,
        goods_id: 1529931938150,
        count: 1,
        img: 'static/img/goodsDetail/itemDetailOne/1.jpg',
        package: '250g*2',
        price: 54,
        title: '【西藏扶贫商品】藜麦',
        createAt: '2018-06-06 20:06:08'
      }],
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
          width: 120,
          height: 120,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '商品名称',
          key: 'title',
          width: 215,
          align: 'center'
        },
        {
          title: '商品规格',
          width: 100,
          key: 'package',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 68,
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
