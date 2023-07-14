<template>
  <v-app>
    <v-main class="backgroundImg">
      <v-scroll-y-transition>
        <LoginForm v-if="loginFormVisible"></LoginForm>
      </v-scroll-y-transition>
      <v-scroll-y-transition>
        <RegisterForm v-if="registerFormVisible"></RegisterForm>
      </v-scroll-y-transition>
    </v-main>
  </v-app>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import {mapMutations} from "vuex";

export default {
  name: 'Account',
  components: {
    LoginForm,
    RegisterForm,
  },
  data: () => ({}),
  computed: {
    registerFormVisible() {
      return this.$store.state.components.registerForm
    },
    loginFormVisible() {
      return this.$store.state.components.loginForm
    },
  },
  watch: {},
  methods: {
    ...mapMutations([
      'setRegisterFormVisible',
      'setLoginFormVisible',
    ]),
  },
}
</script>
<style>
.backgroundImg{
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
}
</style>
