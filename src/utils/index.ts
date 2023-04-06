export function debounce(fun: any, delay: number) {
    return (args: any) => {
        //@ts-ignore
        let that = this
        let _args = args
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun.call(that, _args)
        }, delay)
    }
}

export const toMonthYear = (date: string) => {
    // english month and numeric year
    return new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' })
}

const getViewData = () => {
    const data = localStorage.getItem('viewData')
    if (data) {
        return JSON.parse(data)
    }
    return null
}

export const isViewed = (id: string) => {
    const data = getViewData()
    if (data) {
        return data[id]
    }
    return false
}

export const setViewed = (id: string) => {
    const data = getViewData()
    if (data) {
        data[id] = true
        localStorage.setItem('viewData', JSON.stringify(data))
    } else {
        localStorage.setItem('viewData', JSON.stringify({ [id]: true }))
    }
}

export const parseEnName = (en_name: string, parseBack=false) => {
    if (parseBack) {
        return en_name.replace(/_/g, ' ')
    }
    return en_name.replace(/ /g, '_')
}