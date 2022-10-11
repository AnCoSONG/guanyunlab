<template>
    <SectionTitle en="Members" cn="人员" />
    <Main>
        <div class="wrapper">
            <MainTitle type="middle" en="Teacher" cn="老师" class="subtitle"/>
            <div class="list">
                <MemberItem v-for="item in [1, 2, 3, 4, 5]" class="item"/>
            </div>
        </div>
        <div class="wrapper">
            <MainTitle type="middle" en="Student" cn="学生" class="subtitle"/>
            <div class="list">
                <MemberItem v-for="item in [1, 2, 3, 4, 5, 7, 1231,231,]" class="item"/>
            </div>
        </div>
        <div class="wrapper">
            <MainTitle type="middle" en="Intern" cn="实习生" class="subtitle"/>
            <div class="list">
                <MemberItem v-for="item in [1, 2, 3, 4, 5, 7, 6, 8]" class="item"/>
            </div>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import MainTitle from '../../components/MainTitle.vue';
import MemberItem from './MemberItem.vue';

</script>
<style lang="scss" scoped>
.wrapper {
    margin-top: 40px;
    // margin-bottom: 40px;
    width: 100%;
    position: relative;

    @media (max-width: 700px) {
        margin-top: 24px;
    }

    .subtitle {
        margin-bottom: 18px;
    }

    .list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 40px;

        .item {
            width: 100%;
        }

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 700px) and (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1600px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;

        }
    }
}

</style>