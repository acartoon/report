<template>
    <BaseTable :data="data" :heading="heading" />
</template>

<script>
import BaseTable from '@/UI/BaseTable'
import compareNumeric from '@/helpers/compareNumeric'

export default {
    name: 'TablePercent',
    props: ['test', 'title'],
    components: { BaseTable },
    computed: {
        data() {
            return this.test
                .slice(0)
                .sort(compareNumeric)
                .map((el) => {
                    const current = {
                        name: el.name,
                        percent: `${el.percent}%`,
                        count: el.count,
                    }
                    if (el.previous) {
                        current.previous = `${el.percent_previous}% (${el.previous})`
                    }
                    return current
                })
        },
        heading() {
            let current = 0
            let prev = 0
            const heading = [this.title]

            this.test.forEach((el) => {
                current += el.count
                prev += el.previous
            })

            heading.push(`На этой неделе (${current})`)
            if (prev) {
                heading.push(`На прошлой неделе (${prev})`)
            }
            return heading
        },
    },
}
</script>

<style module>
.wrapper {
    margin-bottom: 80px;
}
</style>
