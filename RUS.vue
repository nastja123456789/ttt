<template>


  <div class="ty">
    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups" style="margin-top: 1em;">
      <div class="input-group autocomplete-wrapper col-md-4 mt-3 mr-3">

        <input v-model="ru" type="text" class="n" placeholder="Введите Вашу фамилию">

          <button v-on:click="search" class="m"><h6 class="tex">Студент</h6></button>
        <v-text-field class="rec">
          <!--<div >
            <b-form-datepicker v-model="value" ></b-form-datepicker>
            <p>Дата: {{ value }}</p>
            <div>-->
          <b-input-group>
            <b-form-input
                id="example-input"
                v-model="value"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
            ></b-form-input>
            <b-form-datepicker
                id="example-i18n-picker"
                v-model="value"
                button-only
                right
                aria-controls="example-input"
                :locale="locale"
                :start-weekday="weekday"
                :show-decade-nav="showDecadeNav"
                :hide-header="hideHeader"
                class="mb-2"
                @context="onContext"
            ></b-form-datepicker>
<!--              <b-form-datepicker-->
<!--                  v-model="value"-->
<!--                  button-only-->
<!--                  right-->
<!--                  locale="en"-->
<!--                  :start-weekday='Monday'-->
<!--                  aria-controls="example-input"-->
<!--                  @context="onContext"-->
<!--              ></b-form-datepicker>-->
                      </b-input-group>
        </v-text-field>
      </div>

    </div>


      <table class="ad">
      <tbody class="advice-variant border" v-for="a in id_type.data" :key="a" v-on:click="found(a['id'])">
      <tr>
        <td rowspan="2" class="p-1" style="width: 8%;">
          <i class="mdi">{{a["type"]}}</i>
        </td>
        <td class="p-1 font-weight-bold">
          <p style="font-size:10pt;">{{a["label"]}}</p>
        </td>
      </tr>
      <tr>
        <td class="pb-1 pl-1 font-weight-light">
          <small style="font-size:8pt;">{{a["description"]}}</small>
          <br>
          <small style="font-size:8pt;">{{a["id"]}}</small>
        </td>
      </tr>
      </tbody>
    </table>


      <ul class="v-lists">
    <li class="adv" v-for="i in ruz.data" :key="i" >
      <v-date-timetable class="co">
        <div class="b">
          <div class="bo">
            <div class="d">{{i['date']}}</div>
            <div class="w">{{i['dayOfWeekString']}}</div>

          </div>
        </div>
      </v-date-timetable>
      <ul class="fr">
        <li >
      <v-time>
        <div class="lol">
        <div >
        <div >
          <div >{{i['beginLesson']}}-{{i['endLesson']}}</div>

      </div>
          <div ><small>{{i['lessonNumberStart']}}-я пара</small></div>
        </div>
        </div>
      </v-time>
      <v-list >
        <div class="to">
        <v-item-list >
        <div class="disc">
          <div class="disctext">
          {{i['discipline']}}
          </div>
          </div>
        </v-item-list>
          <v-item-list>
        <div class="type">
          <div class="typetext">
          {{i['kindOfWork']}}
          </div>
        </div>
      </v-item-list>
            <v-item-list >
              <div class="aud">
                <div class="aud_text">
              {{i['auditorium']}}
                </div>
                <div class="build">({{i['building']}})</div>
              </div>
            </v-item-list>
            <v-item-list>
            <div class="lectur">
              <div class="lectur_text">{{i['lecturer']}}
              </div>
              </div>
            </v-item-list>

        </div>
      </v-list>

        </li></ul>


    </li>
</ul>
    </div>

</template>

<script>

import axios from "axios";

export default {
name: "RUS",

  data() {
    return {
      id_:'',
      weekday: 1,
      weekdays: [
        { value: 0, text: 'Sunday' },
        { value: 1, text: 'Monday' },
        { value: 6, text: 'Saturday' }
      ],
      picker: new Date().toISOString().substr(0, 10),
      color:'yellow',
      time: 6,
      id_type: [],
      i: '0',
      ru: "",
      id: "",
      type: "",
      ruz: [],
      value: '',
      formatted: '',
      selected: '',

    }
  },
  mounted() {
  //   setTimeout(  () => {
  //     if (!this.ruz.length) {
  //       this.$router.push({ path: 'sleepmenu' })
  //     }
  //   },100000)
  },

  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD

  },
search: function() {

  axios

      .get('http://192.168.255.133/api/search?str='+this.ru)
      //.then(response => (this.data = response.data.menu));
      .then(response => (this.id_type = response));

},
    found: function(id_) {

  axios

    //.get('http://192.168.255.133/api/schedule?type=student&id=236358&start=2021-01-01&finish=2021-01-31')
      .get('http://192.168.255.133/api/schedule?type=student&id='+id_+'&start='+this.value+'&finish='+this.value)

      .then(response => (this.ruz = response));

//   for (let i in this.id_type.data) {
//    console.log(this.id_type.data);
//    if (i["label"] == this.ru) {
//      this.type = i["type"]
//      this.id = i["id"]
//      axios
          //.get('http://192.168.255.133/api/schedule?type=' + this.type + '&id=' + this.id + '&start=2021-01-01&finish=2021-01-31')
//          .get('http://192.168.255.133/api/schedule?type=' + 'student' + '&id=' + '236358' + '&start=2021-01-01&finish=2021-04-31')
//          .then(response => (this.ruz = response));
//    }
//  }
    }

}
}
</script>

<style >
.to{
  margin-left: 100px;
}

.lol{

}
.fr{
  margin-left: 200px;
  margin-top: 20px;
}
.adv{

}
.left{
  left: 0;
}
.right{
  right: 0;
}
.ty{
  margin-right: 600px;
}
.b{
  width: 95px;
  height: 100px;
  background: rgba(255, 140, 0, 0.4);
}
.lesson{
  position: absolute;
  left: 0%;
  right: 36.84%;
  top: 72.73%;
  bottom: 0%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #000000;
}
.lectur_text{
  position: static;
  width: 356px;
  height: 21px;
  left: 40px;
  top: 4.5px;

  /* Regular */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  /* black / 0.87 */

  color: rgba(0, 0, 0, 0.87);


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 0px 0px;
}
.lectur{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 412px;
  height: 30px;
  left: 0px;
  top: 98px;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 10px;
}
.build{
  position: static;
  width: 450px;
  height: 21px;
  left: 71px;
  top: 4.5px;

  /* Adress(timetable) */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;
  color: #999999;
  flex: none;
  order: 2;
  align-self: center;
  flex-grow: 0;
  margin: 10px;
}
.aud{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 16px;
  position: static;
  width: 280px;
  height: 30px;
  left: 0px;
  top: 68px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}
.aud_text{
  position: static;
  width: 250px;
  height: 19px;
  left: 40px;
  top: 5.5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 10px;
}
.disctext{
  position: static;
  width:700px;
  height: 21px;
  left: 16px;
  top: 4.5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 0px;
}
.typetext{
  position: static;
  width: 700px;
  height: 21px;
  left: 40px;
  top: 4.5px;
  font-family: Roboto;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: right;
  color: rgba(102, 102, 102, 0.73);
  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 0px 0px;
}
.type{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 119px;
  height: 30px;
  left: 0px;
  top: 38px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px;
}
.disc{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 364px;
  height: 30px;
  left: 0px;
  top: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.interval{
  position: absolute;
  left: 0.75%;
  right: 0%;
  top: 16.45%;
  bottom: 50.65%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
}
.begin_end{
  position: absolute;
  left: 0%;
  right: 1.5%;
  top: 0%;
  bottom: 39.39%;

  background: rgba(230, 230, 230, 0.6);
}
.rec{
  position: absolute;
  width: 200px;
  left: 1200px;
  right: 0%;
  top: 145px;
  bottom: 0%;

  background: #FFFFFF;
  border: 1px solid rgba(153, 153, 153, 0.67);
  box-sizing: border-box;
  border-radius: 5px;
}
.ad{

  margin-top: 220px;
  margin-left: 50px;
}
.tex{
  position: static;
  width: 109px;
  height: 36px;
  left: calc(50% - 109px/2 - 23.16px);
  bottom: 7px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  mix-blend-mode: normal;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.co{
  position: absolute;
  left: 4.48%;
  top: 30%;
  margin-left: 0px;
  margin-top: 30px;
  bottom: 55%;
}
.m{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  height: 50px;
  position: absolute;
  left: 20px;
  right: -68.14%;
  top: 145px;
  bottom: 74.49%;
  background: rgba(255, 140, 0, 0.62);
  mix-blend-mode: normal;
  border-radius: 4px;
}
.v-lists{
  position: absolute;
  width: 880px;
  height: 140px;
  left: 1000px;
  top: 240px;
}

.btn-toolbar{
  margin-top: 3em;
  margin-left: 2em;
}

.rt{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px;

  position: absolute;
  left: 15.11%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  border-radius: 4px;
}
.tim{
  position: absolute;
  left: 0%;
  right: 84.89%;
  top: 9.29%;
  bottom: 43.57%;
}
.w {
  position: absolute;
  left: 21.05%;
  right: 21.05%;
  top: 5%;
  bottom: 68%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
.d{
  position: absolute;
  left: 10%;
  top: 50%;

  background: #FFFFFF;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
.n{
  position: absolute;
  width: 630px;
  height: 50px;
  left: 303px;
  top: 147px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
}

</style>
