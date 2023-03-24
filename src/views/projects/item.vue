<template>
    <HeroSwiper v-if="data" :hero-imgs="[{ src: data.hero_img, href: '#' }]" :not-route="true"
        :enable-max-height="true" />
    <Main pad>
        <div class="item-main" v-if="data">
            <div class="basic-info">
                <div class="name-date-views">
                    <MainTitle type="same" :en="data.cn_name" :cn="data.en_name" />
                    <div class="date">{{ toMonthYear(data.create_date) }}</div>
                    <!-- 去掉View展示 -->
                    <!-- <div class="views">({{ data.view_count }} Views)</div> -->
                </div>
                <div class="authors-abstracts">
                    <div class="authors">
                        <div class="en-author">{{ data.en_authors }}</div>
                        <div class="cn-author">{{ data.cn_authors }}</div>
                    </div>
                    <div class="abstracts">
                        <div class="en-abstract">{{ data.en_abstract }}</div>
                        <div class="cn-abstract">{{ data.cn_abstract }}</div>
                    </div>
                </div>
            </div>
            <ZeroFiveLine></ZeroFiveLine>
            <div class="hyper-text-wrapper">
                <RichTextWrapper :html="data.hypertext" />
            </div>
            <!-- todo: gallery -->
            <div class="gallery" v-if="data.imgs.length > 0">
                <!-- 展板 -->
                <img :src="displayBoardImg" alt="Display board" class="display-board">
                <!-- 选项器 flex row wrap -->
                <div class="candidates">
                    <img class="candidate" :src="item" :alt="'candidate: ' + index" v-for="item, index in data.imgs"
                        @click="displayBoardImg = item">
                </div>
            </div>
        </div>
        <NotFound v-else></NotFound>
    </Main>
</template>
<script lang="ts">
export default {
    name: "projectItem",
};
</script>
<script setup lang='ts'>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { apiFetchProject, apiIncrementProjectView } from '../../api';
import HeroSwiper from '../../components/HeroSwiper.vue';
import Main from '../../components/Main.vue';
import MainTitle from '../../components/MainTitle.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
import NotFound from '../404/index.vue';
import { isViewed, setViewed, toMonthYear } from '../../utils';
const router = useRouter()
const props = defineProps<{
    id: string
}>()
const data = ref<Project>()
const res = await apiFetchProject(props.id)
if (res) {
    data.value = res;
}

// break change: 去掉heroImgs，用hero_img作为头图, imgs作为gallery内容
const heroImgs = computed(() => {
    if (data.value) {
        return data.value.imgs.map((img: string) => {
            return {
                src: img,
                href: '#'
            }
        })
    }
    return []
})

onMounted(async () => {
    // 如果localStorage中没有该项目被查看过的标识，则更新该项目的浏览量
    if (!isViewed(props.id)) {
        await apiIncrementProjectView(props.id)
        setViewed(props.id)
        console.log('view success')
    } else {
        console.log('have viewed')
    }
})

// 展板区域
const displayBoardImg = ref(data.value?.imgs[0])

// 设置页面标题
onMounted(() => {
    document.title = data.value?.cn_name + '/' + data.value?.en_name || '项目 / Project'
})

</script>
<style lang="scss" scoped>
.item-main {
    position: relative;
    width: 100%;

    .basic-info {
        display: flex;
        flex-flow: wrap row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 24px 0px;
        // border-bottom: 1px solid #141414;

        @media (max-width: 1000px) {
            flex-flow: nowrap column;
            padding-top: 13px;
        }

        .name-date-views {
            margin-right: 40px;
            flex-grow: 0;
            max-width: calc(35% - 40px);
            // box-sizing: border-box;

            @media (max-width: 1000px) {
                margin-right: 0;
                max-width: unset;
                ;
                width: 100%;
                margin-bottom: 24px;
            }

            .date {
                color: #454545;
                font-size: 13px;
                line-height: 1.5;
            }

            .views {
                color: #454545;
                font-size: 13px;
                line-height: 1.5;
            }
        }

        .authors-abstracts {
            min-width: 65%;
            flex: 1;

            @media (max-width: 1000px) {
                min-width: unset;
                width: 100%;
            }

            .authors {
                margin-bottom: 20px;

                .en-author {
                    font-weight: bold;
                }
            }

            .en-abstract {
                margin-bottom: 24px;
            }
        }
    }

    .hyper-text-wrapper {
        position: relative;
        width: 100%;
        padding: 24px 0px;
        padding-top: 12px;
        // padding-top: 0px;
    }

}

.gallery {
    position: relative;
    width: 100%;
    padding: 24px 0px;
    box-sizing: border-box;
    // border-bottom: 1px solid #141414;

    @media (max-width: 700px) {
        padding: 12px 0px;
    }

    .display-board {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .candidates {
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        // padding: 24px 0px;


        .candidate {
            width: calc((100% - 2px * 9) / 10);
            height: auto;
            max-height: 100px;
            object-fit: cover;
            margin-right: 2px;
            margin-top: 2px;
            cursor: pointer;

            &:nth-child(10n) {
                margin-right: 0;
            }

            @media (max-width: 1000px) and (min-width: 500px){
                width: calc((100% - 2px * 4) / 5);
                &:nth-child(5n) {
                    margin-right: 0;
                }
            }

            @media (max-width: 500px) {
                width: calc((100% - 2px * 2) / 3);
                &:nth-child(3n) {
                    margin-right: 0;
                }
            }

            
        }
    }
}
</style>