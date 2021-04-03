<template>

  <v-card class="v-card">
    <h6 v-for="i in news.data" :key="i">

      <div class="image">
        <img class="g" v-bind:src="i['img']" >
      </div>

      <div class="context">
        <v-card-title class="title">
        <h6 class="tit">  {{i["title"]}}
        </h6>
        </v-card-title>
        <v-card-text class="text">
          <h6 class="txt">  {{i["text"]}}</h6>
          <h6 class="padding"></h6>
        </v-card-text>
      </div>
<!--<div class="sub">-->
<!--      <a  v-bind:href="i['link']">{{i["link"]}}</a>-->
<!--</div>-->

    </h6>
    <p></p>

  </v-card>


</template>

<script>
import axios from "axios";

export default {
name: "news",
  data() {
    return {
      news: []
    }
  },
  mounted() {
    axios
        .get('http://192.168.255.133/api/news')
        .then(response => (this.news = response));
    // setTimeout(  () => {
    //   if (!this.news.length) {
    //     this.$router.push({ path: 'sleepmenu' })
    //   }
    // },16000)
  },
}
</script>

<style>
.g{
  width: 1000px;
  margin-top: 100px;
  margin-left: 50%;
}

/*.padding{*/
/*  position: absolute;*/
/*  width: 842.66px;*/
/*  height: 11.95px;*/


/*  !* white *!*/

/*  background: #FFFFFF;*/
/*}*/
.tit{
  position: static;
  width: 1131px;
  height: 80px;
  left: 0px;
  top: -5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */

  text-align: center;
margin-left:45%;
  /* black / 0.87 */

  color: rgba(0, 0, 0, 0.87);

margin-left:45%;
  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.sub{
  position: static;
  width: 1130px;
  height: 93px;
  left: 7.5px;
  top: 9.02px;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 34px 0px;
}
.txt{

  width: 1128px;
  height: 30px;


  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  /* identical to box height, or 125% */

  text-align: center;

  color: #000000;
}
.title{
  margin-top:100px;
  margin-left: 90%;
  position: static;
  width: 1130px;
  height: 93px;
  left: 7.5px;
  top: 9.02px;
  padding: 10px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.text{
  position: static;
  width: 1128px;
  height: 46.95px;
  left: 8.5px;
  top: 136.02px;

  margin-left: 90%;
  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
margin-top:34px;
}
.image{
  position: static;
  width: 1147px;
  height: 787.71px;
  left: 0px;
  top: 0px;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
.context {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 23px;

  position: static;
  width: 1145px;
  height: 192px;
  left: 0px;
  top: 787.71px;


  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}
.vcard{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 1147px;
  height: 980px;
  left: 387px;
  top: 100px;

  /* white */

  background: #FFFFFF;
  /* black / 0.12 */

  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 4px;
}
/*#news-slides{*/
/*  height: 100%;*/
/*  max-width: 100vw;*/
/*}*/
/*.slider-element{*/
/*  height: 90vh;*/
/*}*/

/*.slick-list{*/
/*  height: 100%;*/
/*}*/
/*.slick-track{*/
/*  height: 100%;*/
/*}*/
/*.slick-slide{*/
/*  margin: 0 100px;*/
/*}*/
/*.slick-slide .slider-img{*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  max-height: 90vh;*/
/*}*/
/*.slick-prev, .slick-next{*/
/*  z-index: 100;*/
/*}*/
/*.slick-prev:before, .slick-next:before{*/
/*  font-size: 75px;*/
/*}*/
/*.slick-prev{*/
/*  left: 10px;*/
/*}*/
/*.slick-next{*/
/*  right: 60px;*/
/*}*/

/*.news-slides-content{*/
/*  position: center;*/
/*  z-index: 1;*/
/*  text-align: center;*/
/*  color: white;*/
/*  width: 100%;*/
/*  bottom: 10rem;*/
/*  background-color: rgba(0, 0, 0, 0.7);*/
/*  min-height: 10rem;*/
/*  padding: 1rem;*/
/*}*/
/*.news-slides-content>p{*/
/*  font-size: 12pt;*/
/*}*/

/*.news-slides-qrcode{*/
/*  position: absolute;*/
/*  z-index: 100;*/
/*  top: 0;*/
/*  text-align: center;*/
/*  border: 5px solid #fff;*/
/*}*/
/*.news-slides-qrcode img{*/
/*  height: 7rem;*/
/*  width: 7rem;*/
/*}*/

/*#news-slider-bg{*/
/*  width: 100vw;*/
/*  height: 100vh;*/
/*  background-size: 100% 100%;*/
/*  position: absolute;*/
/*  z-index: 0;*/
/*  filter: blur(10px);*/
/*}*/

</style>
