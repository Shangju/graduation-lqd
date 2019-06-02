<template>
  <div>
    <Sreach></Sreach>
    <div class="container">
      <p><Icon type="ios-checkmark-outline"></Icon></p>
      <div class="alarmInfo">恭喜你申请成功，请等待系统审核~</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sreach from '@/components/Sreach';
import Footer from '@/components/footer/Footer';
export default {
  name: 'ApplyDone',
  components: {
    Sreach,
    Footer
  }
};
</script>

<style scoped>
.container {
  margin: 100px 0px;
  width: 100%;
  text-align: center;
}
.container p {
  font-size: 90px;
  color: #2d8cf0;
  text-align: center;
}
.alarmInfo {
  font-size: 30px;
}
</style>
