export const ARDA_SITE = 'https://arda.digital/groups/outstaff'
export const IT_PELAG_SITE = 'https://itpelag.com/'

export const label = (context) => {
    let label = context.label || ''
    label += `: ${context.parsed || ''}%`

    return label
}

export const SORT_COMPARE_TABLE = [
    'lead',
    'senior',
    'middle+/senior',
    'middle/senior',
    'middle/middle+',
    'middle+',
    'middle',
    'junior+',
    'junior',
]

export const sorting = [
    'FE',
    'BE',
    'Fullstack',
    'SA,BA,QA,PM',
    'DevOps',
    'Mobile',
    'Design',
    '1С, Bitrix',
]
