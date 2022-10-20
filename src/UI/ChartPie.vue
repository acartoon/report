<template>
    <Pie
        :chart-options="options"
        :chart-data="chartData"
        :class="$style.wrapper"
        :width="100"
        :height="100"
    />
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
} from 'chart.js'
import randomColor from '@/helpers/randomColor'
import { label } from '@/constants'
ChartJS.defaults.font.family = "'Roboto', sans-serif"
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
)
const luminosity = 'blue'

export default {
    components: { Pie },
    name: 'ChartPie',
    props: ['label', 'data', 'title'],
    data() {
        return {
            chartData: {
                labels: this.label,
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: this.data,
                        backgroundColor: randomColor({
                            hue: luminosity,
                            count: this.data.length,
                        }),
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                color: '#494d4e',
                // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                // font: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                plugins: {
                    tooltip: {
                        displayColors: false,
                        callbacks: {
                            label: label,
                        },
                    },
                    legend: {
                        position: 'top',
                        labels: {
                            padding: 10,
                            labels: {
                                color: 'rgb(255, 99, 132)',
                            },
                            font: {
                                size: 14,
                                lineWidth: 400,
                                weight: 400,
                            },
                        },
                    },
                    title: {
                        display: false,
                        text: this.title,
                    },
                },
            },
        }
    },
}
</script>

<style module lang="scss">
.wrapper {
    @media (min-width: 768px) {
        width: 60%;
    }
}
</style>
