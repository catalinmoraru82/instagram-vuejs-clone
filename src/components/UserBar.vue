<template>
    <div class="userbar-container">
        <div class="top-content">
            <a-typography-title :level="2">{{ props.username }}</a-typography-title>
        </div>
        <div class="bottom-content">
            <a-typography-title :level="5">{{ props.userinfo.posts }} Posts</a-typography-title>
            <a-typography-title :level="5">{{ props.userinfo.followers }} Followers</a-typography-title>
            <a-typography-title :level="5">{{ props.userinfo.following }} Following</a-typography-title>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['username', 'userinfo'])
</script>
<style scoped>
.userbar-container {
    padding-bottom: 75px;
}

.bottom-content {
    display: flex;
    align-items: center;
}

.bottom-content h5 {
    margin: 0 !important;
    padding: 0;
    margin-right: 30px !important;
}
</style>