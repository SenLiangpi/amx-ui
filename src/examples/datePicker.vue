<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-07-08 17:55:11
 * @LastEditors: PiPi
 * @LastEditTime: 2020-07-13 12:19:05
--> 
<template>
  <div class="data-picker-examples">
    <au-date-picker v-model="value" style="width: 300px;"></au-date-picker>
  </div>
</template>
<script>
export default {
  name: "data-picker-examples",
  components: {
  },
  props: {
    
  },
  data() {
    return {
      value: ['2020-1','2020-2']
    };
  },
  methods: {
   
  },
  created() {
    
  },
  mounted() {
    
  },
  watch: {}
}
</script>
<style scoped>
  .data-picker-examples{
    padding: 20px;
  }
</style>