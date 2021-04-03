<template>
<div class="complex-list">
  <h2 class="el">Комплексный обед - 120 рублей</h2>
  <h2 class="time"> С 11:30 до 16:00 </h2>
  <table class="new">
    <thead >
    <tr>

    <tr>
    <th class="first" scope="col" >Наименование</th>

    <th class="second" scope="col">гр.</th>
    </tr>

    <tr v-for="i in complex" :key="i"  id="complex-ul">
      <th  class="ce">{{i.name}}</th>
    <th  class="bad">{{i.weight}}</th></tr>
    </thead>
  </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "complex",
  data() {
    return {
      data: [],
      complex:""
    }
  },
  mounted() {
    axios
        .get('http://192.168.255.133/api/food')
    //    .then(response => (this.data = response.data.menu));
        .then(response => (this.complex = response.data.complex));
        //.then(response => (this.data = response.data.complex));
    // setTimeout(  () => {
    //   if (!this.data.length) {
    //     this.$router.push({ path: 'sleepmenu' })
    //   }
    // },18000)
  },
}
</script>

<style>
.bad{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 49.6667px;

  position: absolute;
  width: 177.33px;
  height: 100px;

}
.ce{
  position: static;
  width: 648px;
  height: 33px;
  left: 49.67px;
  top: 36.5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */


  /* black / 0.87 */

  color: rgba(0, 0, 0, 0.87);


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.time{
  position: absolute;
  width: 270px;
  height: 60px;
  left: 825px;
  top: 281px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.second{
  position: static;
  width: 107px;
  height: 33px;
  left: 692.33px;
  top: 49.67px;

  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */


  color: #000000;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.first{
  position: static;
  width: 194px;
  height: 33px;
  left: 49.67px;
  top: 49.67px;

  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */


  color: #000000;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.rr{
  position: absolute;
  width: 1698px;
  height: 106px;
  left: 111px;
  top: 341px;
}
.new{
  position: absolute;
  width: 1698px;
  height: 636px;
  left: 111px;
  top: 341px;

}
.el{
  position: absolute;
  width: 930px;
  height: 60px;
  left: 495px;
  margin-top: 200px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.badge {
  padding-top: 10px;
  margin-top: 10px;
}
#complex-ul{
  width: 70%;
  max-width: 70%;
}
#complex-list{
  display: table-cell;
  width: 100vw;
  padding-top: 10vh;
}

</style>
