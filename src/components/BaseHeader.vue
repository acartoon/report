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
            {{ title }} отчет заявок и предложений за период с {{ start }} по
            {{ end }}
        </BaseHeading>
        <BaseHeading :class="$style.subheading" tag="h4">
            Компания
            <base-link :to="itPelag" target="_blank">IT-Pelag</base-link>
            в рамках
            <base-link :to="arda"
                >IT-кластера ассоциации развития digital-агентств
                ARDA</base-link
            >
            проводит ежедневный мониторинг открытых источников, в которых
            размещаются запросы на проекты и информация о свободных
            разработчиков.
        </BaseHeading>
    </BaseContainer>
</template>

<script>
import BaseContainer from '@/UI/BaseContainer'
import BaseHeading from '@/UI/BaseHeading'
import LogoArda from '@/components/LogoArda'
import LogoItPelag from '@/components/LogoItPelag'
import BaseLink from '@/UI/BaseLink'
import { ARDA_SITE, IT_PELAG_SITE } from '@/constants'
export default {
    name: 'BaseHeader',
    props: ['start', 'end', 'type'],
    components: { BaseLink, LogoArda, BaseContainer, BaseHeading, LogoItPelag },
    data() {
        return {
            arda: ARDA_SITE,
            itPelag: IT_PELAG_SITE,
        }
    },
    computed: {
        title() {
            const titles = {
                week: 'Еженедельный',
                month: 'Ежемесячный',
                quarter: 'Квартальный',
            }
            console.log(this.type)
            return titles[this.type]
        },
    },
}
</script>

<style module>
.wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    padding-top: 20px;
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
}

.subheading {
    text-align: center;
    letter-spacing: 0.01rem;
}

@media (min-width: 576px) {
    .heading {
        text-align: center;
        /*margin-bottom: 30px;*/
    }

    .subheading {
        margin: 0 auto;
    }
}
</style>
