<template>
    <SectionTitle en="Publication" cn="出版">
    </SectionTitle>
    <Main>
        <div class="note"># Contributed Equally</div>
        <div class="note">* Corresponding Author</div>
        <InfoBoxWithUpperLine v-for="item, index in publicationData" :padding="10">
            <div class="paper-item" >
                <img class="img" :src="item.img" />
                <div class="info">
                    <div class="title" @click="openPaper(item.href)">{{item.title}}</div>
                    <div class="authors">{{item.authors}}</div>
                    <div class="venue">{{item.venue}}</div>
                </div>
            </div>
        </InfoBoxWithUpperLine>
    </Main>
</template>
<script setup lang='ts'>
import Main from '../../components/Main.vue';
import SectionTitle from '../../components/SectionTitle.vue';
import InfoBoxWithUpperLine from '../../components/InfoBoxWithUpperLine.vue';
import { onMounted, reactive, ref } from 'vue';
import { apiFetchPapers } from '../../api';

const publicationData: Publication[] = reactive([])
const res = await apiFetchPapers()
publicationData.splice(0, publicationData.length, ...res)

const openPaper = (to: string) => {
    window.open(to, "_blank")
}
</script>
<style lang="scss" scoped>

.note {
    color: #444;
    font-size: 12px;
}
.paper-item {
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 700px) {
        flex-flow: nowrap column;
    }

    .img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        display: block;
        margin-right: 20px;

        @media (max-width: 700px) {
            // display: none;
            align-self: flex-start;
            margin-bottom: 10px;
        }
    }

    .info {
        width: 100%;
        position: relative;
        .authors {
            font-weight: 400;
            font-size: 12px;
            color: #747474;
        }

        .title {
            font-size: 14px;
            color: #454545;
            display: inline-block;
            cursor: pointer;
            font-weight: 500;
        }

        .venue {
            font-weight: 400;
            font-size: 12px;
            color: #747474;
        }
    }

    
}
</style>