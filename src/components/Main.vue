<template>
  <div>
    <div v-for="l of list">
      <span>{{l.loginid}}</span>
      <span>{{l.name}}</span>
      <span>{{l.sex}}</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Main",
    data() {
      return {
        list: []
      }
    },
    created:function () {
      var that=this;
      axios.post("http://localhost:8080/user/getAllUser")
        .then(function (res) {
          that.list=res.data;
          console.log(that.list=res.data);
      })
    }
  }
</script>

<style scoped>

</style>
