import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

function mediaQuery() {
    let windowWidth = ref(window.innerWidth)
    const media = reactive({ width: 0, type: '' })
    console.log(media)

    const onWidthChange = () => {
        return (windowWidth.value = window.innerWidth)
    }
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    media.type = computed(() => {
        console.log(windowWidth.value)
        if (windowWidth.value < 550) return 'xs'
        if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
        if (windowWidth.value >= 1200) return 'lg'
        return null // This is an unreachable line, simply to keep eslint happy.
    })

    media.width = computed(() => windowWidth.value)

    return media
}

export default mediaQuery
