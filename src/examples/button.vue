<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: PiPi
 * @LastEditTime: 2020-07-02 17:17:26
--> 
<template>
  <div class="page">
    <p>1111111111</p>
    <!-- <au-panel class="section" title="组件描述"> -->
    <!-- <p class="paragraph">
        按钮组件，不同颜色的按钮，还有空心按钮
    </p>-->
    <!-- 组件示例 -->
    <div class="component-example">
      <!-- <au-button icon="home" type="primary" @click="loading = !loading" plain>按钮</au-button>
        <au-button type="danger" :loading="loading">按钮</au-button>
      <au-button type="primary" plain :loading="loading">按钮</au-button>-->
      
      <au-echarts style="height: 500px;" :option="option"></au-echarts>

      <antd-alert v-if="alertType" @alertClose="alertType=false" style="width: 750px;">
        <span>1. 修改顾问后，当日所有未完成的交车任务将自动转给该顾问。</span>
        <br />
        <span>2. 未排班当日的交车任务将分配至服务经理/总监 。</span>
      </antd-alert>
      <au-drawing-board 
        :option="{
          strokeStyle: '#000',
          lineWidth: 30
        }"
        style="height: 500px;border: 1px solid #000;">
      </au-drawing-board>
      <!-- <au-button type="primary" icon="home"></au-button>
        <au-button type="primary">hello</au-button>
        <au-button type="primary" icon="home" style="width: 80px;">helloasdfjasfjasfllkafjsfdljalskdfjl</au-button>
      <au-button type="primary" icon="home" disabled></au-button>-->
    </div>
    <!-- 组件示例 -->
    <!-- </au-panel> -->
  </div>
</template>
<script>
export default {
  name: "button-examples",
  data() {
    return {
      loading: true,
      alertType: true,
      option: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    }
  }
}
</script>
