<template>
    <div class="main-title" :class="{large: type=='large', same: type=='same'}">
        <span class="en">{{en}}</span>
        <span class="slash">&nbsp;/&nbsp;</span>
        <span class="cn">{{cn}}</span>
    </div>
</template>
<script setup lang='ts'>
defineProps<{
    en: string,
    cn: string,
    type: 'large' | 'middle' | 'same'
}>()
</script>
<style lang="scss" scoped>
.main-title {
    position: relative;
    color: #454545;
    cursor: default;
    word-break: break-all;
    line-height: 1.4;

    .en {
        font-size: 20px;
    }

    .slash {
        font-size: 20px;
    }

    .cn {
        font-size: 20px;

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