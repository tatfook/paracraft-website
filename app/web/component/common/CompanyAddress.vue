<template>
  <div class="address">
    <div class="address-panel" style="" id="dituContent"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  name: 'CompanyAddress',
  mounted() {
    window.scrollTo(0, 0)
    this.initMap()
  },
  methods: {
    initMap() {
      this.createMap() //创建地图
      this.setMapEvent() //设置地图事件
      this.addMapControl() //向地图添加控件
    },
    createMap() {
      var map = new BMap.Map('dituContent') //在百度地图容器中创建一个地图
      var point = new BMap.Point(113.961104, 22.54512) //定义一个中心点坐标
      map.centerAndZoom(point, 27) //设定地图的中心点和坐标并将地图显示在地图容器中
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE) //跳动的动画
      window.map = map //将map变量存储在全局
    },
    setMapEvent() {
      map.enableDragging() //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom() //启用地图滚轮放大缩小
      map.enableDoubleClickZoom() //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard() //启用键盘上下左右键移动地图
    },
    addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      })
      map.addControl(ctrl_nav)
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      })
      map.addControl(ctrl_ove)
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })
      map.addControl(ctrl_sca)
    }
  }
}
</script>
<style lang="scss" scoped>
.address {
  &-panel {
    width: 60%;
    min-height: 800px;
    border: #ccc solid 1px;
    margin: 20px auto;
  }
}
</style>


