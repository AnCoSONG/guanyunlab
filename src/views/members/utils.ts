export const getGraduateMemberTitleAndGradYear = (member: Member): string[] => {
    return member.en_title.split(' ')
}

export const compareGraduateTitle = (a: string, b: string) => {
    // Postdoctor, PhD, Master, Intern
    const titleOrder = ['Postdoctor', 'PhD', 'Master', 'Intern']
    const aIndex = titleOrder.indexOf(a)
    const bIndex = titleOrder.indexOf(b)
    if (aIndex === -1 || bIndex === -1) {
        return a.localeCompare(b)
    }
    return aIndex - bIndex
}

export const reOrderGraduate = (members: Member[]) => {
    members.sort((a, b) => {
        const [aMemberTitle, aMemberGradYear] = getGraduateMemberTitleAndGradYear(a)
        const [bMemberTitle, bMemberGradYear] = getGraduateMemberTitleAndGradYear(b)
        if (aMemberGradYear === bMemberGradYear) {
            return compareGraduateTitle(aMemberTitle, bMemberTitle)
        }
        return Number(bMemberGradYear) - Number(aMemberGradYear)
    })
}