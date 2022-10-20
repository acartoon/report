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
                5. Распределение запросов по ЯП/инструментам
            </BaseHeading>
            <div
                :key="key"
                v-for="(query, key) in requestsQuery"
                class="base-wrapper"
            >
                <StatsBar
                    :title="`5.${key + 1} ${query.name}`"
                    :data="query.data"
                    :labels="query.labels"
                />
                <!--                <div :key="item.name" v-for="item in query.all.values">-->
                <!--                    {{ item.name }} - {{ item.count }}-->
                <!--                </div>-->
            </div>
        </div>
        <!--        разработчики-->
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2">
                6. Распределение свободных разработчиков по ЯП/инструментам
            </BaseHeading>

            <div
                :key="key"
                v-for="(query, key) in requestsDevelopers"
                class="base-wrapper"
            >
                <StatsBar
                    :title="`6.${key + 1} ${query.name}`"
                    :data="query.data"
                    :labels="query.labels"
                />
            </div>
        </div>
        <!--        -->
        <div class="base-wrapper">
            <BaseHeading :class="$style.title" tag="h2"
                >7. Сравнение рейтов</BaseHeading
            >
            <BaseTable :data="totalData.data" :heading="totalData.heading" />
        </div>
    </BaseContainer>
</template>

<script>
// import StatsPie from '@/components/StatsPie'
// import TablePercent from '@/components/TablePercent'
import BaseContainer from '@/UI/BaseContainer'
import StatsBar from '@/components/StatsBar'
import BaseTable from '@/UI/BaseTable'
import BaseHeading from '@/UI/BaseHeading'
import TableBlock from '@/components/TableBlock'
import compareNumeric from // compareNumeric3, // compareNumeric2,
// compareNumeric4,
// compareNumeric5,
// compareNumeric6,
'@/helpers/compareNumeric'

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
        BaseContainer,
        StatsBar,
        BaseHeading,
        TableBlock,
    },
    computed: {
        totalData() {
            const data = this.total
                .slice(0)
                // .sort(compareNumeric2)
                // .sort(compareNumeric3)
                // .sort(compareNumeric4)
                // .sort(compareNumeric5)
                // .sort(compareNumeric6)
                .map((item) => ({
                    ...item,
                    query: item.query ?? '-',
                    offer: item.offer ?? '-',
                }))

            return { data, heading: TITLES }
        },
        requestsQuery() {
            return this.requests.tools.map((el) => {
                const values = el.values.slice(0).sort(compareNumeric)
                const labels = values.map((item) => item.name)
                const data = values.map((item) => item.count)

                return {
                    all: el,
                    name: el.name,
                    data,
                    labels,
                }
            })
        },
        requestsDevelopers() {
            return this.developers.tools.map((el) => {
                const values = el.values.slice(0).sort(compareNumeric)
                const labels = values.map((item) => item.name)
                const data = values.map((item) => item.count)

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
