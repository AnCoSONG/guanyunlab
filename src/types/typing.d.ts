declare type ID = string;
declare type Project = {
    id: string;
    cn_authors: string;
    en_authors: string;
    first_author: string;
    cn_name: string;
    en_name: string;
    short_abstract: string;
    en_abstract: string;
    cn_abstract: string;
    view_count: number;
    hero_img: string;
    hypertext: string;
    imgs: string[];
    create_date: string;
    create_date_real: string;
    update_date: string;
}

declare type ProjectListItem = {
    id: string;
    hero_img: string;
    en_name: string;
    cn_name: string;
    first_author: string;
    view_count: number;
    create_date: string;
    short_abstract: string;
}

declare type HeroImg = {
    src: string,
    href: string
}


declare type Publication = {
    id: string;
    img: string;
    authors: string;
    title: string;
    venue: string;
    href: string;
    published_at: string;
    create_date: string;
}

declare enum MemberRole {
    student = 'student',
    teacher = 'teacher',
    intern = 'intern',
    graduate = 'graduate',
    postdoc = 'postdoc',
}

declare type Member = {
    id: string;
    avatar: string;
    hero_avatar: string;
    identity: MemberRole;
    cn_name: string;
    en_name: string;
    cn_title: string;
    en_title: string;
    hypertext?: string;
}

declare type News = {
    id: string;
    title: string;
    last_date: string;
    hypertext: string;
    update_date: string;
}

declare type ContactHyperTexts = {
    contact_hypertext: string,
}