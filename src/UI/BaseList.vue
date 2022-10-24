<template>
    <ol :class="$style.list">
        <li :class="$style.listItem" :key="idx" v-for="(item, idx) in list">
            <slot :item="item" />
        </li>
    </ol>
</template>

<script>
export default {
    props: ['list'],
}
</script>

<style lang="scss" module>
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
