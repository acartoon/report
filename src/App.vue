<template>
    <Component :is="component" />
</template>

<script>
import BaseWeek from '@/components/BaseWeek'
import BaseMonth from '@/components/BaseMonth'
import BaseQuarter from '@/components/BaseQuarter'

console.log(process.env)
export default {
    components: { BaseMonth, BaseWeek, BaseQuarter },
    data() {
        return {
            type: process.env.VUE_APP_REPORT_TYPE,
        }
    },
    computed: {
        component() {
            const component = {
                week: BaseWeek,
                month: BaseMonth,
                quarter: BaseQuarter,
            }
            return component[this.type]
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
</style>
