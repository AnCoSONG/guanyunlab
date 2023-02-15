<template>
    <article class="rich-text-wrapper" v-html="sanitizedHtml">
    </article>
</template>
<script setup lang='ts'>
import { computed } from 'vue';
import DOMPurify from 'dompurify';

const props = defineProps<{
    html: string
}>()

const sanitizedHtml = computed(() => {
    const clean = DOMPurify.sanitize(props.html, { ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] })
    console.log(clean)
    return clean
})
</script>
<style lang="scss" scoped>
.rich-text-wrapper {
    position: relative;
    width: 100%;
    color: #141414;

    &:deep(h1) {
        font-size: 24px;
        color: #454545;
        margin: 0;
        margin-top: 24px;
        line-height: 1.4;
        box-sizing: border-box;
        font-weight: 400;

        &:first-child {
            margin-top: 0px;
        }
    }

    &:deep(h2) {
        font-size: 20px;
        color: #454545;
        margin: 0;
        margin-top: 24px;
        line-height: 1.4;
        box-sizing: border-box;
        font-weight: 400;

        &:first-child {
            margin-top: 0px;
        }
    }

    &:deep(h3) {
        font-size: 18px;
        color: #454545;
        margin: 0;
        margin-top: 24px;
        line-height: 1.4;
        box-sizing: border-box;
        font-weight: 400;

        &:first-child {
            margin-top: 0px;
        }
    }

    &:deep(hr) {
        width: 100%;
        position: relative;
        // padding: 8px 0px;
        border: 0;
        margin: 24px 0px;
        height: 1px;
        // overflow: hidden;

        &::after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: black;
            transform: scaleY(0.5);
        }
    }

    &:deep(a) {
        color: #747474;
        font-style: italic;
        font-family: Helvetica, Arial, sans-serif;
    }

    &:deep(ul) {
        list-style: disc;
    }

    &:deep(img) {
        max-width: 100%;
        display: block;
        margin-top: 24px;
        box-sizing: border-box;
        overflow: hidden;
        height: auto;
        object-fit: fill;

        // &:hover {
        //     filter: opacity(0.5);
        // }

        &.full {
            width: 100%;
        }

    }

    &:deep(iframe) {
        aspect-ratio: 16/9;
        width: 100%;
        max-width: 100%;
        height: auto;
    }

    &:deep(video) {
        max-width: 100%;
        height: auto;
    }

    &:deep(blockquote) {
        border-left: 2px solid #ccc;
        padding-left: 1rem;
        margin-left: 0;
        color: #747474;
    }
}
</style>