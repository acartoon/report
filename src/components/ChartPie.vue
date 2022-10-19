<template>
    <Pie
    :chart-options="options"
    :chart-data="chartData"
    :class="$style.wrapper"
    :width="100"
    :height="100"/>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
ChartJS.defaults.font.family = "'Roboto', sans-serif";
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
    components: {Pie},
    name: "ChartPie",
    props: ['label', 'data', 'title'],
    data() {
        return {
            chartData: {
                labels: this.label,
                datasets: [{
                    label: 'My First Dataset',
                    data: this.data,
                    backgroundColor: this.data.map((el, idx) => colors[idx]),
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                color: '#494d4e',
                // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                // font: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            padding: 10,
                            labels: {
                                color: 'rgb(255, 99, 132)'
                            },
                            font: {
                                size: 14,
                                lineWidth: 400,
                                weight: 400,
                            }
                        }
                    },
                    title: {
                        display: false,
                        text: this.title
                    }
                }
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