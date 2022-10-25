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