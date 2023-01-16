<template>
    <SectionTitle en="Contact" cn="联系"></SectionTitle>
    <Main>
        <ZeroFiveLine></ZeroFiveLine>
        <!-- <div class="wrapper">
            <div class="column">
                <div class="title">
                    <div>如果你正在寻求一个研究职位：</div>
                    <div>If you are seeking a research position:</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="contactHtml" />
                </div>
            </div>
            <div class="divide-line">
                <div class="main-line"></div>
            </div>
            <div class="column">
                <div class="title">
                    <div>如果你正在寻求合作或赞助一个项目：</div>
                    <div>If you are seeking to collaborate or sponsor a project:</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="sponsorHtml" />
                </div>
            </div>
        </div>
        <div class="slightly-shorter-line">
            <ZeroFiveLine></ZeroFiveLine>
        </div>
        <div class="wrapper loc-info">
            <div class="column">
                <div class="title">
                    <div>实验室 / 办公室</div>
                    <div>Lab / Office</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="locHtml"></RichTextWrapper>
                </div>
            </div>
            <div class="divide-line">
                <div class="main-line"></div>
            </div>
            <div class="column">
                <div class="title">
                    <div>参观我们的实验室</div>
                    <div>Visit Our Lab</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="contactHtml"></RichTextWrapper>
                </div>
            </div>
        </div>
        <div class="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13778.753624542176!2d120.0820935!3d30.302931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344b63944a670671%3A0xa84f531f3585cebc!2sZhejiang%20Univ%20Zijin&#39;Gang%20Camp!5e0!3m2!1sen!2s!4v1664816476108!5m2!1sen!2s"
                width="100%" height="auto"
                style="border:0;filter: grayscale(0.8) hue-rotate(-30deg); aspect-ratio: 3/2;" allowfullscreen="true"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            <div class="annotation">
                <div>* Please check your network connection if the above content does not appear.
                </div>
            </div>
            <img src="https://dummyimage.com/600x400/c2c2c2/000000&text=Location" alt="实验室位置, The location of lab" style="width: 100%;display: block;">

        </div> -->
        <RichTextWrapper :html="contactHtml" />
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { apiFetchContactHypertexts } from '../../api';

const res = await apiFetchContactHypertexts();
const contactHtml = ref(res.contact_hypertext);

</script>
<style lang="scss" scoped>
.wrapper {
    padding: 40px 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    color: #454545;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 700px) {
        padding: 40px 0px;
    }

    .divide-line {
        width: 100%;
        position: relative;
        height: 100%;
        transform: scaleX(0.5);
        padding: 20px 0px;
        box-sizing: border-box;

        @media (max-width: 1300px) {
            display: none;
        }

        .main-line {
            background-color: #141414;
            width: 100%;
            height: 100%;
        }
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 25px;
        // line-height: 1.6;
    }

    .column {
        line-height: 1.6;

    }
}

.slightly-shorter-line {
    padding: 0px 6%;
}

.loc-info {
    grid-template-columns: 2fr 1px 1fr;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr;

    }
}

.location {
    background: url(../../assets/loader.gif) center center no-repeat;
    background-size: 48px;
    padding: 0px 20px;
    box-sizing: border-box;

    @media (max-width: 700px) {
        padding: 0px;
    }

    .annotation {
        color: #757575;
        font-size: 12px;
    }
}
</style>