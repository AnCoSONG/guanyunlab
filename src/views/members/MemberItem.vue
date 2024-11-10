<template>
    <div class="member" @click="routeTo(parseEnName(info.en_name))">
        <img :src="info.avatar" class="avatar" ref="avatarRef" v-if="!isGraduate" loading="lazy">
        <div class="info">
            <div class="cn-name">{{info.cn_name}} </div>
            <div class="en-name">{{info.en_name}}</div>
            <div class="title">
                {{info.en_title}}
                <!-- {{info.cn_title}} {{ isGraduate?"":"/" }} {{info.en_title}} -->
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { isRef, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { parseEnName } from '../../utils';
const {info, isGraduate, isRefer} = withDefaults(defineProps<{
    info: Member,
    isGraduate?: boolean,
    isRefer?: boolean
}>(),
    {
        isGraduate: false,
        isRefer: false
    }
)

const emits = defineEmits(['imgWidth'])


const router = useRouter()
const routeTo = (en_name: string) => {
    // router.push(`/members/${en_name}`)
    window.open(
        `members/${en_name}`,
        '_blank'
    )
}

const avatarRef = ref<HTMLImageElement|null>(null)
onMounted(() => {
    // setTimeout(() => {
    //     const rect = avatarRef.value!.getBoundingClientRect()
    //     avatarRef.value!.style.height = rect!.width + 'px'
    // }, 0 )
    // 订阅img的宽度变化
    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            avatarRef.value!.style.height = width + 'px'
            if(isRefer) {
                // console.log('emits')
                emits('imgWidth', width)
            }
        }
    });
    if (!isGraduate) {
        observer.observe(avatarRef.value!);
    }

    return () => {
        observer.disconnect()
    }

})
</script>
<style lang="scss" scoped>
.member {
    position: relative;
    display: flex;
    flex-flow: nowrap column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    cursor: pointer;

    .avatar {
        width: 100%;
        // height: 220px;
        height: auto;
        object-fit: cover;
        display: block;
        position: relative;
        // border: 1px solid #1d1d1d;
        margin-bottom: 6px;
        user-select: none;
    }

    .info {
        display: flex;
        flex-flow: nowrap column;
        justify-content: flex-start;
        align-items: flex-start;

        .cn-name {
            color: #141414;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
        }

        .en-name {
            color: #232323;
            // color: #575757;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }

        .title {
            color: #232323;
            // color: #575757;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }
    }
}
</style>