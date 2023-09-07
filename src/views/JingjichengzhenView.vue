<template>
  <div class="jingjichengzhen">
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
            name: '国有单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '城镇集体单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '股份合作单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '联营单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '有限责任公司城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '股份有限公司城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '私营企业单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '港澳台投资商单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '外资投资单位城镇就业人员',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '个体城镇就业人员',
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
      await getCommonData('jingjichengzhen').then((res) => {
        for (let i = 0; i < res.length; i++) {
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
