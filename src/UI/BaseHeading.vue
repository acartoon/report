<template>
    <component :is="tag">
        <slot />
    </component>
</template>

<script>
export default {
    name: 'BaseHeading',
    props: {
        tag: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5 {
    margin: 3rem 0 1.38rem;
    font-weight: 400;
    line-height: 1.3;
}

h1 {
    margin-top: 0;
    font-size: 2.052rem;

    @media (min-width: 768px) {
        font-size: 3.052rem;
    }
}

h2 {
    font-size: 1.441rem;

    @media (min-width: 768px) {
        font-size: 2.441rem;
    }
}

h3 {
    font-size: 1.453rem;

    @media (min-width: 768px) {
        font-size: 1.953rem;
    }
}

h4 {
    font-size: 1.263rem;

    @media (min-width: 768px) {
        font-size: 1.563rem;
    }
}

h5 {
    font-size: 1.25rem;
}
</style>
