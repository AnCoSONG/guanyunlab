import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/guanyunlab/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("views/home/index.vue"),
            meta: { title: 'X Lab / X 实验室' }
        },
        {
            path: '/news/:id',
            name: 'news',
            component: () => import("views/news/item.vue"),
            props: true
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import("views/projects/list.vue"),
            meta: { title: 'Project / 项目' }
        },
        {
            path: '/projects/:id',
            name: 'project-item',
            component: () => import('views/projects/item.vue'),
            props: true
        },
        {
            path: '/members',
            name: 'members',
            component: () => import("views/members/list.vue"),
            meta: {title: "Member / 成员"}
        },
        {
            path: '/members/:id',
            name: 'member-item',
            component: () => import("views/members/item.vue"),
            props: true
        },
        {
            path: '/publications',
            name: 'publications',
            component: () => import("views/publications/index.vue"),
            meta: { title: "Publications / 出版" }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('views/about/index.vue'),
            meta: { title: 'About / 关于'}
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('views/contact/index.vue'),
            meta: { title: 'Contact / 联系我们'}
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
const defaultTitle = "Lab Home Page";
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
