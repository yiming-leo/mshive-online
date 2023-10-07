<template>
  <v-app>
    <v-main class="backgroundImg">
        <v-expand-transition>
          <LoginForm v-if="loginFormVisible"></LoginForm>
          <RegisterForm v-if="registerFormVisible"></RegisterForm>
        </v-expand-transition>
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
.backgroundImg {
  background-image: url("../assets/img/hennybabeweb1920.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
