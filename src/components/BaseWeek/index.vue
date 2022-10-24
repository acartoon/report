<template>
    <BaseHeader :type="type" :period="interval" />
    <StartWeek :projects="projectsStats" :developers="developersStats" />
    <TotalStats :requests="requests" :developers="developers" :total="total" />
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import StartWeek from './StartWeek'
import TotalStats from '../TotalStats'
import json from './week.json'

export default {
    components: { StartWeek, BaseHeader, TotalStats },
    name: 'BaseWeek',
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
        interval() {
            return `${this.period.start} - ${this.period.end}`
        },
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
