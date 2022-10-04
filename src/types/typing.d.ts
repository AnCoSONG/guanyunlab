declare type ID = number | string;
declare type ProjectItem = {
    id: ID,
    cn_authors: string,
    en_authors: string,
    first_author: string,
    cn_name: string,
    en_name: string,
    short_abstract: string,
    abstract: {
        en: string,
        cn: string,
    }
    create_date: string,
    view_count: number,
    hero_img: string,
    hypertext: string,
    imgs: string[]
}

declare type HeroImg = {
    src: string,
    href: string
}


declare type Paper = {
    id: ID,
    img: string,
    authors: string,
    title: string,
    venue: string,
    href: string

}

declare type Member = {
    id: ID,
    avatar: string,
    hero_avatar: string,
    name: {
        cn: string,
        en: string
    },
    title: {
        cn: string,
        en: string,
    },
    hypertext: string
}