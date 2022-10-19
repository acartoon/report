<template>
    <div>
        <h3 :class="$style.title">{{title}}</h3>
        <ChartPie
                :class="$style.wrapper"
            :label="labels"
            :data="datasets"
            :title="false"
        />
    </div>
</template>

<script>
import ChartPie from "@/components/ChartPie";

export default {
    name: 'StatsPie',
    components: {ChartPie},
    props: ['dataKey', 'title', 'data'],
    computed: {
        datasets() {
            return this.data.map((el) => el[this.dataKey])
        },
        labels() {
            return this.data.map((el) => el.name)
        },
    }
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