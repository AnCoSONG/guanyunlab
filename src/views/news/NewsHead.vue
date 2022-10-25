<template>
    <div class="news-info">
        <div class="news-title">
            {{title}}
        </div> 
        <div class="news-date">
            UPDATE: {{ new Date(date).toLocaleDateString() }}
        </div>
    </div>
</template>
<script setup lang='ts'>

defineProps<{title: string, date: string}>()
</script>
<style lang="scss" scoped>
.news-info {
    width: 100%;
    position: relative;
    display: block;
    padding: 0 14%;
    margin-top: 100px;
    margin-bottom: 40px;
    text-align: left;
    line-height: 1.4;
    color: #141414;
    box-sizing: border-box;
    @media (max-width: 700px) {
        padding: 0px 24px;
        margin-top: 13px;
        margin-bottom: 0px;
    }

    .news-title {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.6;
    }

    .news-date {
        font-size: 14px;
        color: #4c4c4c;
        line-height: 1.6;
    }
}
</style>