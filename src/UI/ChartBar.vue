<template>
    <Bar
        :chart-options="options"
        :chart-data="chartData"
        :class="$style.wrapper"
        :width="size.width"
        :height="size.height"
    />
</template>

<script setup></script>
<script>
import { Bar } from 'vue-chartjs'
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
import mediaQuery from '@/Use/mediaQuery'
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
)
// const luminosity = 'blue'

export default {
    components: { Bar },
    name: 'ChartBar',
    props: ['label', 'data', 'title'],
    setup() {
        const media = mediaQuery()
        return { media }
    },
    computed: {
        size() {
            return {
                width: 100,
                height: this.media.type !== 'lg' ? 100 : 30,
            }
        },
    },
    data() {
        // console.log(this.media.type)
        return {
            chartData: {
                labels: this.label,
                datasets: [
                    {
                        data: this.data,
                        backgroundColor: randomColor({
                            luminosity: 'light',
                            count: this.data.length,
                        }),
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                plugins: {
                    label: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        displayColors: false,
                        padding: 8,

                        footerMarginTop: 0,
                        footerSpacing: 0,
                        footerAlign: 0,
                        callbacks: {
                            label: function () {
                                return ''
                            },
                            title: function (context) {
                                const [ctx] = context
                                const { formattedValue, label } = ctx

                                return `${label} ${formattedValue}`
                            },
                        },
                    },
                },
                responsive: true,
            },
        }
    },
}
</script>

<style module lang="scss">
.wrapper {
    @media (min-width: 768px) {
        width: 90%;
    }
}
</style>
