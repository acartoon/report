<template>
    <BaseHeader :start="period.start" :end="period.end" :type="type" />
    <StartInfo :projects="projectsStats" :developers="developersStats" />
    <TotalStats :requests="requests" :developers="developers" :total="total" />
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import axios from 'axios'
import StartInfo from '@/components/StartInfo'
import json from './json.json'
import TotalStats from '@/components/TotalStats'

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
    // mounted() {
    //     this.getData().then(({type, period, requests,developers, total  }) => {
    //         this.type = type;
    //         this.period = period;
    //         this.requests = requests;
    //         this.developers = developers;
    //         this.total = total;
    //     })
    // },
    methods: {
        async getData() {
            return axios.get('/json.json')
        },
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
