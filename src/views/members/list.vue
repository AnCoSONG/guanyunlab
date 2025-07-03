<template>
    <SectionTitle en="Members" cn="成员" />
    <Main>
        <div class="wrapper" v-if="members.teacher.length > 0">
            <MainTitle type="middle" en="老师" cn="Teacher" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item, index in members.teacher" class="item" :info="item" :is-refer="index == 0"
                    @imgWidth="updateImageWidth" />
            </div>
        </div>
        <!-- 待修改数据库 -->
        <div class="postdoc-ra-wrapper" v-if="members.ra.length > 0 || members.postdoc.length > 0">
            <div class="postdoc">
                <MainTitle type="middle" en="博士后" cn="Postdoc" class="subtitle" />
                <div class="inline-list">
                    <MemberItem v-for="item in members.postdoc" class="item" :info="item" />
                </div>
            </div>
            <div class="ra" v-if="members.ra.length > 0">
                <MainTitle type="middle" en="科研助理" cn="RA" class="subtitle" />
                <div class="inline-list">
                    <MemberItem v-for="item in members.ra" class="item" :info="item" />
                </div>
            </div>
        </div>
        <div class="wrapper" v-if="members.student.length > 0">
            <MainTitle type="middle" en="学生" cn="Student" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item in members.student" class="item" :info="item" />
            </div>
        </div>
        <div class="wrapper" v-if="members.intern.length > 0">
            <MainTitle type="middle" en="实习生" cn="Intern" class="subtitle" />
            <div class="list">
                <MemberItem v-for="item in members.intern" class="item" :info="item" />
            </div>
        </div>
        <div class="wrapper" v-if="members.graduate.length > 0">
            <MainTitle type="middle" en="过往成员" cn="Alumni" class="subtitle" />
            <div class="list graduate">
                <MemberItem :is-graduate="true" v-for="item in members.graduate" class="item" :info="item" />
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
import { onMounted, reactive, ref } from 'vue';
import { reOrderGraduate } from './utils'

const members = reactive<{ student: Member[], teacher: Member[], postdoc: Member[], intern: Member[], graduate: Member[], ra: Member[] }>({ student: [], teacher: [], postdoc: [], intern: [], graduate: [], ra: [] })
const res = await apiFetchMembers()
members.student = [...res.student]
members.teacher = [...res.teacher]
members.intern = [...res.intern]
members.graduate = [...res.graduate]
reOrderGraduate(members.graduate) // sort in place
members.postdoc = [...res.postdoc]
members.ra = [...res.ra]

const imageWidth = ref('0px')
const updateImageWidth = (w: number) => {
    // console.log('eee')
    imageWidth.value = w + 'px'
}
</script>
<style lang="scss" scoped>
.postdoc,
.ra {
    width: auto;
    margin-top: 40px;
}

.postdoc {
    @media (max-width: 700px) {
        margin-top: 0px;
    }
}

.ra {
    @media (max-width: 700px) {
        margin-top: 24px;
    }
}

.wrapper {
    margin-top: 40px;
}

.postdoc-ra-wrapper {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0px 40px; // post doc和ra之间有40px的gap，gap相比margin的好处是如果换行gap不会撑大行，而margin会
}

.wrapper,
.postdoc-ra-wrapper {
    // margin-top: 40px;
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

        &.graduate {
            @media (max-width: 400px) {
                grid-template-columns: 1fr;
            }

            @media (min-width: 400px) and (max-width: 600px) {
                grid-template-columns: 1fr 1fr;
            }

            @media (min-width: 600px) and (max-width: 800px) {
                grid-template-columns: 1fr 1fr 1fr;

            }
 
            @media (min-width: 800px) and (max-width: 1000px) {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }

            @media (min-width: 1000px) and (max-width: 1200px) {
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            }

            @media (min-width: 1200px) and (max-width: 1600px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (min-width: 1600px) {
                grid-template-columns: repeat(8, 1fr);
            }
        }
    }

    .inline-list {
        display: flex;
        flex-flow: wrap row;
        gap: 12px 40px; // 使用gap设置间距，不使用margin，因为margin会撑大行，而gap不会

        .item {
            width: v-bind(imageWidth);
            // margin-right: 40px;
            // margin-top: 12px;
            // box-sizing: border-box;

            // @media screen and (max-width: 700px) {
            //     margin-right: 0px;
            // }

            // &:last-child {
            //     margin-right: 0px;
            // }

            // &:first-child {
            //     padding-right: 40px;
            // }
        }
    }



    // .item.member:last-child {
    //     margin-right: 0px;
    // }
}
</style>