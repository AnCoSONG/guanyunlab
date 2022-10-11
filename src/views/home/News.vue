<template>
    <div class="news">
        <MainTitle en="News" cn="新闻" type="large" class="news-title"></MainTitle>
        <InfoBoxWithUpperLine v-for="item,index in newsdata" :last="index==newsdata.length - 1">
            <div class="news-item">
                <div class="news-item-title" @click="openNews(item.id)">{{item.title}}</div>
                <div class="news-item-date">UPDATE: {{item.lastdate}}</div>
            </div>
        </InfoBoxWithUpperLine>
    </div>
</template>
<script setup lang='ts'>
import MainTitle from '../../components/MainTitle.vue';
import InfoBoxWithUpperLine from '../../components/InfoBoxWithUpperLine.vue';
import { useRouter } from 'vue-router';
// fetch news
const newsdata = [
    {
        title: 'xlab Showcase 2022 “Interverse of Things” （2022.2.10-16）',
        lastdate: '2022.2.10',
        id: 123,
    },
    {
        title: 'xlab Showcase 2022 “Interverse of Things” （2022.2.10-16）',
        lastdate: '2022.2.10',
        id: 123,
    },
    {
        title: 'xlab Showcase 2022 “Interverse of Things” （2022.2.10-16）',
        lastdate: '2022.2.10',
        id: 123,
    }
]

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
        padding-left: 20px;
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

        }

        .news-item-date {
            font-size: 14px;
            color: #454545;
            user-select: none;
        }
    }
}
</style>