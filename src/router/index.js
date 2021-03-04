/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:16
 * @LastEditors: PiPi
 * @LastEditTime: 2020-07-09 09:42:22
 */
import Vue from 'vue'
import Router from 'vue-router'

import button from './../examples/button.vue'
import datepicker from './../examples/datePicker.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect: { name: 'intro' }
    // },
    {
      path: '/button',
      name: 'button',
      component: button
    },{
      path: '/datepicker',
      name: 'datepicker',
      component: datepicker
    }
  ]
})
