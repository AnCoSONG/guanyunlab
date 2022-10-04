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