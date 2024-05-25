<template>
    <div class="hero-swiper" :class="{notSticky: issafari || true}">
        <div class="left-controller" @click="swiperRef?.slidePrev()">
            <img class="btn" :src="leftBtn" alt="right btn" v-if="enableArrows && heroImgs.length > 1" >
        </div>
        <Swiper @swiper="(swiper) => swiperRef = swiper" :modules="modules" class="swiper"
            :autoplay="{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false}"
            :pagination="{bulletActiveClass: 'swiper-active-bullet', clickable: true}"
            :loop="heroImgs.length > 1"
            >
            <SwiperSlide class="swiper-slide" v-for="item in heroImgs">
                <img class="hero-img" :class="{notRoute: notRoute}"
                    :src="item.src" alt="Hero Placeholder"
                    @click="routeTo(item.href)"
                    :style="{maxHeight: enableMaxHeight ? heroImgMaxHeight + 'px' : 'initial'}"
                    >
            </SwiperSlide>
        </Swiper>
        <div class="right-controller" >
            <img class="btn" :src="rightBtn" alt="left btn" @click="swiperRef?.slideNext()" v-if="enableArrows && heroImgs.length > 1"/>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
import leftBtn from '../assets/arrow_left.svg'
import rightBtn from '../assets/arrow_right.svg'

const swiperRef = ref()
const router = useRouter()
const modules = [Autoplay, Navigation, Pagination]
const props = withDefaults(defineProps<{
    heroImgs: HeroImg[],
    notRoute?: boolean,
    enableMaxHeight?: boolean,
    enableArrows?: boolean,
}>(), {
    notRoute: false,
    enableMaxHeight: false,
    enableArrows: false
})

const routeTo = (to: string) => {
    if (props.notRoute) {
        return;
    }
    if (to[0] == '/') {
        router.push(to)
    } else {
        window.open(to, '_blank')
    }
}

// 检测到safari则关闭sticky设置
const issafari =
    navigator.userAgent.indexOf('Safari') != -1 &&
    navigator.userAgent.indexOf('Chrome') == -1;

const heroImgMaxHeight = computed(() => {
    return window.innerHeight - document.querySelector('header.global-header')!.clientHeight - 13 - 20;
})
</script>
<style lang="scss" scoped>
.hero-swiper {
    width: 100%;
    // min-height: 300px;
    // background-color: #141414;
    // color: whitesmoke;
    // position: relative;
    // padding: 0 14%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-bottom: 80px;
    z-index: 0;
    position: sticky;
    top: 0;

    // @media (max-width: 700px) {
    //     padding: 0 24px;
    // }

    &.notSticky {
        position: relative;
    }

    // @media (max-width: 700px) {
    //     padding-bottom: 24px;
    // }
    .left-controller, .right-controller {
        min-width: 14%;
        max-width: 14%;
        display: flex;
        flex-flow: nowrap column;
        justify-content: center;
        // align-items: center;

        @media (max-width: 700px) {
            min-width: 24px;
            max-width: 24px;
        }

        .btn {
            width: 100%;
            max-width: 36px;
            cursor: pointer;
        }
    }
    .left-controller {
        align-items: flex-end;
    }

    .right-controller {
        align-items: flex-start;
    }

    .swiper {
        width: 100%;
        position: relative;
        height: 100%;

        .swiper-slide {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .hero-img {
                width: 100%;
                height: 100%;
                aspect-ratio: 3 / 2;
                display: block;
                object-fit: cover;
                user-select: none;
                cursor: pointer;

                &.notRoute {
                    cursor: default;
                }

                @media screen and (max-width: 700px) {
                    aspect-ratio: 1 / 1;
                }
            }


        }
    }
}

// .bull
</style>