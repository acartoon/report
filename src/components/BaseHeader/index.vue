<template>
    <BaseContainer>
        <div :class="$style.wrapper">
            <a :href="arda" target="_blank" :class="$style.image">
                <LogoArda />
            </a>
            <a :href="itPelag" target="_blank" :class="$style.image">
                <LogoItPelag />
            </a>
        </div>
        <BaseHeading :class="$style.heading" tag="h1">
            {{ title }} отчет заявок и предложений
        </BaseHeading>
        <BaseHeading :class="$style.subtitle" tag="h3">
            период: {{ period }}
        </BaseHeading>
        <BaseHeading :class="$style.subheading" tag="h4">
            Компания
            <base-link :to="itPelag" target="_blank">IT-Pelag</base-link>
            в рамках
            <base-link :to="arda" target="_blank"
                >IT-кластера ассоциации развития digital-агентств
                ARDA</base-link
            >
            проводит ежедневный мониторинг открытых источников, в которых
            размещаются запросы на проекты и информация о свободных
            разработчиках.
        </BaseHeading>
        <div class="base-wrapper">
            <BaseHeading :class="$style.subheading" tag="h3">
                Источники выборки:
            </BaseHeading>
            <BaseList :list="sources">
                <template #default="{ item }">
                    {{ item.name }} (<base-link :to="item.link" target="_blank"
                        >{{ item.link }} </base-link
                    >)
                </template>
            </BaseList>
        </div>
    </BaseContainer>
</template>

<script>
import BaseContainer from '@/UI/BaseContainer'
import BaseHeading from '@/UI/BaseHeading'
import LogoArda from './LogoArda'
import LogoItPelag from './LogoItPelag'
import BaseLink from '@/UI/BaseLink'
import { ARDA_SITE, IT_PELAG_SITE } from '@/constants'
import BaseList from '@/UI/BaseList'
import sources from '@/sources'

export default {
    name: 'BaseHeader',
    props: ['period'],

    components: {
        BaseLink,
        LogoArda,
        BaseContainer,
        BaseHeading,
        LogoItPelag,
        BaseList,
    },
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
            sources: sources,
            arda: ARDA_SITE,
            itPelag: IT_PELAG_SITE,
        }
    },
}
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    padding-top: 20px;
    border-bottom: 7px double #3c3f40;
    padding-bottom: 10px;

    @media (min-width: 768px) {
        margin-bottom: 120px;
    }
}

.image {
    width: 15%;
    min-width: 90px;
}
.image img {
    max-width: 100%;
    max-height: 100%;
}

.heading {
    text-align: center;
    margin-bottom: 0;
}

.subtitle {
    margin-top: 0 !important;
    text-align: center;
}

.subheading {
    text-align: center;
    letter-spacing: 0.01rem;
}

@media (min-width: 576px) {
    .heading {
        text-align: center;
    }

    .subheading {
        margin: 0 auto;
    }
}
</style>
