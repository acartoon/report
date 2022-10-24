<template>
    <BaseContainer>
        <StartInfo :stats-compared="statsCount" :stats-count="statsCount" />
    </BaseContainer>
</template>

<script>
import sources from '@/sources'
import BaseContainer from '@/UI/BaseContainer'
import getNameDay from '@/helpers/getNameDay'
import StartInfo from '@/components/StartInfo'

export default {
    name: 'StatsMonth',
    props: ['projects', 'developers'],
    components: { BaseContainer, StartInfo },
    data() {
        return {
            sources: sources,
        }
    },
    computed: {
        maxMin() {
            const data = [
                [
                    'Запросы',
                    getNameDay(this.projects.min),
                    getNameDay(this.projects.max),
                ],
                [
                    'Разработчики',
                    getNameDay(this.developers.min),
                    getNameDay(this.developers.max),
                ],
            ]
            return {
                heading: ['', 'Минимум', 'Максимум'],
                data: data,
            }
        },
        statsCount() {
            const data = [
                ['Запросы', this.projects.current],
                ['Разработчики', this.developers.current],
            ]

            if (this.projects.previous) {
                data[0].push(this.projects.previous)
            }
            if (this.developers.previous) {
                data[1].push(this.developers.previous)
            }

            const heading = ['', 'Текущий месяц']

            if (this.projects.previous || this.developers.previous) {
                heading.push('Предыдущий месяц')
            }

            return {
                data,
                heading,
            }
        },
    },
}
</script>

<style module>
.subheading {
    text-align: center;
}
</style>
