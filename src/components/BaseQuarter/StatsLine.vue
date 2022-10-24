<template>
    <Line
        :chart-data="chartData"
        :width="100"
        chart-id="stats"
        :height="33"
        :chart-options="options"
    />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, registerables } from 'chart.js'
import randomColor from '@/helpers/randomColor'
ChartJS.register(...registerables)

export default {
    name: 'StatsLine',
    props: ['data', 'titles'],
    components: { Line },
    data() {
        const colors = randomColor({
            luminosity: 'light',
            count: this.data.length,
        })
        return {
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: false,
                    },
                },
            },
            chartData: {
                labels: this.titles,
                datasets: this.data.map((item, idx) => ({
                    ...item,
                    backgroundColor: colors[idx],
                    borderColor: colors[idx],
                })),
            },
        }
    },
}
</script>

<style scoped></style>
