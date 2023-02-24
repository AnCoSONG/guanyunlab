<template>
    <header class="global-header">
        <div class="labname">
            <div class="contact" @click="routeTo('/')">
                <span class="labtitle"> {{ labname }} </span>
                <span style="display: inline-block;" class="labsep">&nbsp;|&nbsp;</span>
                <span class="labdesc">{{ desc }}</span>
            </div>
            <div class="compact">
                <div class="line1" @click="routeTo('/')">{{ labname }}</div>
                <div class="line2" @click="routeTo('/')">{{ desc }}</div>
            </div>
        </div>
        <div class="subpages">
            <div class="btns">
                <TextButton style="font-size: 13px;" class="subpage-item" v-for="item, index in subpages" :text="item.text"
                    @click="routeTo(`/${item.href}`)" />
            </div>
            <div class="menu">
                <div class="menu-item" @click="menuShow = true">
                    <div class="line" id="line1"></div>
                    <div class="line" id="line2"></div>
                    <div class="line" id="line3"></div>
                </div>
                <Teleport to="body">
                    <div class="menu-content" :class="{ show: menuShow }">
                        <TextButton class="subpage-item" v-for="item, index in subpages" :text="item.text" :href="item.href"
                            @click="routeTo(`/${item.href}`)" />
                        <div class="close-btn" @click="menuShow = false">×</div>
                    </div>
                </Teleport>
            </div>
        </div>
    </header>
</template>
<script setup lang='ts'>
import { onUnmounted, ref } from 'vue';
import TextButton from './TextButton.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
defineProps<{
    labname: string,
    desc: string,
}>()
const subpages = [
    {
        text: '关于/ABOUT',
        href: 'about'
    },
    {
        text: '项目/PROJECTS',
        href: 'projects'
    },
    {
        text: '出版/PUBLICATION', // 不可数名词
        href: 'publication'
    },
    {
        text: '成员/MEMBERS',
        href: 'members'
    },
    {
        text: '联系/CONTACT',
        href: 'contact'
    },
]

const menuShow = ref(false)

const routeTo = (to: string) => {
    if (menuShow.value) {
        menuShow.value = false
    }
    router.push({ path: to })
}
// shape 0: default, shape 1: menu, shape 2: less title

onUnmounted(() => {

})
</script>
<style lang="scss" scoped>
.global-header {
    display: flex;
    width: 100%;
    position: relative;
    flex-flow: nowrap row;
    align-items: center;

    justify-content: space-between;
    box-sizing: border-box;
    font-size: 14px;
    padding: 37px 24px;
    padding-bottom: 6px;

    @media (max-width: 700px) {
        // padding: 18.5px 12px;
    }

    .labname {
        @media (min-width: 700px) {
            .contact {
                display: block;
            }

            .compact {
                display: none;
            }
        }

        @media (max-width: 700px) {
            .contact {
                display: none;
            }

            .compact {
                display: block;
            }
        }

        .contact {
            &:hover {
                color: #aaa;
                cursor: pointer;
            }

            .labtitle,
            .labsep,
            .labdesc {
                font-size: 16px;
                font-weight: 600;

            }
        }

        .compact {
            .line1 {
                display: inline-block;
                cursor: pointer;
                font-size: 16px;

                &:hover {
                    color: #aaa;
                    cursor: pointer;
                }
            }

            .line2 {
                cursor: pointer;
                font-size: 12px;
                color: #aaa;
                // min-width: 310px;
                word-break: keep-all;
                // white-space: nowrap;
                // text-overflow: ellipsis;
                // overflow: hidden;
            }
        }
    }


    // .labname::selection {
    //     color: $bgcolor;
    //     background-color: $fgcolor;
    // }

    .subpages {
        position: relative;

        @media (max-width: 1280px) {
            .btns {
                display: none !important;
            }

            .menu {
                display: block !important;
            }
        }

        @media (min-width: 1280px) {
            .btns {
                display: flex !important;
            }

            .menu {
                display: none !important;
            }
        }


        .btns {
            position: relative;
            display: flex;
            flex-flow: nowrap row;

            >* {
                margin: 0px 20px;

                &:last-child {
                    margin-right: 0px;
                }
            }

        }

        .menu {
            position: relative;
            margin-left: 10px;

            .menu-item {
                position: relative;
                display: flex;
                flex-flow: nowrap column;
                justify-content: space-between;

                width: 24px;
                height: 18px;
                cursor: pointer;

                @media (max-width: 700px) {
                    width: 18px;
                    height: 14px;
                }

                // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));

                .line {
                    width: 100%;
                    height: 2px;
                    background-color: $fgcolor;
                }

            }

        }

    }
}

.menu-content {
    position: fixed;
    display: flex;
    z-index: 100;
    top: 0;
    bottom: 0;
    // height: 100%;
    padding: 48px 24px;
    box-sizing: border-box;
    transform: translateY(-130%);
    width: 100%;
    font-size: 14px;
    background-color: $bgcolor;
    color: $fgcolor;
    // box-shadow: 0 4px 4px 0px rgba(0, 0, 0, .1);
    // display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);

    // > * {
    //     margin: 10px 0px;
    // }
    &.show {
        transform: translateY(0);
    }

    .close-btn {
        font-size: 24px;
        cursor: pointer;
        margin-top: 16px;
    }
}</style>