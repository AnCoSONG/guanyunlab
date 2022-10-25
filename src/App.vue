<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeaderBodyFooter from './layouts/HeaderBodyFooter.vue';
</script>
<template>
    <HeaderBodyFooter>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <KeepAlive exclude="projectItem,newsItem,memberItem">
                <Suspense>
                    <component :is="Component"></component>
                    <template #fallback>
                        <div class="loader">
                            Loading ... / 加载中 ...
                        </div>
                    </template>
                </Suspense>
            </KeepAlive>
        </template>
    </RouterView>
    </HeaderBodyFooter>
</template>

<style lang="scss">

.loader {
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.swiper-active-bullet {
    opacity: 1!important;
    background-color: $fgcolor!important;
}
</style>
