<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-06-29 10:21:34
 * @LastEditors: PiPi
 * @LastEditTime: 2020-06-29 11:45:57
--> 
<template>
  <div>
    <div :id="echartsDomId" style="width: 100%;height:100%;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: "au-echarts",
  components: {},
  props: {
    option: {
      type: Object
    }
  },
  data() {
    return {
      echartsDom: "",
      echartsDomId: new String(new Date().getTime() + parseInt(Math.random() * 100000000)+1)
    };
  },
  methods: {
    init() {
      this.echartsDom = echarts.init(document.getElementById(this.echartsDomId));
      this.echartsSetOption();
      this.echartsOn();
    },
    echartsSetOption() {
      this.echartsDom.setOption(this.option, true);
    },
    echartsOn() {
      this.echartsDom.on("click", params => {
        this.$emit('echartsClick',params);
      });
    }
  },
  created() {
    
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 0);
  },
  watch: {}
}
</script>