<template>
    <Container>
        <div class="profile-container">
            <UserBar
                username="SomeName"
                :userinfo="{
                    posts: 4,
                    followers: 100,
                    following: 343
                }"
            />
            <h1>image gallery</h1>
        </div>
    </Container>
</template>
<script setup>
    import Container from './Container.vue';
    import UserBar from './UserBar.vue';
</script>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}
</style>