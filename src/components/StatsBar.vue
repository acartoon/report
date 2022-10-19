<template>
    <div>
        <h3 :class="$style.title">{{title}}</h3>
        <ChartBar
            :class="$style.wrapper"
            :label="labels"
            :data="data"
            :title="false"
        />
    </div>
</template>

<script>
import ChartBar from "@/components/ChartBar";

export default {
    name: 'StatsBar',
    components: {ChartBar},
    props: ['labels', 'title', 'data'],
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