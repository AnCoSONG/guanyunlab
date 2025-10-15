<template>
    <SectionTitle en="Publication" cn="出版">
    </SectionTitle>
    <Main>
        <div class="note"># Contributed Equally</div>
        <div class="note">* Corresponding Author</div>
        <div class="year-options">
            <div v-for="(item, index) in yearsOptions" :key="index" class="year-options-item"
                :class="{ active: item === selectedYear }" @click="() => {
                if (selectedYear === item) {
                    selectedYear = -1 // 清除
                    filterByYear(-1)
                } else {
                    selectedYear = item
                    filterByYear(item)
                }
            }">{{ item }}</div>
        </div>
        <div style="position: relative;">
            <div class="loader" v-if="loading">
                <svg width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="32" stroke-width="4" stroke="#141414"
                        stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                            values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </div>
            <InfoBoxWithUpperLine v-for="item, index in publicationData" :padding="10">
                <div class="paper-item">
                    <img class="img" :src="item.img" />
                    <div class="info">
                        <div class="title" @click="openPaper(item.href)">{{ item.title }}</div>
                        <div class="authors">{{ item.authors }}</div>
                        <div class="venue">{{ item.venue }}</div>
                    </div>
                </div>
            </InfoBoxWithUpperLine>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import Main from '../../components/Main.vue';
import SectionTitle from '../../components/SectionTitle.vue';
import InfoBoxWithUpperLine from '../../components/InfoBoxWithUpperLine.vue';
import { reactive, ref } from 'vue';
import { apiFetchPaperYearOptions, apiFetchPapers } from '../../api';

const publicationData: Publication[] = reactive([])
const res = await apiFetchPapers()
publicationData.splice(0, publicationData.length, ...res)
const yearsOptions = await apiFetchPaperYearOptions()
const selectedYear = ref(-1)
const loading = ref(false)

const openPaper = (to: string) => {
    window.open(to, "_blank")
}

const filterByYear = async (year: number) => {
    loading.value = true
    const res = await apiFetchPapers(year === -1 ? undefined : year)
    await new Promise(resolve => setTimeout(resolve, 300)); // 最少加载300ms
    loading.value = false
    publicationData.splice(0, publicationData.length, ...res)
}

</script>
<style lang="scss" scoped>
.note {
    color: #444;
    font-size: 12px;
}

.loader {
    position: absolute;
    top: 1px; // 不遮挡顶部的黑线
    left: 0;
    width: 100%;
    height: calc(100% - 1px);
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.year-options {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: auto;

    &-item {
        margin-top: 16px;
        font-size: 16px;
        color: #444;
        cursor: pointer;
        padding: 0px 12px;

        &.active {
            // font-weight: 600;
            color: white;
            background-color: black;

            &:hover {
                background-color: #333;
                color: white;
            }
        }

        &:hover {
            color: black;
        }
    }
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