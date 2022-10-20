function compareNumeric(a, b) {
    if (a.count < b.count) return 1
    if (a.count == b.count) return 0
    if (a.count > b.count) return -1
}

export default compareNumeric

export function compareNumeric2(a, b) {
    if (a.name.includes('lead') && !b.name.includes('lead')) return 1
    if (a.name.includes('lead') && b.name.includes('lead')) return 0
    if (!a.name.includes('lead') && !b.name.includes('lead')) return -1
}

export function compareNumeric4(a, b) {
    if (a.name.includes('middle+') && !b.name.includes('middle+')) return -1
    if (a.name.includes('middle+') && b.name.includes('middle+')) return 0
    if (!a.name.includes('middle+') && !b.name.includes('middle+')) return 1
}

export function compareNumeric5(a, b) {
    if (a.name.includes('middle') && !b.name.includes('middle')) return -1
    if (a.name.includes('middle') && b.name.includes('middle')) return 0
    if (!a.name.includes('middle') && !b.name.includes('middle')) return 1
}

export function compareNumeric6(a, b) {
    if (a.name.includes('junior+') && !b.name.includes('junior+')) return -1
    if (a.name.includes('junior+') && b.name.includes('junior+')) return 0
    if (!a.name.includes('junior+') && !b.name.includes('junior+')) return 1
}

export function compareNumeric3(a, b) {
    if (a.name.includes('senior') && !b.name.includes('senior')) return -1
    if (a.name.includes('senior') && b.name.includes('senior')) return 0
    if (!a.name.includes('senior') && !b.name.includes('senior')) return 1
}
