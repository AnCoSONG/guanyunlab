<template>
    <div class="hero-swiper">
        <Swiper :modules="modules" class="swiper"
            :autoplay="{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false}"
            :pagination="{bulletActiveClass: 'swiper-active-bullet', clickable: true}"
            :loop="heroImgs.length > 1"
            >
            <SwiperSlide class="swiper-slide" v-for="item in heroImgs">
                <img class="hero-img" :class="{notRoute: notRoute}"
                    :src="item.src" alt="Hero Placeholder" :style="{maxHeight: enableMaxHeight ? heroImgMaxHeight + 'px' : 'initial'}" 
                    loading="lazy" @click="routeTo(item.href)">
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';

const router = useRouter()
const modules = [Autoplay, Navigation, Pagination]
const props = withDefaults(defineProps<{
    heroImgs: HeroImg[],
    notRoute?: boolean,
    enableMaxHeight?: boolean
}>(), {
    notRoute: false,
    enableMaxHeight: false
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

const heroImgMaxHeight = computed(() => {
    return window.innerHeight - document.querySelector('header.global-header')!.clientHeight - 13;
})
</script>
<style lang="scss" scoped>
.hero-swiper {
    width: 100%;
    // min-height: 300px;
    // background-color: #141414;
    // color: whitesmoke;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-bottom: 80px;
    z-index: 0;
    position: sticky;
    top: 0;

    @media (max-width: 700px) {
        padding-bottom: 24px;
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
                display: block;
                object-fit: cover;
                user-select: none;
                cursor: pointer;

                &.notRoute {
                    cursor: default;
                }
            }


        }
    }
}

// .bull
</style>