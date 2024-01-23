import { ref } from 'vue';
import { defineStore } from 'pinia';
import {supabase} from '../supabase';

export const useUserStore = defineStore('users', () => {
    const user = ref(null);
    const errorMessage = ref('')
    const handleLogin = () => {};

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSignup = async (credentials) => {
        const {email, password, username} = credentials;

        if(password.length < 6) {
            return errorMessage.value = 'password length too short';
        }

        if(username.length < 4) {
            return errorMessage.value = 'Username too short';
        }

        if(!validateEmail(email)) {
            return errorMessage.value = 'Email is invalid';
        }

        errorMessage.value = ''

        const response = await supabase.auth.signUp({
            email,
            password
        })

        if(error) {
            return errorMessage.value = error.message
        }
        console.log(response)
    };

    const handleLogout = () => {};

    const getUser = () => {};

    return { user, errorMessage, handleLogin, handleSignup, handleLogout, getUser }
})
