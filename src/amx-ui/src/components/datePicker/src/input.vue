<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-07-08 10:49:16
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-09 14:43:12
--> 
<template>
  <input v-model="dataValue" class="au-input" type="text" placeholder="开始日期">
</template>
<script>
export default {
  name: "au-input",
  components: {},
  props: ['value'],
  data() {
    return {
      dataValue: this.value
    };
  },
  model: {
    prop: "value", //绑定的值，通过父组件传递
    event: "update" //自定义时间名
  },
  methods: {
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
    },
    value: {
      handler(val, oldVal) {
        this.dataValue = val
      },
      deep: true
    }
  }
}
</script>
<style scoped>
  .au-input{
    border: none;
    background-color: rgba(0,0,0,0);
  }
  .au-input:focus{
    outline: none;
    border-bottom: 2px solid #188ffd;
    animation: antAlertSlideUpOut 1s;
  }
  @keyframes antAlertSlideUpOut {
    0% {
     border-bottom: 2px solid rgba(0,0,0,0);
    }
    100% {
      border-bottom: 2px solid #188ffd;
    }
  }
</style>