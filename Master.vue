<template>

  <div id="app" @mousemove="move">
    <v-toolbar class="ee">
      <button class="r" @click="drawerVisible = true">
        &#8942;&#8942;&#8942;
      </button>
      <input class="u" type="date" v-model="date">

    </v-toolbar>
    <v-navigation-drawer
        class="left-drawer" id="s"
        :style="{
        width: drawerVisible ? '25vw' : '0',
        paddingLeft: drawerVisible ? '10px' : '0',
      }"
    >
      <div class="item-list">
<img class="imag" src="../../../src/components/Логотип_МИЭМ.png">

        <div >
        <b-nav-item-dropdown left >
        <template #button-content>
          <h4 > <router-link :to="{ name: 'RUS' }">РУЗ</router-link></h4></template>

        <b-dropdown-item href="#" >
          <a  href="#РУЗ/Аудитории"><router-link :to="{name: 'freeaudit'}">Свободные аудитории</router-link>
        </a>
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown left>
        <template #button-content>
          <h4> <router-link :to="{ name: 'MENY' }">Меню</router-link></h4></template>
        <b-dropdown-item href="#">
          <a  href="#Столовая/Комплекс"><router-link :to="{name: 'complex'}">Комплекс</router-link></a>
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <h4><a  href="#Меню при спящем режиме"><router-link :to="{name: 'sleepmenu'}">Меню:спящий режим</router-link></a></h4>
      <h4><a  href="#Новости"><router-link :to="{ name: 'news' }">Новости</router-link></a></h4>
      <h4><a  href="#Навигация"><router-link :to="{ name: 'navigation' }">Навигация</router-link></a></h4>
        </div>
      </div>
    </v-navigation-drawer>
    <div class="drawer-mask"></div>
    <!-- We will make the mask fill the screen while the menu is visible. Because its z-index is 1 less than that of the menu, the menu will still be displayed on top of it -->
    <div
        class="drawer-mask"
        :style="{
        width: drawerVisible ? '100vw' : '0',
        opacity: drawerVisible ? '0.6' : '0',
      }"
        @click="drawerVisible = false"
    ></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Master",
  data() {
    return {
      pageShown: true,
      my: null,
      date: new Date().toISOString().substr(0, 10) ,
      drawerVisible: false,
    };
  },
  methods: {
    move() {
      console.log("hey")
      // if (this.my) clearTimeout(this.my);
      clearTimeout(this.my);
      this.my = setTimeout( () => {
        //this.v = false
        this.$router.push('/');
      }, 50000);
    }
  },
  mounted() {
    this.my = setTimeout(    ( ) => {
      this.$router.push('/');
    },3000);
  },
}
</script>

<style>
.list{
  position: static;
  width: 507px;
  height: 545px;
  left: 0px;
  top: 210px;


  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}
.divider{
  position: static;
  width: 860px;
  height: 0px;
  left: 0px;
  top: 210px;

  /* Lines */

  border: 1px solid rgba(153, 153, 153, 0.67);

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
.item{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 8px;

  position: absolute;
  width: 285px;
  height: 45px;
  left: 62px;
  top: 86px;

  border-radius: 4px;
}
.item-list{
  position: static;
  width: 507px;
  height: 545px;
  left: 0px;
  top: 210px;


  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}
#s {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 860px;
  height: 1080px;
  left: 0px;
  top: 0px;

  /* white */

  background: #FFFFFF;

}
.ee {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 1920px;
  height: 100px;
  left: 0px;
  top: 0px;

  /* light orange */

  background: rgba(255, 140, 0, 0.4);
}
.u{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 64px 0px 0px;

  position: absolute;
  width: 200px;
  height: 50px;
  left: 1700px;
  top: 25px;
}
.r{
  position: static;
  width: 50px;
  height: 46px;
  left: 16px;
  top: 27px;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px;
}
.imag{
  position: static;
  width: 344.62px;
  height: 80px;
  left: 59px;
  top: 65px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
}
h4{
 color:black;
}
/*.toggle{*/
/*  padding-right:10px;*/
/*}*/
.left-drawer {
  position: absolute;
  top: 0;
  left: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 100vh;
  padding-left: 0; /* initially */
  border-left: 1px solid whitesmoke;
  background: white;
  z-index: 200;
}

.drawer-mask {
  position: absolute;
  right: 0;
  top: 0;
  width: 0; /* initially */
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
}
</style>
