<template>
  <div class="siyingqiye">
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '私营企业户数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '城镇私营企业就业人数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '城镇私营企业投资者就业人数',
            type: 'bar',
            stack: 'Adc',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '乡村私营企业就业人数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '乡村私营企业投资者就业人数',
            type: 'bar',
            stack: 'Adc',
            emphasis: {
              focus: 'series'
            },
            data: []
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
      await getCommonData('siyingqiye').then((res) => {
        for (let i = 0; i < res.length; i++) {
          this.option.xAxis[0].data[i] = res[res.length - 1 - i].c1
          this.option.series[0].data[i] = res[res.length - 1 - i].c2
          this.option.series[1].data[i] = res[res.length - 1 - i].c5
          this.option.series[2].data[i] = res[res.length - 1 - i].c6
          this.option.series[3].data[i] = res[res.length - 1 - i].c7
          this.option.series[4].data[i] = res[res.length - 1 - i].c8
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
