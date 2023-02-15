<template>
    <div class="project-item">
        <div class="top-line"></div>
        <img :src="project_data.hero_img" alt="" class="project-item-img" loading="lazy" ref="projectItemImg"
            @click="routeTo(project_data.id)"
        >
        <div class="info">
            <div v-if="mode == 'simple'" class="only-title" @click="routeTo(project_data.id)">
                {{ project_data.cn_name }} / {{ project_data.en_name }}
            </div>
            <div v-if="mode == 'complete'" class="complete-info">
                <div class="title" @click="routeTo(project_data.id)">{{ project_data.cn_name }} / {{ project_data.en_name }}</div>
                <div class="short-abstract">{{ project_data.short_abstract.length > 100 ? project_data.short_abstract.slice(0, 100) + '...' : project_data.short_abstract }}
                    <router-link class="more-link" :to="`/projects/${project_data.id}`">More ›</router-link>
                </div>
                <div class="author-date-views">
                    <!-- <span class="first-author">{{ project_data.first_author }}</span> | -->
                    <span>{{ toMonthYear(project_data.create_date) }}</span>
                    <!-- | <span>{{ Number(project_data.view_count).toLocaleString('en') }} Views</span> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';
import { toMonthYear } from '../utils';
import { useRouter } from 'vue-router';
import throttle from 'lodash.throttle'
const router = useRouter()
defineProps<{
    project_data: ProjectListItem,
    mode: 'simple' | 'complete'
}>()

const projectItemImg = ref<HTMLImageElement|null>(null)
let timeoutId: string | number | NodeJS.Timeout | undefined;
let isListened = false
const imgWidth = ref(0)

const onResize = throttle(() => {
    const width = projectItemImg.value!.offsetWidth
    console.log('before timeout', width)

    setTimeout(() => {
        const width = projectItemImg.value!.offsetWidth
        console.log('after timeout', width)
        projectItemImg.value!.style.height = width + 'px'
        imgWidth.value = width
    }, 50)
}, 200)

const setupWatcher = () => {
    timeoutId = setTimeout(() => {
        const width = projectItemImg.value!.offsetWidth
        projectItemImg.value!.style.height = width + 'px'
    }, 10)
    if(isListened) return
    window.addEventListener('resize', onResize)
    isListened = true
}
onMounted(() => {
    console.log('mounted')
    setupWatcher()
})

onActivated(() => {
    console.log('activated')
    setupWatcher()
})

const clearWatcher = () => {
    clearTimeout(timeoutId)
    if(!isListened) return
    window.removeEventListener('resize', onResize)
    isListened = false
}

onUnmounted(() => {
    console.log('unmounted')
    clearWatcher()
})

onDeactivated(() => {
    console.log('deactivated')
    clearWatcher()
})

const routeTo = (id: string) => {
    router.push('/projects/' + id)
}
</script>
<style lang="scss" scoped>
.project-item {
    position: relative;
    width: 100%;
    // max-width: 400px;

    .top-line {
        width: 100%;
        background-color: #141414;
        height: 2px;
        margin-bottom: 10px;
    }

    .project-item-img {
        width: 100%;
        object-fit: cover;
        user-select: none;
        cursor: pointer;
    }

    .info {
        position: relative;

        .only-title {
            color: #575757;
            font-size: 13px;
            cursor: pointer;
        }

        .complete-info {
            display: flex;
            flex-flow: nowrap column;
            justify-content: flex-start;
            align-items: flex-start;

            .title {
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
            }

            .short-abstract {
                font-size: 12px;
                line-height: 16px;
                margin: 6px 0px;

                .more-link {
                    color: #556ea1;
                    text-decoration: none;
                }
            }

            .author-date-views {
                font-size: 12px;
                line-height: 16px;

                .first-author {
                    color: #556ea1;
                }
            }
        }
    }
}
</style>