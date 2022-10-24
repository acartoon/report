<template>
    <div>
        <div class="base-wrapper">
            <BaseHeading :class="$style.subheading" tag="h2"
                >1. Количество запросов/разработчиков</BaseHeading
            >
            <BaseTable :heading="statsCount.heading" :data="statsCount.data" />
        </div>

        <div v-if="statsCompared" class="base-wrapper">
            <BaseHeading :class="$style.subheading" tag="h2">
                2. Максимум/минимум запросов/разработчиков
            </BaseHeading>
            <BaseTable
                :heading="statsCompared.heading"
                :data="statsCompared.data"
            />
        </div>
    </div>
</template>

<script>
import sources from '@/sources'
import BaseHeading from '@/UI/BaseHeading'
import BaseTable from '@/UI/BaseTable'

export default {
    name: 'StartInfo',
    props: ['statsCount', 'statsCompared'],
    components: { BaseHeading, BaseTable },
    data() {
        return {
            sources: sources,
        }
    },
}
</script>

<style module>
.subheading {
    text-align: center;
}
</style>
