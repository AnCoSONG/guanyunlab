<template>
    <div class="main-title" :class="{large: props.type=='large', same: props.type=='same'}">
        <span :class="props.reverse?'cn':'en'">{{props.en}}</span>
        <span class="slash">&nbsp;/&nbsp;</span>
        <span :class="props.reverse?'en':'cn'">{{props.cn}}</span>
    </div>
</template>
<script setup lang='ts'>
const props = withDefaults(defineProps<{
    en: string,
    cn: string,
    type: 'large' | 'middle' | 'same',
    reverse: boolean,
}>(), { reverse: false })
</script>
<style lang="scss" scoped>
.main-title {
    position: relative;
    color: #454545;
    cursor: default;
    word-break: break-word; // 必须留着，keep-all使名字成为一个整体，而break-word将整体分开
    line-height: 1.4;

    .en {
        font-size: 20px;
        word-break: keep-all;
    }

    .slash {
        font-size: 20px;
    }

    .cn {
        font-size: 20px;
        word-break: keep-all;

    }

    &.large {
        color: #141414;
        .en {
            font-size: 36px;
        }
        .slash {
            font-size: 24px;
        }

        .cn {
            font-size: 24px;
            
        }
    }

    &.same {
        color: #232323;
        
        .en {
            font-size: 20px;
        }

        .slash {
            font-size: 20px;
        }

        .cn {
            font-size: 20px;
        }

        @media (min-width: 1440px) {
            .en, .slash, .cn {
                font-size: 22px;
            }
        }

        @media (max-width: 700px) {
            .en, .slash, .cn {
                font-size: 18px;
            }
        }
    }
}
</style>