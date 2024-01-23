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
            <h1><ImageGallery
                    :posts="[{
                        id: 1,
                        image: 'https://plus.unsplash.com/premium_photo-1670596833781-6b22e7979e53?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    },
                    {
                        id: 2,
                        image: 'https://images.unsplash.com/photo-1705893899659-64ab90038965?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    ]"
                /></h1>
        </div>
    </Container>
</template>
<script setup>
    import Container from './Container.vue';
    import UserBar from './UserBar.vue';
    import ImageGallery from './ImageGallery.vue';
</script>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}
</style>