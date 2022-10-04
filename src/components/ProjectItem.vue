<template>
    <div class="project-item">
        <div class="top-line"></div>
        <img :src="project_data.hero_img" alt="" class="project-item-img" loading="lazy">
        <div class="info">
            <div v-if="mode=='simple'" class="only-title">
                {{project_data.en_name}} / {{ project_data.cn_name }}
            </div>
            <div v-if="mode=='complete'" class="complete-info">
                <div class="title">{{project_data.en_name}}</div>
                <div class="short-abstract">{{project_data.short_abstract}}
                    <router-link class="more-link" :to="`/projects/${project_data.id}`">More ›</router-link>
                </div>
                <div class="author-date-views">
                    <span class="first-author">{{project_data.first_author}}</span> |
                    <span>{{project_data.create_date}}</span> |
                    <span>{{Number(project_data.view_count).toLocaleString('en')}} Views</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
defineProps<{
    project_data: Partial<ProjectItem>,
    mode: 'simple' | 'complete'
}>()
</script>
<style lang="scss" scoped>
.project-item {
    position: relative;
    width: 100%;
    // max-width: 400px;

    .top-line {
        width: 100%;
        background-color: #141414;
        height: 2px;
        margin-bottom: 10px;
    }

    .project-item-img {
        width: 100%;
        object-fit: cover;
        user-select: none;
    }

    .info {
        position: relative;

        .only-title {
            color: #575757;
            font-size: 10px;
        }

        .complete-info {
            display: flex;
            flex-flow: nowrap column;
            justify-content: flex-start;
            align-items: flex-start;

            .title {
                font-size: 14px;
                font-weight: bold;
            }

            .short-abstract {
                font-size: 10px;
                line-height: 16px;
                margin: 6px 0px;

                .more-link {
                    color: #556ea1;
                    text-decoration: none;
                }
            }

            .author-date-views {
                font-size: 10px;
                line-height: 16px;

                .first-author {
                    color: #556ea1;
                }
            }
        }
    }
}
</style>