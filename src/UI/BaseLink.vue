<template>
    <a :class="$style.link" :href="to" :target="target">
        <slot />
    </a>
</template>

<script>
export default {
    name: 'BaseLink',
    props: {
        to: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            default: () => '',
        },
    },
}
</script>

<style module>
.link {
    color: inherit;
    transition: color 150ms ease-in;
}

.link:hover {
    color: #accbe8;
    transition: color 150ms ease-in;
}
</style>
