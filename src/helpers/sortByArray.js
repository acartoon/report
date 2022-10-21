function sortByArray(a, s) {
    return a.slice(0).sort(function (x1, x2) {
        const i1 = s.indexOf(x1.name),
            i2 = s.indexOf(x2.name)

        if (i1 < 0) {
            return 1
        }
        if (i2 < 0) {
            return -1
        }
        return i1 - i2
    })
}

export default sortByArray
