<template>
    <Line
        :chart-data="data"
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

const colors = randomColor({
    luminosity: 'light',
    count: 3,
})
const chartData = {
    labels: ['React', 'Vue', 'PHP', 'JAVA', 'DevOps', 'Flutter', 'QA', '1C'],
    datasets: [
        {
            label: 'Сентябрь',
            backgroundColor: colors[0],
            borderColor: colors[0],
            data: [40, 39, 10, 40, 39, 80, 40, 60],
            yAxisID: 'y',
        },
        {
            label: 'Октябрь',
            backgroundColor: colors[1],
            borderColor: colors[1],
            data: [45, 28, 50, 10, 40, 20, 38, 24],
            yAxisID: 'y',
        },
        {
            label: 'Ноябрь',
            backgroundColor: colors[2],
            borderColor: colors[2],
            data: [15, 20, 30, 20, 15, 60, 45, 38],
            yAxisID: 'y',
        },
    ],
}
export default {
    name: 'StatsLine',
    components: { Line },
    data() {
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
            data: chartData,
        }
    },
}
</script>

<style scoped></style>
