<template>
    <div>
        <a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
        <a-modal v-model:open="open" :title="title" @ok="handleOk">
            <a-input class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
            <a-input class="input" v-model:value="userCredentials.email" placeholder="Email" />
            <a-input class="input" v-model:value="userCredentials.password" placeholder="Password" type="password" />
            <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
        </a-modal>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import {useUserStore} from '../stores/users';
import { storeToRefs } from 'pinia';

const props = defineProps(['isLogin'])
const userStore = useUserStore();

const { errorMessage } = storeToRefs(userStore);

const userCredentials = reactive({
    email: '',
    password: '',
    username: ''
})

const open = ref(false);
const value = ref("")

const showModal = () => {
    open.value = true;
};

const title = props.isLogin ? 'Login' : 'Signup';

const handleOk = (e) => {
    userStore.handleSignup(userCredentials)
};
</script>
<style scoped>
.input {
    margin-top: 10px;
}
</style>