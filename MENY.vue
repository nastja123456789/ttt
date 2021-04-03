<template>
  <div  @mousemove="move">

    <table class="table mb-3" style="background-color:#FFF;">
      <thead >
                        <tr>
      <td colspan="4" align="center">
        <h2 class="menu">Меню  </h2>
      </td>
      </tr>
      <tr class="header">
        <th class="header1" scope="col" ><div class="name">Наименование</div></th>
        <th class="header2" scope="col" ><div class="price">Цена</div></th>
        <th class="header3" scope="col" ><div class="gr">гр.</div></th>
        <th class="header4" scope="col" ><div class="cal">Калории</div></th>
      </tr>

                        <th class="dishes"><div class="cold">ХОЛОДНЫЕ ЗАКУСКИ К ОБЕДУ</div></th>
                        <tr class="pas"></tr>
                        <table class="pa">
                        <tr v-for="type in data['ХОЛОДНЫЕ ЗАКУСКИ К ОБЕДУ']" :key="type" >

                          <th>{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th >{{type.weight}}
                          </th>
                          <th>{{type.calories}}</th>

                        </tr>
                        </table>
                        <th class="dishes1"><div class="cold">ПЕРВЫЕ БЛЮДА</div></th>
                        <table class="pa1">
                        <tr  v-for="type in data['ПЕРВЫЕ БЛЮДА']" :key="type" >
                          <th class="p">{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th class="we">{{type.weight}}
                          </th>
                          <th>{{type.calories}}</th>
                        </tr>
                          </table>
                        <th class="dishes2"><div class="cold">ВТОРЫЕ БЛЮДА</div></th>
                        <table class="pa3">
                        <tr v-for="type in data['ВТОРЫЕ БЛЮДА']" :key="type" >
                          <th class="sec">{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th >{{type.weight}}</th>
                          <th>{{type.calories}}</th>
                        </tr>
                        </table>
                        <th class="dishes3"><div class="cold">ГАРНИР</div></th>
                        <table class="pa4">
                        <tr v-for="type in data['ГАРНИР']" :key="type" >
                          <th class="t">{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th >{{type.weight}}</th>
                          <th class="f">{{type.calories}}</th>
                        </tr>
                        </table>
                        <th class="dishes4"><div class="cold">СЛАДКИЕ БЛЮДА И ВЫПЕЧЕНЫЕ ИЗДЕЛИЯ</div></th>
                        <table class="pa5">
                        <tr v-for="type in data['СЛАДКИЕ БЛЮДА И ВЫПЕЧЕНЫЕ ИЗДЕЛИЯ']" :key="type">
                          <th class="piz">{{type.name}}</th>
                          <th class="a">{{type.price}}</th>
                          <th class="bg">{{type.weight}}
                          </th>
                          <th class="gs">{{type.calories}}</th>
                        </tr>
                        </table>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "MENY",
  data() {
  return {
    data: []
  }
  },
  mounted() {
    axios
        .get('http://192.168.255.133/api/food')
        .then(response => (this.data = response.data.menu));
// setTimeout(  () => {
//   if (!this.data.length) {
//     this.$router.push({ path: 'sleepmenu' })
//   }
// },18000)
    },

  /*method: function () {

    axios
        .get(`/api/food`)
        .then(response => (this.data = response));

  },*/
  methods: {
    move ($event) {
      console.log($event)
    }
  }
}
</script>

<style>
.bg{
  width: 440px;
}
.a{
  width: 390px;
}
.gs{
  width: 310px;
}
.piz{
  width: 3290px;
}
.f{
  width: 165px;
}
.t{
  width: 1390px;
}
.sec{
  width: 1390px;
}
.we{
  width:210px;
}
.p{
  width: 1400px;
}
.menu{
  position: absolute;
  width: 930px;
  height: 60px;
  left: 495px;
  top: 116px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  align-items: center;
  text-align: center;

  color: #000000;
}
.pa5{
  position: absolute;
  width: 1920px;
  height: 70px;
  margin-left: 16px;
  margin-top: 1755px;
}
.dishes4{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0px 40px 86px;
  position: absolute;
  width: 1920px;
  height: 100px;
  left: 16px;
  top: 1680px;
  background: rgba(255, 140, 0, 0.62);
}
.pa4{
  position: absolute;
  width: 1920px;
  height: 70px;
  margin-left: 16px;
  margin-top: 1465px;
}
.dishes3{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0px 40px 86px;
  position: absolute;
  width: 1920px;
  height: 70px;
  left: 16px;
  top: 1420px;
  background: rgba(255, 140, 0, 0.62);
}
.dishes2{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0px 40px 86px;

  position: absolute;
  width: 1920px;
  height: 70px;
  left: 16px;
  top: 1010px;
  background: rgba(255, 140, 0, 0.62);
}
.pa3{
  position: absolute;
  width: 1920px;
  height: 70px;
  margin-left: 16px;
  margin-top: 1050px;
}
.pa1{
  position: absolute;
  width: 1920px;
  height: 70px;
  margin-left: 16px;
  margin-top: 830px;
}
.dishes1{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0px 40px 86px;

  position: absolute;
  width: 1920px;
  height: 70px;
  left: 16px;
  top: 790px;
  background: rgba(255, 140, 0, 0.62);
}
.pa{
  position: absolute;
  width: 1920px;
  height: 70px;
  left: 16px;
  margin-top: 370px;
  margin-left: 16px;
}
.pas{
  position: absolute;
  width: 1920px;
  height: 70px;
  left: 16px;
  margin-top: 300px;
  margin-left: 16px;
}
.cold{
  position: static;
  width: 396px;
  height: 38px;
  left: 86px;
  top: calc(50% - 38px/2);

  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 26px;
  line-height: 37px;
  /* identical to box height */


  color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
.dishes{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0px 40px 86px;

  position: absolute;
  width: 1920px;
  height: 70px;
  left: 16px;
  top: 326px;
  color: #2c3e50;
  background: rgba(255, 140, 0, 0.62);
}
.gr{
  position: static;
  width: 132px;
  height: 40px;
  left: 16px;
  top: 16px;

  /* text semibig */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  /* identical to box height */


  /* black */

  color: #000000;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.cal{
  position: static;
  width: 138px;
  height: 40px;
  left: 16px;
  top: 16px;

  /* text semibig */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  /* identical to box height */


  /* black */

  color: #000000;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.name{
  position: absolute;
  width: 473px;
  height: 41px;
  left: 16px;
  top: 16px;

  /* text semibig */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  align-items: center;

  color: #000000;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.price{
  position: static;
  width: 82px;
  height: 40px;
  left: 16px;
  top: 16px;

  /* text semibig */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  /* identical to box height */


  /* black */

  color: #000000;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

.header{
  position: absolute;
  width: 1920px;
  height: 100px;
  left: 16px;
  top: 224px;

  background: rgba(230, 230, 230, 0.6);
}
.header1{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  position: static;
  left: 70px;
  right: 1324.72px;
  top: 21.03%;
  bottom: 21.03%;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 1700px 0px 10px;
}
.header2{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  position: absolute;
  width: 114px;
  left: calc(50% - 114px/2 + 421.48px);
  top: 21.43%;
  bottom: 21.43%;
}
.header3{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  position: absolute;
  width: 164px;
  left: calc(50% - 164px/2 + 611.5px);
  top: 21.43%;
  bottom: 21.43%;
}
.header4{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  position: absolute;
  width: 170px;
  left: calc(50% - 170px/2 + 805px);
  top: 21.43%;
  bottom: 21.43%;
}
/*.part{*/
/*  color:#000;*/
/*  background: #fff;*/
/*}*/
/*.dish{*/
/*  background: #FFCC80;*/
/*  color: #FFF;*/
/*  font: Medium Italic;*/
/*}*/
</style>

<!--<template>-->
<!--  <div>-->
<!--    <div class="hover" @mouseenter="mouseEnter" @mousemove="mousemove" @mouseleave="mouseLeave"></div>-->
<!--    <div class="popup" v-if="popup">-->
<!--      <slot></slot>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--  <script>-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        popup: false-->
<!--      }-->
<!--    },-->
<!--    mounted:function(){-->
<!--      document.getElementById("elementId").addEventListener('mousemove', function(event){-->
<!--        console.log(event.screenX + '-' + event.screenY);-->
<!--        // change the position of popup here by changing top and left property - -->
<!--        document.getElementById('popup').style.top = event.screenY+'px';-->
<!--        document.getElementById('popup').style.left = event.screenX+'px';-->
<!--      });-->
<!--    },-->
<!--    methods: {-->
<!--      mouseEnter() {-->
<!--        console.log('mouseneter');-->
<!--        this.popup = true;-->
<!--        this.$el.addEventListener('mousemove', this.mouseMove, false);-->
<!--      },-->
<!--      mouseLeave() {-->
<!--        this.popup = false;-->
<!--        // this.$el.removeEventListener('mousemove', this.mouseMove());-->
<!--      },-->
<!--      mouseMove(event) {-->
<!--        console.log(event.clientX, event.clientY);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  </script>-->
