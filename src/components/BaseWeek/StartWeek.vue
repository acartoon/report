<template>
    <BaseContainer>
        <StartInfo :stats-compared="statsCompared" :stats-count="statsCount" />
    </BaseContainer>
</template>

<script>
import sources from '@/sources'
import BaseContainer from '@/UI/BaseContainer'
import StartInfo from '@/components/StartInfo'

export default {
    name: 'StartWeek',
    props: ['projects', 'developers'],
    components: { BaseContainer, StartInfo },
    data() {
        return {
            sources: sources,
        }
    },
    computed: {
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

            const heading = ['', 'Текущая неделя']

            if (this.projects.previous || this.developers.previous) {
                heading.push('Предыдущая неделя')
            }

            return {
                data,
                heading,
            }
        },
        statsCompared() {
            return {
                heading: ['', 'Максимум', 'Минимум'],
                data: [
                    [
                        'Запросы',
                        `${this.projects.max.count} (${this.projects.max.date})`,
                        `${this.projects.min.count} (${this.projects.min.date})`,
                    ],
                    [
                        'Разработчики',
                        `${this.developers.max.count} (${this.developers.max.date})`,
                        `${this.developers.min.count} (${this.developers.min.date})`,
                    ],
                ],
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
