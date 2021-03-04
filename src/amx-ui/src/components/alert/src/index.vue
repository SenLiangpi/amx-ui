<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-06-30 16:55:55
 * @LastEditors: PiPi
 * @LastEditTime: 2020-07-02 13:45:37
--> 
<template>
  <transition name="alert-animated" leave-active-class="slide-up-leave">
    <div class="dcopAlert">
      <div class="alert-icon">
        <a-icon type="info-circle" theme="filled" />
      </div>
      <div class="alert-text">
        <slot></slot>
      </div>
      <a class="alert-close">
        <a-icon class="alert-close-icon" type="close" @click="closeOnclick()" />
      </a>
    </div>
  </transition>
</template>
<script>
export default {
  name: "antd-alert",
  components: {
  },
  props: {
    
  },
  data() {
    return {
    };
  },
  methods: {
    closeOnclick(){
      this.$emit('alertClose');
    }
  },
  created() {
  },
  watch: {
  }
};
</script>
<style scoped>
/* @import 'ant-design-vue/dist/antd.css'; */
  .dcopAlert{
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    padding: 8px 15px 8px 37px;
    border-radius: 4px;
    padding-right: 30px;
  }
  .dcopAlert .alert-icon{
    color: #1890ff;
    position: absolute;
    top: 9px;
    left: 16px;
  }
  .dcopAlert .alert-text{
    /* display: inline-block; */
  }
  .dcopAlert .alert-close{
    position: absolute;
    top: 8px;
    right: 16px;
    overflow: hidden;
    font-size: 12px;
    line-height: 22px;
    cursor: pointer;
  }
  .dcopAlert .alert-close .alert-close-icon{
    color: #00000073;
    display: inline-block;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  .dcopAlert .alert-close .alert-close-icon:hover{
    color: #3b3b3b;
    transition: color 0.3s;
  }
  .slide-up-leave {
    height: 0;
    padding: 0 30px 0 37px;
    margin-bottom: 0px;
    animation: antAlertSlideUpOut 0.3s;
    transition: height 0.3s,padding 0.3s,margin-bottom 0.3s;
  }
  @keyframes antAlertSlideUpOut {
    0% {
      transform: scaleY(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
</style>