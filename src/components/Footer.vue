<template>
  <div class="footerNav">
    <router-link to="" class="tab-item">
      <span class="text">首页</span>
    </router-link>
    <router-link to="" class="tab-item">
      <span class="text">详细</span>
    </router-link>
    <router-link to="" class="tab-item">
      <span class="text">信息</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Foote"
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .footerNav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    display: flex;
    text-align: center;
    box-shadow: 0px 0px 3px #888888;
    height: 5.7vw;
    z-index: 10;

    .tab-item {
      display: flex;
      flex-direction: column;
      /*padding: 1vw 0;*/
      flex: 1;
      color: #aaa;
      font-size: 3.6vw;

      .add {
        height: 4vw;
        width: 10vw;
        display: block;
        text-align: center;
        border-radius: 50%;
        background-color: #5CB3F2;
        margin: 0 auto;
        line-height: 10vw;
        font-size: 7vw;
        position: relative;
        bottom: 12px;
        color: #fff;
      }

      .icon {
        font-size: 6.2vw;
        height: 2vw;
        font-size: 5.2vw;
        height: 5.3vw;
      }

      .text {
        display: block;
        height: 6vw;
      }

      &.router-link-active {
        color: #5CB3F2;
      }
    }
  }
</style>
