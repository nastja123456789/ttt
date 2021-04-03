<template>
  <div id="app" @mousemove="move">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      pageShown: true,
      my: null
    }
  },
  methods: {
    move() {
      console.log("hey")
      // if (this.my) clearTimeout(this.my);
      clearTimeout(this.my);
      this.my = setTimeout(function () {
        //this.v = false
        this.$router.push('/');
      }, 3000);
    }
  },
  created() {
    this.my = setTimeout(function () {
      this.$router.push('/');
    },3000);
  },

}

      //this.v=true
    // },
    // callFunction: function () {
    //   //if (this.v == true) {
    //     this.my = setTimeout(function () {
    //       //this.v = false
    //       this.$router.push({name: 'sleepmenu'});
    //     }, 3000);
      //}
      //if (this.v == false){
        //this.$router.push({name: 'sleepmenu'});
      //}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
