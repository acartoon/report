<template>
    <div :class="$style.wrapper">
        <div :class="$style.inner">
            <table :class="$style.table">
                <tr :class="$style.title">
                    <th :key="i" v-for="i in heading" :class="$style.th">
                        {{ i }}
                    </th>
                </tr>
                <tr :class="$style.tr" :key="item" v-for="item in data">
                    <td
                        :class="$style.td"
                        :key="el"
                        v-for="el in Object.values(item).filter((i) => !!i)"
                    >
                        <span
                            :class="$style.color"
                            v-if="el.color"
                            :style="{ background: el.color }"
                        ></span>
                        {{ el.text || el }}
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
    transition: background-color 150ms ease-in;
    border-bottom: 1px solid #afafb3;
}

.td {
    padding: 8px;
    text-align: center;
}

.td:first-child {
    text-align: left;
}

.tr:nth-child(even) {
    background: #accbe8;
    background: #e8e9eb;
    transition: background-color 150ms ease-in;
}

.tr:hover {
    background: #dbe8f5;
    transition: background-color 150ms ease-in;
}

.title:first-child tr {
    background: transparent;
}
.th {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.01rem;
    padding: 6px;
    font-weight: 500;
}

.th:first-child {
    text-align: left;
}

.color {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
</style>
