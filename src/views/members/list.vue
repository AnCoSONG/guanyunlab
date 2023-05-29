<template>
    <SectionTitle en="Members" cn="成员" />
    <Main>
        <div class="wrapper">
            <MainTitle type="middle" en="老师" cn="Teacher" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item in members.teacher" class="item" :info="item" />
            </div>
        </div>
        <!-- 待修改数据库 -->
        <div class="wrapper">
            <MainTitle type="middle" en="博士后" cn="Postdoc" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item in members.postdoc" class="item" :info="item"/>
            </div>
        </div>
        <div class="wrapper">
            <MainTitle type="middle" en="学生" cn="Student" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item in members.student" class="item" :info="item"/>
            </div>
        </div>
        <div class="wrapper">
            <MainTitle type="middle" en="实习生" cn="Intern" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item in members.intern" class="item" :info="item"/>
            </div>
        </div>
        <div class="wrapper">
            <MainTitle type="middle" en="校友" cn="Graduate" class="subtitle" />
            <div class="list">
                <MemberItem :is-graduate="true" v-for="item in members.graduate" class="item" :info="item"/>
            </div>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import MainTitle from '../../components/MainTitle.vue';
import MemberItem from './MemberItem.vue';
import { apiFetchMembers } from '../../api';
import { reactive } from 'vue';

const members = reactive<{ student: Member[], teacher: Member[], postdoc: Member[], intern: Member[], graduate: Member[] }>({ student: [], teacher: [], postdoc: [], intern: [], graduate: [] })
const res = await apiFetchMembers()
members.student = [...res.student]
members.teacher = [...res.teacher]
members.intern = [...res.intern]
members.graduate = [...res.graduate]
members.postdoc = [...res.postdoc]

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