<template>
    <div class="news">
        <MainTitle v-if="withTitle" :en="cn_title" :cn="en_title" type="large" class="news-title"></MainTitle>
        <InfoBoxWithUpperLine v-for="item, index in newss" :last="index == newss.length - 1">
            <div class="news-item">
                <div class="news-item-title" @click="isProject? openProject(item) : openNews(item.id)">{{ isProject?item['cn_name'] + ' / ' + item['en_name']: item[title_key] }}</div>
                <div class="news-item-date">{{ props.date_text }}: {{ item['update_date'] === "" ? new Date(item['last_date']).toLocaleDateString():item['update_date'] }}</div>
            </div>
        </InfoBoxWithUpperLine>
    </div>
</template>
<script setup lang='ts'>
import MainTitle from '../../components/MainTitle.vue';
import InfoBoxWithUpperLine from '../../components/InfoBoxWithUpperLine.vue';
import { Router, useRouter } from 'vue-router';
import { apiFetchHomeNews } from '../../api';
import { onMounted, reactive } from 'vue';
import SectionTitle from '../../components/SectionTitle.vue';
import { parseEnName } from '../../utils';
// fetch news
const props = withDefaults(defineProps<{
    withTitle?: boolean,
    cn_title?: string,
    en_title?: string,
    route_parent?: string,
    title_key?: string,
    date_text?: string,
    isProject?: boolean,
    newss: any[]
}>(), {
    withTitle: true,
    cn_title: '新闻',
    en_title: 'News',
    route_parent: 'news',
    title_key: 'title',
    date_text: 'UPDATE',
    isProject: false
})

const router = useRouter()
const openNews = (id: ID) => {
    router.push(`/${props.route_parent}/${id}`)
}

const openProject = (item: ProjectListItem) => {
    router.push(`/projects/${parseEnName(item.en_name)}`)
}
</script>
<style lang="scss" scoped>
.news {
    position: relative;

    // padding-bottom: 20px;
    // box-sizing: border-box;
    .news-title {
        padding-bottom: 24px;
    }

    .news-item {
        // padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-flow: wrap column;
        justify-content: flex-start;
        align-items: flex-start;

        &:hover {
            color: rgb(117, 117, 117);

            .news-item-date {
                color: rgb(117, 117, 117);
            }
        }

        .news-item-title {
            margin-bottom: 4px;
            cursor: pointer;
            font-size: 13px;

            // @media (max-width: 700px) {
            //     font-size: 13px;
            //     margin-bottom: 4px;
            // }

        }

        .news-item-date {
            font-size: 12px;
            color: #454545;
            user-select: none;
        }
    }
}
</style>