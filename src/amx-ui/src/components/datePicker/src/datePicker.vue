<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-07-08 14:18:00
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-09 14:27:27
--> 
<template>
  <div class="au-data-picker">
    <au-input v-model="dataValue[0]" class="au-data-picker-input-left"></au-input>
    <a-icon class="au-data-picker-ionic1" type="swap-right" />
    <au-input v-model="dataValue[1]" class="au-data-picker-input-right"></au-input>
    <a-icon @mouseover="ionic2Mouseover" @mouseout="ionic2Mouseout" @click="clear" class="au-data-picker-ionic2" :theme="ionic2Theme" :type="ionic2Type" />
    <!-- <a-icon type="" /> -->
  </div>
</template>
<script>
import input from "./input.vue"
export default {
  name: "au-date-picker",
  components: {
    'au-input': input,
  },
  props: {
    value: {
      type: Array
    }
  },
  computed: {
  },
  model: {
    prop: "value", //绑定的值，通过父组件传递
    event: "update" //自定义时间名
  },
  data() {
    return {
      ionic2Type: 'calendar',
      ionic2Theme: 'outlined',
      dataValue: this.value
    };
  },
  methods: {
    ionic2Mouseover(){
      if(this.dataValue[0]){
        this.ionic2Type = 'close-circle'
        this.ionic2Theme = 'filled'
      }
    },
    ionic2Mouseout(){
      this.ionic2Type = 'calendar'
      this.ionic2Theme = 'outlined'
    },
    clear(){
      if(this.dataValue){
        this.dataValue = []
        this.$emit('change',this.dataValue);
      }
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  watch: {
    dataValue: {
      handler(val, oldVal) {
        this.$emit("update", val);
      },
      deep: true
    }
  }
}
</script>
<style scoped >
  .au-data-picker{
    position: relative;
  }
  .au-data-picker-input-left{
    width: calc(50% - 26px);
  }
  .au-data-picker-input-right{
    width: calc(50% - 26px);
    margin-left: 30px;
  }
  .au-data-picker-ionic1{
    position: absolute;
    left: calc(50% - 18px);
    top: 4px;
  }
  .au-data-picker-ionic2{
    margin-left:5px;
    position: absolute;
    right: 0;
    top: 4px;
  }
</style>