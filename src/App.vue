<template>
    <BaseHeader :start="period.start" :end="period.end" :type="type" />
    <StartInfo :projects="projectsStats" :developers="developersStats" />
    <TotalStats :requests="requests" :developers="developers" :total="total" />
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import StartInfo from '@/components/StartInfo'
import TotalStats from '@/components/TotalStats'
import json from './10_10.json'

export default {
    components: { StartInfo, BaseHeader, TotalStats },
    data() {
        return {
            type: json.type,
            period: json.period,
            requests: json.requests,
            developers: json.developers,
            total: json.total,
        }
    },
    computed: {
        datasets() {
            return this.requests.grades.map((el) => el.percent)
        },
        labels() {
            return this.requests.grades.map((el) => el.name)
        },
        projectsStats() {
            return {
                current: this.requests.current,
                previous: this.requests.previous,
                max: this.requests.max,
                min: this.requests.min,
            }
        },
        developersStats() {
            return {
                current: this.developers.current,
                previous: this.developers.previous,
                max: this.developers.max,
                min: this.developers.min,
            }
        },
    },
}
</script>
<style>
html {
    font-family: 'Roboto', sans-serif;

    margin: 0;
    color: #3c3f40;
    font-size: 16px;
    line-height: 1.75;
}

body {
    margin: 0;
}

p {
    margin-bottom: 1rem;
}

.base-wrapper {
    margin-bottom: 120px;
}
</style>
