<template>
  <div class="hangyeguoyou">
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
            name: '2',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '3',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '4',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '5',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '6',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '7',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '8',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '9',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '10',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '11',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '12',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '13',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '14',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '15',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '16',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '17',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '18',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '19',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '20',
            type: 'bar',
            stack: 'Ad',
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
      await getCommonData('hangyeguoyou').then((res) => {
        for (let i = 0; i < res.length; i++) {
          // until c21
          this.option.xAxis[0].data[i] = res[res.length - 1 - i].c1
          this.option.series[0].data[i] = res[res.length - 1 - i].c3
          this.option.series[1].data[i] = res[res.length - 1 - i].c4
          this.option.series[2].data[i] = res[res.length - 1 - i].c5
          this.option.series[3].data[i] = res[res.length - 1 - i].c6
          this.option.series[4].data[i] = res[res.length - 1 - i].c7
          this.option.series[5].data[i] = res[res.length - 1 - i].c8
          this.option.series[6].data[i] = res[res.length - 1 - i].c9
          this.option.series[7].data[i] = res[res.length - 1 - i].c10
          this.option.series[8].data[i] = res[res.length - 1 - i].c11
          this.option.series[9].data[i] = res[res.length - 1 - i].c12
          this.option.series[10].data[i] = res[res.length - 1 - i].c13
          this.option.series[11].data[i] = res[res.length - 1 - i].c14
          this.option.series[12].data[i] = res[res.length - 1 - i].c15
          this.option.series[13].data[i] = res[res.length - 1 - i].c16
          this.option.series[14].data[i] = res[res.length - 1 - i].c17
          this.option.series[15].data[i] = res[res.length - 1 - i].c18
          this.option.series[16].data[i] = res[res.length - 1 - i].c19
          this.option.series[17].data[i] = res[res.length - 1 - i].c20
          this.option.series[18].data[i] = res[res.length - 1 - i].c21
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
