<template>
    <NewsHead :title="data.title" :date="data.last_date" v-if="data"></NewsHead>

    <Main>
        <!-- <ZeroFiveLine></ZeroFiveLine> -->
        <RichTextWrapper :html="data.hypertext" v-if="data"></RichTextWrapper>
        <NotFound v-else></NotFound>
    </Main>
</template>
<script lang="ts">
export default {
    name: 'newsItem'
}
</script>
<script setup lang='ts'>
import Main from '../../components/Main.vue';
import NewsHead from './NewsHead.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import NotFound from '../404/index.vue';
import { apiFetchNews } from '../../api';
import { onMounted, ref } from 'vue';
const prop = defineProps<{
    id: string
}>()
const data = ref<News>()
const res = await apiFetchNews(prop.id)
if (res) {
    data.value = res;
}

onMounted(() => {
    document.title = data.value?.title || '新闻 / News';
})
</script>
<style lang="scss" scoped>

</style>