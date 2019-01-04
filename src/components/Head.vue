<template>
  <div class="orderRoom">
    <x-header title="这是个头部" :left-options="{showMore: true,backText:'返回'}" :right-options="{showMore: true}"></x-header>
    <div style="padding: 10px 0;background-color: #fff">
      <tab bar-active-color="#5CB3F2" :line-width="2" custom-bar-width="60px">
        <tab-item active-class="active" selected>
          <router-link to="/index/m">
            头部下的标签1
          </router-link>
        </tab-item>
        <tab-item active-class="active" selected>
          <router-link :to="{path:'/index/m',query:{id:'12'}}">
            头部下的标签2
          </router-link>
        </tab-item>
        <tab-item active-class="active" selected>
          <router-link to="">
            头部下的标签3
          </router-link>
        </tab-item>
      </tab>
    </div>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import XHeader from "vux/src/components/x-header/index.vue";
  import Tab from "vux/src/components/tab/tab.vue";
  import TabItem from "vux/src/components/tab/tab-item.vue";
  import Footer from './Footer.vue'

  export default {
    name: "Head",
    components: {TabItem, Tab, XHeader, 'v-footer': Footer},
    data(){
      return console.log(this.$route.query.id)
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .orderRoom {
    height: 100%;
    background-color: #eee;
  }

  #header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 66px;
    z-index: 2;
  }

  .vux-tab-item {
    background: none !important;

    a {
      color: #5CB3F2;
      text-decoration: none;
    }

    a:hover {
      display: block;
      text-decoration: none;
      font-size: 18px;
    }
  }
</style>
