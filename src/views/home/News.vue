<template>
    <div class="news">
        <MainTitle en="新闻" cn="News" type="large" class="news-title"></MainTitle>
        <InfoBoxWithUpperLine v-for="item, index in newss" :last="index == newss.length - 1">
            <div class="news-item">
                <div class="news-item-title" @click="openNews(item.id)">{{ item.title }}</div>
                <div class="news-item-date">UPDATE: {{ new Date(item.last_date).toLocaleDateString() }}</div>
            </div>
        </InfoBoxWithUpperLine>
    </div>
</template>
<script setup lang='ts'>
import MainTitle from '../../components/MainTitle.vue';
import InfoBoxWithUpperLine from '../../components/InfoBoxWithUpperLine.vue';
import { useRouter } from 'vue-router';
import { apiFetchHomeNews } from '../../api';
import { reactive } from 'vue';
import SectionTitle from '../../components/SectionTitle.vue';
// fetch news
const newss = reactive<News[]>([])
const res = await apiFetchHomeNews(10)
newss.splice(0, newss.length, ...res)

const router = useRouter()

const openNews = (id: ID) => {
    router.push(`/news/${id}`)
}
</script>
<style lang="scss" scoped>
.news {
    position: relative;

    // padding-bottom: 20px;
    // box-sizing: border-box;
    .news-title {
        margin-bottom: 24px;
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
            margin-bottom: 8px;
            cursor: pointer;
            font-size: 16px;

        }

        .news-item-date {
            font-size: 13px;
            color: #454545;
            user-select: none;
        }
    }
}
</style>