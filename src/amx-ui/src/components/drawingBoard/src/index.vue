<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-07-02 16:34:57
 * @LastEditors: PiPi
 * @LastEditTime: 2020-07-02 17:09:22
--> 
<template>
  <div>
    <div :id="DomId" style="width: 100%;height:100%;"></div>
  </div>
</template>
<script>
class sketchpad {
  sketchpad(json) {
    this.sketchpadDom = json.id
    this.sketchpadIf = false
    const c = document.getElementById(this.sketchpadDom),
      ctx = c.getContext("2d")
    let mousePressed = false, lastX, lastY
    InitThis();
    function InitThis() {
      c.addEventListener("touchstart", function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();
          var touch = event.targetTouches[0];
          mousePressed = true;
          Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, false);
        }
      }, false);
      c.addEventListener("touchmove", function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();
          var touch = event.targetTouches[0];
          if (mousePressed) Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
        }
      }, false);
      c.addEventListener("touchend", function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault(); mousePressed = false;
        }
      }, false);
      c.onmousedown = function (event) {
        mousePressed = true; Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, false);
      };
      c.onmousemove = function (event) {
        if (mousePressed) Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
      };
      c.onmouseup = function (event) { mousePressed = false; };
    }
    let Draw = (x, y, isDown) => {
      if (isDown) {
        this.sketchpadIf = true;
        ctx.strokeStyle = json.strokeStyle;
        ctx.lineWidth = json.lineWidth;
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
      }
      lastX = x; lastY = y;
    }
  }
  clearArea(){
    if (this.sketchpadIf) {
      const c = document.getElementById(this.sketchpadDom),
        ctx = c.getContext("2d")
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.sketchpadIf = false
    }
  }
  saveImageInfo(){
    if (this.sketchpadIf) {
      const c = document.getElementById(this.sketchpadDom)
      return c.toDataURL("image/png")
    }
    return this.sketchpadIf
  }
}
let exterior = new sketchpad();
export default {
  name: "au-drawing-board",
  components: {},
  props: {
    option: {
      type: Object
    }
  },
  data() {
    return {
      DomId: new String(new Date().getTime() + parseInt(Math.random() * 100000000)+1)
    };
  },
  methods: {
    
  },
  created() {
    
  },
  mounted() {
    let canvasDomId = new String(new Date().getTime() + parseInt(Math.random() * 100000000)+1)
    let dom = document.getElementById(this.DomId)
    var canvasDom = document.createElement('canvas');
    console.log(dom.style.width)
    canvasDom.width = dom.clientWidth
		canvasDom.height = dom.clientHeight
    canvasDom.id = canvasDomId
    dom.appendChild(canvasDom)
    exterior.sketchpad({
      id: canvasDomId,
      strokeStyle: this.option.strokeStyle,
      lineWidth: this.option.lineWidth
    })
  },
  watch: {}
}
</script>