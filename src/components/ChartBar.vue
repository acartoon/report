<template>
    <Bar
        :chart-options="options"
        :chart-data="chartData"
        :class="$style.wrapper"
        :width="100"
        :height="100"
    />
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const colors = [
    '#ACCBE8',
    '#9295CA',
    '#A9B1B1',
    '#CDB48C',
    '#E66665',
    '#FFD602',
    '#F47D43',
    '#AE70AF',
    '#076BB6',
    '#E9DFB5',
    '#B38D5E',
    '#06706C',
    '#021260',
];
export default {
    components: {Bar},
    name: "ChartBar",
    props: ['label', 'data', 'title'],
    data() {
        return {
            chartData: {
                labels: this.label,
                datasets: [{
                    data: this.data,
                    backgroundColor: this.data.map((el, idx) => colors[idx]),
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {
                    label: {
                        display: false
                    },
                    legend: {
                        display: false
                    },
                },
                responsive: true,
            },
        }
    }
}
</script>

<style module>
.wrapper {
    width: 60%;

}
</style>