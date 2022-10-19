<template>
    <BaseContainer>
        <div :class="$style.wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    :class="$style.wrapper"
                    title="Распределение запросов по грейду"
                    :data="requests.grades"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Грейд" :test="requests.grades"/>
        </div>
        <div :class="$style.wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    title="Распределение свободных разработчиков по грейду"
                    :data="developers.grades"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Грейд" :test="developers.grades"/>
        </div>

        <div :class="$style.wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    title="Распределение запросов по области"
                    :data="requests.area"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Область" :test="requests.area"/>
        </div>

        <div :class="$style.wrapper">
            <div :class="$style.wrapper">
                <StatsPie
                    title="Распределение свободных разработчиков по области"
                    :data="developers.area"
                    dataKey="percent"
                />
            </div>
            <TablePercent title="Область" :test="developers.area"/>
        </div>
        <StatsBar
            :key="key"
              v-for="(query, key) in requestsQuery"
                :title="`Распределение запросов по ЯП/инструментам разработки в области ` + query.name"
               :data="query.data"
               :labels="query.labels"
        />
        <StatsBar
            :key="key"
              v-for="(query, key) in requestsDevelopers"
                :title="`Распределение свободных разработчиков по ЯП/инструментам разработки в области ` + query.name"
               :data="query.data"
               :labels="query.labels"
        />
    </BaseContainer>
</template>

<script>
import StatsPie from "@/components/StatsPie";
import BaseContainer from "@/components/BaseContainer";
import TablePercent from "@/components/TablePercent";
import StatsBar from "@/components/StatsBar";

export default {
    name: "TotalStats",
    props: ['requests', 'developers'],
    components: {StatsPie, BaseContainer, TablePercent, StatsBar},
    computed: {
        requestsQuery() {
            return this.requests.tools.map((el) => {
                const labels = el.values.map((item) => item.name);
                const data = el.values.map((item) => item.count);

                return {
                    name: el.name,
                    data,
                    labels
                }
            })
        },
        requestsDevelopers() {
            return this.developers.tools.map((el) => {
                const labels = el.values.map((item) => item.name);
                const data = el.values.map((item) => item.count);

                return {
                    name: el.name,
                    data,
                    labels
                }
            })
        }
    }

}
</script>

<style module>
.wrapper {
    margin-bottom: 80px;
}
</style>