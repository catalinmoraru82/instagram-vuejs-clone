gk<template>
    <main>
        <a-layout-header class="header">
            <a-menu
                theme="dark"
                :style="{ lineHeight: '64px' }"
            >
                <Container>
                    <div class="nav-container">
                        <div class="left-content">
                            <router-link class="logo" to="/">Instagram</router-link>
                            <a-input-search
                                v-model:value="searchUsername"
                                placeholder="username..."
                                style="width: 200px"
                                @search="onSearch"
                            />
                        </div>
                        <div class="right-content" v-if="!isAuthenticated">
                            <AuthModal class="auth-modal" :isLogin="false"/>
                            <AuthModal class="auth-modal" :isLogin="true"/>
                        </div>
                        <div class="right-content" v-else>
                            <a-button type="primary">Profile</a-button>
                            <a-button class="logout-btn" type="primary">Logout</a-button>
                        </div>
                    </div>
                </Container>
            </a-menu>
        </a-layout-header>
    </main>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
    import Container from './Container.vue';
    import AuthModal from './AuthModal.vue';
    import { ref } from 'vue';

    const searchUsername = ref('');
    const isAuthenticated = ref(false);

    const onSearch = () => {};
</script>

<style scoped>
    .nav-container {
        display: flex;
        justify-content: space-between;
    }

    .left-content {
        display: flex;
        align-items: center;
    }

    .logo {
        margin-right: 10px;
    }

    .right-content {
        display: flex;
        align-items: center;
    }

    .auth-modal,
    .logout-btn {
        margin-left: 10px;
    }
</style>