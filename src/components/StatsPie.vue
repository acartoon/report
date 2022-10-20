<template>
    <div>
        <BaseHeading :class="$style.title" tag="h4">{{ title }}</BaseHeading>
        <ChartPie
            :class="$style.wrapper"
            :label="labels"
            :data="datasets"
            :title="false"
        />
    </div>
</template>

<script>
import ChartPie from '@/UI/ChartPie'
import BaseHeading from '@/UI/BaseHeading'

export default {
    name: 'StatsPie',
    components: { ChartPie, BaseHeading },
    props: ['dataKey', 'title', 'data'],
    computed: {
        datasets() {
            return this.data.map((el) => el[this.dataKey])
        },
        labels() {
            return this.data.map((el) => el.name)
        },
    },
}
</script>

<style module>
.title {
    text-align: center;
    margin-bottom: 20px;
}

.wrapper {
    margin: auto;
}
</style>
