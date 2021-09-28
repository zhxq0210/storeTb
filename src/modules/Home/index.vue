<template>
  <el-container>
      <el-header>
        <el-breadcrumb separator="/home">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
         <chart :options="polar"></chart>
         <router-view></router-view>
      </el-main>
    
  </el-container>

  
</template>
<script>
import echarts from 'echarts'
    export default{
        name:'home',
        data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  }

    }
    
</script>
<style lang="">
 
</style>