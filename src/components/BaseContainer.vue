<template>
    <div :class="$style.container">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'BaseContainer',

}
</script>

<style module>
.container {
    width: 100%;
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
}
</style>