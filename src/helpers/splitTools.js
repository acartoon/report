import compareNumeric from '@/helpers/compareNumeric'

const splitTools = (tools) => {
    const values = tools.values.slice(0).sort(compareNumeric)
    const labels = values.map((item) => item.name)
    const data = values.map((item) => item.count)

    return { data, labels }
}
export default splitTools
