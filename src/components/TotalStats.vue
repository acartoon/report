<template>
    <BaseContainer>
        <div :class="$style.wrapper">
            <div class="base-wrapper">
                <StatsPie
                    :class="$style.wrapper"
                    title="Распределение запросов по грейду"
                    :data="requests.grades"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Грейд" :test="requests.grades" />
        </div>
        <div class="base-wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    title="Распределение свободных разработчиков по грейду"
                    :data="developers.grades"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Грейд" :test="developers.grades" />
        </div>

        <div class="base-wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    title="Распределение запросов по области"
                    :data="requests.area"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Область" :test="requests.area" />
        </div>

        <div class="base-wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    title="Распределение свободных разработчиков по области"
                    :data="developers.area"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Область" :test="developers.area" />
        </div>
        <div
            :key="key"
            v-for="(query, key) in requestsQuery"
            class="base-wrapper"
        >
            <StatsBar
                :title="
                    `Распределение запросов по ЯП/инструментам разработки в области ` +
                    query.name
                "
                :data="query.data"
                :labels="query.labels"
            />
        </div>
        <div
            :key="key"
            v-for="(query, key) in requestsDevelopers"
            class="base-wrapper"
        >
            <StatsBar
                :title="
                    `Распределение свободных разработчиков по ЯП/инструментам разработки в области ` +
                    query.name
                "
                :data="query.data"
                :labels="query.labels"
            />
        </div>
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h4"
                >Сравнение рейтов</BaseHeading
            >
            <BaseTable :data="totalData.data" :heading="totalData.heading" />
        </div>
    </BaseContainer>
</template>

<script>
import StatsPie from '@/components/StatsPie'
import BaseContainer from '@/UI/BaseContainer'
import TablePercent from '@/components/TablePercent'
import StatsBar from '@/components/StatsBar'
import BaseTable from '@/UI/BaseTable'
import BaseHeading from '@/UI/BaseHeading'

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
        BaseTable,
        StatsPie,
        BaseContainer,
        TablePercent,
        StatsBar,
        BaseHeading,
    },
    computed: {
        totalData() {
            const data = this.total.map((item) => ({
                ...item,
                query: item.query ?? '-',
                offer: item.offer ?? '-',
            }))

            return { data, heading: TITLES }
        },
        requestsQuery() {
            return this.requests.tools.map((el) => {
                const labels = el.values.map((item) => item.name)
                const data = el.values.map((item) => item.count)

                return {
                    name: el.name,
                    data,
                    labels,
                }
            })
        },
        requestsDevelopers() {
            return this.developers.tools.map((el) => {
                const labels = el.values.map((item) => item.name)
                const data = el.values.map((item) => item.count)

                return {
                    name: el.name,
                    data,
                    labels,
                }
            })
        },
    },
}
</script>

<style module>
.wrapper {
    margin-bottom: 80px;
}

.title {
    text-align: center;
}
</style>
