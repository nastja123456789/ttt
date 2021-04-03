<template>
  <svg>
    <circle v-for="dot in dots" v-bind:key=dot.id :id='dot.id' :cx='dot.cx' :cy='dot.cy' r="10" />


  </svg>
</template>

<script>
export default {
  data () {
    return {
      dots : [
        {id:"dot3a-11", cx:"188.5",cy:"480.92383"},
        {id:"dot3a-10", cx:"186.5",cy:"423.42383"},
        {id:"dot3a-9", cx:"186.5",cy:"363.42383"}
      ]
    }
  }}
</script>

<style scoped>
circle{

  fill:rgb(255, 0, 212);
  fill-opacity:1;
  stroke:#000000;
}
</style>
