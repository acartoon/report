<template>
    <BaseContainer>
        <div class="base-wrapper">
            <BaseHeading :class="$style.subheading" tag="h3"
                >Источники выборки:</BaseHeading
            >
            <ol :class="$style.list">
                <li
                    :class="$style.listItem"
                    :key="idx"
                    v-for="(source, idx) in sources"
                >
                    {{ source.name }} (<base-link
                        :to="source.link"
                        target="_blank"
                        >{{ source.link }}</base-link
                    >)
                </li>
            </ol>
        </div>
        <div class="base-wrapper">
            <BaseHeading :class="$style.subheading" tag="h2"
                >1. Количество запросов/разработчиков</BaseHeading
            >
            <BaseTable
                :heading="['', 'Текущая неделя', 'Предыдущая неделя']"
                :data="[
                    ['Запросы', projects.current, projects.previous],
                    ['Разработчики', developers.current, developers.previous],
                ]"
            />
        </div>

        <div class="base-wrapper">
            <BaseHeading :class="$style.subheading" tag="h2"
                >2. Максимум/минимум запросов/разработчиков</BaseHeading
            >
            <BaseTable
                :heading="['', 'Максимум', 'Минимум']"
                :data="[
                    [
                        'Запросы',
                        `${projects.max.count} (${projects.max.date})`,
                        `${projects.min.count} (${projects.min.date})`,
                    ],
                    [
                        'Разработчики',
                        `${developers.max.count} (${developers.max.date})`,
                        `${developers.min.count} (${developers.min.date})`,
                    ],
                ]"
            />
        </div>
    </BaseContainer>
</template>

<script>
import sources from '@/sources'
import BaseContainer from '@/UI/BaseContainer'
import BaseHeading from '@/UI/BaseHeading'
import BaseTable from '@/UI/BaseTable'
import BaseLink from '@/UI/BaseLink'

export default {
    name: 'StartInfo',
    props: ['projects', 'developers'],
    components: { BaseContainer, BaseHeading, BaseTable, BaseLink },
    data() {
        return {
            sources: sources,
        }
    },
}
</script>

<style module>
.list {
    margin: 0;
    padding: 0;
    list-style: none;
    counter-reset: counter;
}

.listItem {
    padding-bottom: 15px;
    font-size: 16px;
}

.listItem:before {
    counter-increment: counter;
    content: counter(counter) '. ';
    left: 0;
}

.subheading {
    text-align: center;
}

.bold {
    font-weight: 500;
}

@media (min-width: 768px) {
    .list {
        display: flex;
        flex-wrap: wrap;
    }

    .listItem {
        width: 50%;
        box-sizing: border-box;
        padding: 0 10px 15px;
    }
}
</style>
