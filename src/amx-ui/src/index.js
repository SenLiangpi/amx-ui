/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: PiPi
 * @LastEditTime: 2020-07-10 17:08:25
 */
import Vue from 'vue'
// import './style/reset.css'
import theme from './theme'

import Directives from './directives'
// import all comps
import echarts from './components/echarts'
import antdAlert from './components/alert'
import drawingBoard from './components/drawingBoard'
import datePicker from './components/datePicker'

// add all comps into an array
export const components = [
  echarts,antdAlert,drawingBoard,datePicker
]

// export comps one by one
export {
  echarts,antdAlert,drawingBoard,datePicker
}

// export all comps as an object
const AmxUi = {
  echarts,antdAlert,drawingBoard,datePicker
}

AmxUi.install = function (Vue, options = {}) {
  // install all the comps
  components.forEach(component => {
    if (component.name) Vue.component(component.name, component)
  })
  // Vue.prototype.$messageBox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$message = Message
  // Vue.prototype.$loading = Loading
}

// add direvtives installing function
AmxUi.direvtive = function (Vue) {
  for (let name in Directives) {
    Vue.directive(name, Directives[name])
  }
}

// add theme generator function
AmxUi.theme = theme
// gen default theme
AmxUi.theme()
// set font family for html and body
document.body.style.fontFamily = '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif'
// gen directive
AmxUi.direvtive(Vue)
export default AmxUi
