/* eslint-disable */
<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: PiPi
 * @LastEditTime: 2020-06-29 15:19:25
 -->
<style lang="scss" scoped>
  #app {
    height: 100%;
    .banner {
      font-size: 30px;
      padding: 10px 20px;
    }
    .menu {
      width: 210px;
    }
  }
</style>

<template>
  <div id="app" class="au-theme-background-color--base-11">
      <div slot="header">
        <!-- <h3 class="banner">AMX UI 2</h3> -->
        <!-- <h3 class="banner"><img src="./assets/logo.png" /></h3> -->
      </div>
      <div class="progress">
        <div
         class="progress-bar progress-bar-striped progress-bar-animated" 
         role="progressbar" 
         aria-valuenow="75" 
         aria-valuemin="0" 
         aria-valuemax="100" 
         style="width: 75%"></div>
      </div>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
