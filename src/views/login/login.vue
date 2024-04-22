<template>
    <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Perform login logic here
            console.log('Logging in...');
        }
    }
};
</script>

<style>
/* Add custom styles here */
</style>