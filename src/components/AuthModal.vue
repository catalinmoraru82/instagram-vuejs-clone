<template>
    <div>
        <a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
        <a-modal v-model:open="open" :title="title" @ok="handleOk">
            <a-input class="input" v-if="!isLogin" v-model:value="value" placeholder="Username" />
            <a-input class="input" v-model:value="value" placeholder="Email" />
            <a-input class="input" v-model:value="value" placeholder="Password" />
        </a-modal>
    </div>
</template>
<script lang="ts" setup>

import { ref } from 'vue';

const props = defineProps(['isLogin'])

const open = ref(false);
const value = ref("")

const showModal = () => {
    open.value = true;
};

const title = props.isLogin ? 'Login' : 'Signup';

const handleOk = (e) => {
    open.value = false;
};
</script>
<style scoped>
.input {
    margin-top: 10px;
}
</style>