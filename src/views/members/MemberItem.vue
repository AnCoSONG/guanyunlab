<template>
    <div class="member" @click="routeTo(info.id)">
        <img :src="info.avatar" class="avatar" ref="avatarRef">
        <div class="info">
            <div class="cn-name">{{info.cn_name}} / {{ info.en_name }} </div>
            <!-- <div class="en-name">{{info.en_name}}</div> -->
            <div class="title">
                {{info.cn_title}} / {{info.en_title}}
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
defineProps<{
    info: Member
}>()

const router = useRouter()
const routeTo = (id: ID) => {
    router.push(`/members/${id}`)
}

const avatarRef = ref<HTMLImageElement|null>(null)
onMounted(() => {
    setTimeout(() => {
        const rect = avatarRef.value!.getBoundingClientRect()
        avatarRef.value!.style.height = rect!.width + 'px'
    }, 0 )
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
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }

        .title {
            color: #575757;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }
    }
}
</style>