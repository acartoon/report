<template>
    <BaseContainer>
        <div :class="$style.wrapper">
            <div :class="$style.image">
                <img src="https://arda.ws-dev.ru/img/ITARDA.db1a7e3b.png" alt="Лого арды">
            </div>
            <div :class="$style.image">
                <img src="https://arda.ws-dev.ru/img/ITARDA.db1a7e3b.png" alt="IT Pelag">
            </div>
        </div>
        <h1 :class="$style.heading">
            Еженедельный отчет заявок и предложений за период с
            03.10 - 09.10
        </h1>
    </BaseContainer>
</template>

<script>
import BaseContainer from "@/components/BaseContainer";
export default {
    name: "BaseHeader",
    components: {BaseContainer},
}
</script>

<style module>

.wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
}

.image {
    width: 90px;
}
.image img {
    max-width: 100%;
    max-height: 100%;
}

.heading {
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 60px;
}

@media(min-width: 576px) {
    text-align: center;
    font-size: 70px;
    line-height: 80px;
    margin-bottom: 80px;
}
</style>