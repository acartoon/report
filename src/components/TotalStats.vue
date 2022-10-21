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
import StatsBar from '@/components/StatsBar'
import BaseTable from '@/UI/BaseTable'
import BaseHeading from '@/UI/BaseHeading'
import TableBlock from '@/components/TableBlock'
import { customSort } from '@/helpers/compareNumeric'
import { SORT_COMPARE_TABLE } from '@/constants'
import splitTools from '@/helpers/splitTools'

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
            return this.requests.tools.map((el) => {
                const { labels, data } = splitTools(el)

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
                const { labels, data } = splitTools(el)

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
.title {
    text-align: center;
}
</style>
