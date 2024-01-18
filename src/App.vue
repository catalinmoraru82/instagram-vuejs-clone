<template>
    <main>
        <Nav />
        <router-view></router-view>
    </main>
</template>

<script setup>
    import Nav from './components/Nav.vue';
    import { RouterView } from 'vue-router';
</script>