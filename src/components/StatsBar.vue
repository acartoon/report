<template>
    <div>
        <BaseHeading :class="$style.title" tag="h4">{{ title }}</BaseHeading>
        <ChartBar
            :class="$style.wrapper"
            :label="labels"
            :data="data"
            :title="false"
        />
    </div>
</template>

<script>
import ChartBar from '@/UI/ChartBar'
import BaseHeading from '@/UI/BaseHeading'

export default {
    name: 'StatsBar',
    components: { ChartBar, BaseHeading },
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
