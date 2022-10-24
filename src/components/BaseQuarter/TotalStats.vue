<template>
    <BaseContainer>
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2">
                3. Грейды
            </BaseHeading>

            <div class="base-wrapper">
                <TableBlock
                    :data="requests.grades"
                    dataKey="percent"
                    title="3.1 Запросы"
                />
            </div>
            <div class="base-wrapper">
                <TableBlock
                    :data="developers.grades"
                    :order="true"
                    dataKey="percent"
                    title="3.2 Разработчики"
                />
            </div>
        </div>
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2">
                4. Область разработки
            </BaseHeading>
            <div class="base-wrapper">
                <TableBlock
                    :data="requests.area"
                    dataKey="percent"
                    title="4.1 Запросы"
                />
            </div>

            <div class="base-wrapper">
                <TableBlock
                    :order="true"
                    :data="developers.area"
                    dataKey="percent"
                    title="4.2 Разработчики"
                />
            </div>
        </div>
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2">
                5. Распределение запросов по ЯП/инструментам разработки
            </BaseHeading>
            <div :class="$style.wrapper">
                <StatsLine
                    :data="requestsQuery.data"
                    :titles="requestsQuery.titles"
                />
            </div>
            <BaseTable
                :data="tableRequests.data"
                :heading="tableRequests.heading"
            />
        </div>

        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2">
                6. Распределение свободных разработчиков по ЯП/инструментам
                разработки
            </BaseHeading>
            <div :class="$style.wrapper">
                <StatsLine
                    :data="requestsDevelopers.data"
                    :titles="requestsDevelopers.titles"
                />
            </div>

            <BaseTable
                :data="tableDevelopers.data"
                :heading="tableDevelopers.heading"
            />
        </div>

        <!--   блок итого     -->
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2">
                7. Сравнение рейтов
            </BaseHeading>
            <BaseTable :data="totalData.data" :heading="totalData.heading" />
        </div>
    </BaseContainer>
</template>

<script>
import BaseContainer from '@/UI/BaseContainer'
import BaseTable from '@/UI/BaseTable'
import BaseHeading from '@/UI/BaseHeading'
import { customSort } from '@/helpers/compareNumeric'
import { SORT_COMPARE_TABLE } from '@/constants'
import StatsLine from '@/components/BaseQuarter/StatsLine'
import TableBlock from './TableBlock'

const TITLES = [
    'Грейд',
    'Стек',
    'Средний рейт запроса (руб)',
    'Средний рейт предложения (руб)',
]

export default {
    name: 'TotalStats',
    props: ['requests', 'developers', 'total'],
    components: {
        StatsLine,
        BaseTable,
        BaseContainer,
        BaseHeading,
        TableBlock,
    },
    methods: {
        calculateTable() {
            const { tools } = this.developers
            const heading = ['Стек']
            let current = 0
            tools.forEach((el) => {
                current += el.count
            })
            heading.push(`Всего (${current})`)

            const data = tools.map((el) => {
                const current = {
                    name: el.name,
                    percent: `${el.count} - ${el.percent}%`,
                }

                el.detail.forEach((i) => {
                    current[i.month] = `${i.count} - ${i.percent}%`
                })

                return current
            })

            const titles = tools.reduce((acc, item) => {
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
            return { data, heading }
        },

        calculate(tools) {
            const data = tools.reduce((acc, item) => {
                item.detail.forEach((i) => {
                    if (!acc[i.month]) {
                        acc[i.month] = []
                    }
                    acc[i.month].push(i.count)
                })
                return acc
            }, {})
            const titles = tools.map((i) => i.name)

            const formattedData = Object.entries(data).map(([k, v]) => {
                return {
                    label: k,
                    data: v,
                }
            })
            const total = formattedData.reduce((acc, item) => {
                item.data.forEach((i, idx) => {
                    acc[idx] = (acc[idx] ? acc[idx] : 0) + i
                })
                return acc
            }, [])

            formattedData.push({ label: 'Всего', data: total })
            return { data: formattedData, titles }
        },
    },
    computed: {
        tableDevelopers() {
            const { tools } = this.developers
            return this.calculateTable(tools)
        },

        tableRequests() {
            const { tools } = this.requests
            return this.calculateTable(tools)
        },
        totalData() {
            const data = customSort(this.total, SORT_COMPARE_TABLE).map(
                (item) => ({
                    ...item,
                    query: item.query ?? '-',
                    offer: item.offer ?? '-',
                })
            )
            return { data, heading: TITLES }
        },
        requestsQuery() {
            const { tools } = this.requests
            return this.calculate(tools)
        },

        requestsDevelopers() {
            const { tools } = this.developers
            return this.calculate(tools)
        },
    },
}
</script>

<style module lang="scss">
.title {
    text-align: center;
}

.wrapper {
    margin-bottom: 50px;
}
</style>
