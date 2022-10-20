export const ARDA_SITE = 'https://itpelag.com/'
export const IT_PELAG_SITE = 'https://itpelag.com/'

export const label = (context) => {
    let label = context.label || ''
    label += `: ${context.parsed || ''}%`

    return label
}

export const tooltipOptions = {
    displayColors: false,
    callbacks: {
        label: function (context) {
            console.log(context)
            let label = context.dataset.label || ''

            if (label) {
                label += ': '
            }
            if (context.parsed.y !== null) {
                label += context.parsed.y
            }
            return label
        },
    },
}
