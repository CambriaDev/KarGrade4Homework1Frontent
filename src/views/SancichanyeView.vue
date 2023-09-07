<template>
  <div class="sancichanye">
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
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
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
      await getCommonData('sancichanye').then((res) => {
        this.option.series[0].data = new Array(3)
        this.option.series[0].data[0] = {
          value: res[0].c3,
          name: '第一产业'
        }
        this.option.series[0].data[1] = {
          value: res[0].c4,
          name: '第二产业'
        }
        this.option.series[0].data[2] = {
          value: res[0].c5,
          name: '第三产业'
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
