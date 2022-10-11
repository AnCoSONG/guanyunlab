<template>
    <div class="member" @click="routeTo(info.id)">
        <img :src="info.avatar" class="avatar">
        <div class="info">
            <div class="cn-name">{{info.name.cn}}</div>
            <div class="en-name">{{info.name.en}}</div>
            <div class="title">
                {{info.title.en}} / {{info.title.cn}}
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router'
withDefaults(defineProps<{
    info: Member
}>(), {
    info: () => ({
        id: 123,
        avatar: 'https://dummyimage.com/600x600/f2f2f2/141414&text=logo',
        hero_avatar: 'https://dummyimage.com/1200x1200/f2f2f2/141414&text=logo',
        name: {
            cn: '吴文起',
            en: 'Wenqi Wu'
        },
        title: {
            cn: '博士',
            en: 'Ph.D',
        },
        hypertext: '<h2>Test / 测试</h2><p>方面方面方面</p><b>哈喽</b><hr><h2>Publications / 已发表论文</h2><ul><li><a href="https://www.baidu.com">A-line: 4D Printing Morphing Linear Composite Structures. CHI 2019</a></li></ul><hr><img src="https://dummyimage.com/600x400/000/ffffff&text=Hero1"></img><img src="https://dummyimage.com/800x400/000/ffffff&text=Hero3"></img>'
    })
})

const router = useRouter()
const routeTo = (id: ID) => {
    router.push(`/members/${id}`)
}
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
        border: 1px solid #1d1d1d;
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