<template>
    <SectionTitle en="Members" cn="成员" v-if="data" />
    <div class="hero-info-wrapper" v-if="data">
        <img :src="data.hero_avatar" alt="" class="hero_img">
        <div class="info">
            <div class="cn-name">{{ data.cn_name }}</div>
            <div class="en-name">{{ data.en_name }}</div>
            <div class="title"> <b>{{ data.cn_title }}</b> / {{ data.en_title }}</div>
        </div>
    </div>
    <Main>
        <div class="hyper-text-wrapper" v-if="data">
            <RichTextWrapper :html="data.hypertext"></RichTextWrapper>
        </div>
        <NotFound v-else></NotFound>
    </Main>
</template>

<script setup lang='ts' name="memberItem">
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import { apiFetchMember } from '../../api';
import NotFound from '../404/index.vue';
import { ref } from 'vue';

const props = defineProps<{
    id: string
}>()
console.log(props.id)
const data = ref<Member>()
const res = await apiFetchMember(props.id)
if (res) {
    data.value = res;
}

</script>
<style lang="scss" scoped>
.hero-info-wrapper {
    background-color: #f2f2f2;
    padding-top: 40px;
    padding-left: 14%;
    padding-right: 14%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-column-gap: 20px;
    align-items: flex-end;
    position: relative;
    width: 100%;

    @media (max-width: 700px) {
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        margin-top: 13px;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;

    }

    @media (min-width: 1900px) {
        grid-template-columns: 5fr 15fr;
        grid-column-gap: 60px;
    }

    .hero_img {
        width: 100%;
        height: auto;
        display: block;
    }

    .info {
        margin-bottom: 40px;



        @media (max-width: 700px) {
            margin-bottom: 16px;
        }

        @media (min-width: 700px) and (max-width: 1024px) {
            margin-bottom: 32px;
        }

        @media (min-width: 1900px) {
            margin-bottom: 60px;
        }

        .cn-name {
            color: black;
            font-size: 20px;
            line-height: 1.3;
            font-weight: bold;

            @media (max-width: 350px) {
                font-size: 16px;
                line-height: 1.5;
            }
        }

        .en-name {
            color: black;
            font-size: 16px;
            line-height: 1.6;
            font-weight: bold;

            @media (max-width: 350px) {
                font-size: 14px;
                line-height: 1.5;
            }
        }

        .title {
            color: #575757;
            font-size: 12px;
            line-height: 1.6;

            // line-height: 1.6;
            @media (max-width: 350px) {
                line-height: 1.5;
            }
        }

    }
}

.hyper-text-wrapper {
    padding-top: 40px;
    box-sizing: border-box;

    @media (max-width: 700px) {
        padding-top: 0px;
    }
}
</style>