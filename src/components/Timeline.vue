<template>
    <Container>
        <div class="timeline-container">
            <Card v-for="post in data" :key="post.id" :post="post"/>
        </div>
    </Container>
</template>
<script setup>
    import Container from './Container.vue';
    import Card from './Card.vue';

    const data = [
        {
            id: 1,
            username: 'latihharb',
            url: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "This is a caption",
        },
        {
            id: 2,
            username: 'latihharb',
            url: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "This is another caption"
        },
    ]
</script>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>