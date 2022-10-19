<template>
    <BaseContainer>
        <h2>
        Компания IT-Pelag в рамках IT-кластера ассоциации развития digital-агентств ARDA  проводит ежедневный мониторинг открытых источников, в которых размещаются запросы на проекты и информация о свободных разработчиков.
        </h2>
        <p>В выборки участвуют следующие источники:</p>
        <ul>
            <li
                :key="idx"
                v-for="(source, idx) in sources">
                {{source.name}} ( {{source.link}} )
            </li>
        </ul>

        <p>В данном отчете рассмотрен период с {{start}} по {{end}}</p>

        <p> Всего уникальных запросов (проектов) -  {{projects.current}}
            (неделю назад было {{projects.previous}})
        </p>

        <p> Всего уникальных свободных разработчиков -  {{developers.current}}
            (неделю назад было {{developers.previous}})
        </p>

        <p>Больше всего запросов {{projects.max.count}} было в понедельник, {{projects.max.date}},
            а меньше всего {{projects.min.count}} в пятницу {{projects.min.date}}
        </p>

        <p>Больше всего свободных разработчиков {{developers.max.count}} опубликовали в понедельник, {{developers.max.date}},
            а меньше всего {{developers.min.count}} в пятницу {{developers.min.date}}
        </p>
    </BaseContainer>
</template>

<script>
import sources from "@/sources";
import BaseContainer from "@/components/BaseContainer";

export default {
    name: 'StartInfo',
    props: ['start', 'end', 'projects', 'developers'],
    components: {BaseContainer },
    data() {
        return {
            sources: sources,
        }
    }
}
</script>

<style scoped>

</style>