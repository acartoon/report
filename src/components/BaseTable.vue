<template>
    <div :class="$style.wrapper">
        <div :class="$style.inner">
            <table :class="$style.table">
                <tr :class="$style.title">
                    <td
                        :key="i"
                        v-for="i in heading" :class="$style.td">
                       {{i}}
                    </td>
                </tr>
                <tr :class="$style.tr"
                    :key="item"
                    v-for="item in data">
                    <td :class="$style.td"
                            :key="el" v-for="el in Object.values(item).filter(i => !!i)">
                        {{el}}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseTable',
    props: ['data', 'heading'],
}
</script>

<style module>

.wrapper {
    width: 100%;
    overflow-y: auto;
    padding-bottom: 15px;
}

.inner {
    width: 100%;
    min-width: 400px;
}

.table {
    width: 100%;
    border: none;
    border-collapse: collapse;
}

.tr {

}
.td {
    padding: 8px;
}

.tr:nth-child(even) {
    background: #ACCBE8;
}

.title:first-child tr {
    background: transparent;
}
</style>