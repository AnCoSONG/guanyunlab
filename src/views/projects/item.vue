<template>
    <HeroSwiper v-if="data" :hero-imgs="heroImgs" :not-route="true" :enable-max-height="false"/>
    <Main>
        <div class="item-main" v-if="data">
            <div class="basic-info">
                <div class="name-date-views">
                    <MainTitle type="same" :en="data.en_name" :cn="data.cn_name" />
                    <div class="date">{{ toMonthYear(data.create_date) }}</div>
                    <div class="views">({{data.view_count}} Views)</div>
                </div>
                <div class="authors-abstracts">
                    <div class="authors">
                        <div class="en-author">{{data.en_authors}}</div>
                        <div class="cn-author">{{data.cn_authors}}</div>
                    </div>
                    <div class="abstracts">
                        <div class="en-abstract">{{data.en_abstract}}</div>
                        <div class="cn-abstract">{{data.cn_abstract}}</div>
                    </div>
                </div>
            </div>
            <ZeroFiveLine></ZeroFiveLine>
            <div class="hyper-text-wrapper">
                <RichTextWrapper :html="data.hypertext" />
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
import { apiFetchProject } from '../../api';
import HeroSwiper from '../../components/HeroSwiper.vue';
import Main from '../../components/Main.vue';
import MainTitle from '../../components/MainTitle.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
import NotFound from '../404/index.vue';
import { toMonthYear } from '../../utils';
const router = useRouter()
const props = defineProps<{
    id: string
}>()
const data = ref<Project>()
const res = await apiFetchProject(props.id)
if (res) {
    data.value = res;
}

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

//todo: 更新viewcount
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
                max-width: unset;;
                width: 100%;
                margin-bottom: 24px;
            }

            .date {
                color: #454545;
                font-size: 16px;
                line-height: 1.5;
            }

            .views {
                color: #454545;
                font-size: 14px;
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
        // padding-top: 0px;
    }

}


</style>