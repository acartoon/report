const getNameMonth = (number) => {
    const date = new Date()
    date.setMonth(number)
    return date.toLocaleString('default', { month: 'long' })
}

export default getNameMonth
