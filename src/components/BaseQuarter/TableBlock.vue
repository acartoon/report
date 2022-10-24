<template>
    <div>
        <BaseHeading
            :style="{ textAlign: order ? 'right' : 'left' }"
            :class="$style.title"
            tag="h3"
            >{{ title }}</BaseHeading
        >
        <div
            :class="$style.wrapper"
            :style="{ flexDirection: order ? 'row-reverse' : 'row' }"
        >
            <BaseTable :data="table" :heading="heading" />
            <ChartPie
                :class="$style.chart"
                :showLabel="false"
                :label="labels"
                :data="datasets"
                :colors="colors"
            />
        </div>
    </div>
</template>

<script>
import randomColor from '@/helpers/randomColor'
import ChartPie from '@/UI/ChartPie'
import BaseTable from '@/UI/BaseTable'
// import compareNumeric from '@/helpers/compareNumeric'
import BaseHeading from '@/UI/BaseHeading'
import sortByArray from '@/helpers/sortByArray'
import { sorting } from '@/constants'

export default {
    name: 'TableBlock',
    props: ['data', 'dataKey', 'title', 'order'],
    components: { BaseTable, ChartPie, BaseHeading },
    computed: {
        colors() {
            return randomColor({
                luminosity: 'light',
                count: this.data.length,
            })
        },
        sortingData() {
            return sortByArray(this.data, sorting)
        },
        labels() {
            return this.sortingData.map((el) => el.name)
        },
        count() {
            return this.data.reduce((acc, i) => acc + i.count, 0)
        },
        table() {
            return this.sortingData.map((el, idx) => {
                // строка
                const current = {
                    name: {
                        text: el.name,
                        color: this.colors[idx],
                    },
                    percent: `${el.count} - ${el.percent}%`,
                }

                el.detail.forEach((i) => {
                    current[i.month] = `${i.count} - ${i.percent}%`
                })
                return current
            })
        },

        heading() {
            let current = 0
            const heading = ['Грейд']

            this.data.forEach((el) => {
                current += el.count
            })
            heading.push(`Всего (${current})`)

            const titles = this.sortingData.reduce((acc, item) => {
                item.detail.forEach((i) => {
                    if (!acc[i.month]) {
                        acc[i.month] = i.count
                    } else {
                        acc[i.month] = acc[i.month] + i.count
                    }
                })
                return acc
            }, {})

            Object.entries(titles).forEach(([k, v]) => {
                heading.push(`${k} (${v})`)
            })

            return heading
        },

        datasets() {
            return this.sortingData.map((el) => el[this.dataKey])
        },
    },
}
</script>

<style module lang="scss">
.wrapper {
    display: flex;

    gap: 20px;

    @media (max-width: 767px) {
        flex-direction: column !important;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }

    @media (min-width: 1220px) {
        gap: 50px;
    }
}

.chart {
    @media (min-width: 768px) {
        flex: 0 0 auto;
        width: 40%;
    }
}

.title {
    margin-bottom: 24px;

    @media (max-width: 767px) {
        text-align: left !important;
    }
}
</style>
