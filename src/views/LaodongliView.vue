<template>
  <div class="laodongli">
    <div id="main" style="width: 75vw; height: 60vh; margin: 5vh 10vw 5vh 10vw"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getCommonData } from '../api/common'

export default {
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    }
  },

  mounted() {
    this.onMounted()
  },

  methods: {
    async fetchData() {
      await getCommonData('laodongli').then((res) => {
        for (let i = 0; i < res.length; i++) {
          this.option.xAxis.data[i] = res[res.length - 1 - i].year
          this.option.series[0].data[i] = res[res.length - 1 - i].population10K
        }
        console.log('ok')
      })
    },

    initChart() {
      const chart = echarts.init(document.getElementById('main'))
      chart.setOption(this.option)
      console.log('++')
    },

    async onMounted() {
      await this.fetchData()
      this.initChart()
    }
  }
}
</script>
