import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/guanyunlab/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("views/home/index.vue"),
            meta: { title: '智慧形态实验室 / Guanyun Lab' }
        },
        {
            path: '/news',
            name: 'news',
            component: () => import("views/news/list.vue"),
            meta: { title: '新闻 / News' }
        },
        {
            path: '/news/:id',
            name: 'news-item',
            component: () => import("views/news/item.vue"),
            props: true
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import("views/projects/list.vue"),
            meta: { title: '项目 / Project' }
        },
        {
            path: '/projects/:en_name',
            name: 'project-item',
            component: () => import('views/projects/item.vue'),
            props: true
        },
        {
            path: '/members',
            name: 'members',
            component: () => import("views/members/list.vue"),
            meta: {title: "成员 / Members"}
        },
        {
            path: '/members/:en_name',
            name: 'member-item',
            component: () => import("views/members/item.vue"),
            props: true
        },
        {
            path: '/publication',
            name: 'publication',
            component: () => import("views/publications/index.vue"),
            meta: { title: "出版 / Publication" }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('views/about/index.vue'),
            meta: { title: '关于 / About'}
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('views/contact/index.vue'),
            meta: { title: '联系 / Contact'}
        },
        {
            // path: '/:\w+',
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import("views/404/index.vue"),
            meta: { title: "404" },
        },
    ],
    scrollBehavior: (to, from, savedPosition) => {
        // fix some case cannot scroll
        document
            .querySelector("#app")!
            .scrollTo({ left: 0, top: 0, behavior: "smooth" });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: "smooth" });
            }, 100);
        });
    },
})

import NProgress from 'nprogress';
import "../styles/nprogress.scss";

NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
const defaultTitle = "Guanyun Lab";
router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = to.meta.title ? (to.meta.title as string) : defaultTitle;
    next()
})

router.afterEach((to, from) => {
    NProgress.done();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})

export default router;
