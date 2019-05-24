<template>
  <div class="nav-container">
    <!-- 轮播 -->
      <div class="nav-carousel">
        <div>
          <Carousel autoplay loop>
              <CarouselItem  v-for="(item, index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsDetail">
                  <img :src="item">
                </router-link>
              </CarouselItem>
          </Carousel>
        </div>
      </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">水果蔬菜</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">粮油副食</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">休闲零食</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">酒水茶饮</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">熟食面点</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">肉禽蛋奶</span>
          </li>
          <li @mouseenter="showDetail(3)" @mouseleave="hideDetail(3)">
            <span class="nav-side-item">民族工艺品</span>
          </li>
        </ul>
      </div>
    </div>
    <!------- 左侧导航隐显内容 --------->
    <transition name="fade">
      <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1" @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData1.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsDetail" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2" @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData2.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsDetail" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
        <div class="detail-item-panel panel-3" :duration="{ enter: 100, leave: 100 }" v-show="panel3" @mouseenter="showDetail(3)" ref="itemPanel3" @mouseleave="hideDetail(3)">
          <div class="nav-detail-item">
            <span v-for="(item, index) in panelData3.navTags" :key="index">{{item}} > </span>
          </div>
          <ul>
            <li v-for="(items, index) in panelData3.classNav" :key="index" class="detail-item-row">
              <span class="detail-item-title">{{items.title}}
                <span class="glyphicon glyphicon-menu-right"></span>
              </span>
              <router-link to="/goodsDetail" v-for="(item, subIndex) in items.tags" :key="subIndex">
                <span class="detail-item">{{item}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
export default {
  name: 'HomeNav',
  data () {
    return {
      panel1: false,
      panel2: false,
      panel3: false,
      panelData1: {
        classNav: [
          {
            title: '水果',
            tags: [ '橙子', '柚子', '苹果', '蓝莓', '梨', '猕猴桃', '芒果', '哈密瓜', '桃', '火龙果', '枇杷' ]
          },
          {
            title: '药食同源',
            tags: [ '芋头', '紫薯', '山药', '竹笋', '莲藕', '鲜天麻', '砂仁' ]
          },
          {
            title: '根茎类',
            tags: [ '土豆', '红薯', '洋葱', '百合', '菌菇' ]
          },
          {
            title: '葱姜蒜椒',
            tags: [ '姜', '蒜', '花椒', '大葱' ]
          },
          {
            title: '蔬菜',
            tags: [ '西葫芦', '有机菜花', '西兰花', '黄瓜', '西红柿' ]
          }
        ]
      },
      panelData2: {
        classNav: [
          {
            title: '米粮杂面',
            tags: [ '米', '面粉', '粉条', '面条', '玉米', '薏米', '其他' ]
          },
          {
            title: '油盐酱醋',
            tags: [ '食用油', '醋', '酱油', '生抽', '料酒' ]
          },
          {
            title: '调味品',
            tags: [ '花椒', '辣椒面', '酱类', '豆腐乳', '干辣椒', '调味油', '八角', '糖' ]
          },
          {
            title: '坚果',
            tags: [ '木耳', '食用菌菇', '杜仲', '豆腐干', '核桃', '花生', '板栗', '红枣' ]
          },
          {
            title: '豆制品',
            tags: [ '腐竹', '香干', '其他', '豆泡' ]
          }
        ]
      },
      panelData3: {
        classNav: [
          {
            title: '蒙古族',
            tags: [ '皮雕画', '骨雕产品', '蒙古刀', '蒙古袍', '皮酒壶', '皮帽' ]
          },
          {
            title: '回族',
            tags: [ '刺绣', '剪纸', '面花', '镜子', '地毯', '茶叶' ]
          },
          {
            title: '苗族',
            tags: [ '银饰牛头', '竹制乐器', '敬酒牛角', '苗银耳环', '银饰项圈', '麒麟吊链' ]
          },
          {
            title: '维吾尔族',
            tags: [ '新疆地毯', '和田玉雕', '维吾尔摇床', '新疆土陶', '民间印染', '帕拉孜' ]
          },
          {
            title: '土家族',
            tags: [ '土家族服饰', '西兰卡普', '织锦技艺', '木刻工艺', '编织工艺' ]
          },
          {
            title: '汉族',
            tags: [ '剪纸', '年画', '布艺', '刺绣', '春联', '花灯', '竹编', '脸谱', '瓷器', '泥塑' ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['marketing'])
  },
  methods: {
    showDetail (index) {
      if (index === 1) {
        this.panel1 = true;
        this.panel2 = false;
        this.panel3 = false;
      } else if (index === 2) {
        this.panel1 = false;
        this.panel2 = true;
        this.panel3 = false;
      } else if (index === 3) {
        this.panel1 = false;
        this.panel2 = false;
        this.panel3 = true;
      }
    //   index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      if (index === 1) {
        this.panel1 = false;
      } else if (index === 2) {
        this.panel2 = false;
      } else if (index === 3) {
        this.panel3 = false;
      }
    //   index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    }
  },
  mounted () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel3.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';

    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel3.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  updated () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel3.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';

    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel3.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  store
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 450px;
}
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 16px;
  font-weight: bold;

  margin-left: 30px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1020px;
  height: 485px;
  margin: 0px auto;
}
.nav-side {
  position: absolute;
  width: 200px;
  height: 450px;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #6e6568;
  opacity: 0.85;
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 15px;
  list-style: none;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-carousel {
  width: 100%;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 10px;
  float: left;
}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  width: 815px;
  height: 450px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
</style>
