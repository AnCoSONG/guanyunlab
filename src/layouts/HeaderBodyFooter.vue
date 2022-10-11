<template>
    <Header labname="Morphing Matter Lab" desc="Directed by Prof. Lining Yao at Carnegie Mellon University" />
    <div class="body">
        <slot></slot>
    </div>
    <Footer />
</template>
<script setup lang='ts'>
import Header from 'comps/Header.vue';
import Footer from 'comps/Footer.vue';
</script>
<style lang="scss" scoped>
.body {
    width: 100%;
    position: relative;
    // padding: 0px 24px;
    padding-top: 13px;
    padding-bottom: 20px;
    box-sizing: border-box;
}
</style>