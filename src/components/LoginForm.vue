//login page --> login form
<template>
  <v-container app fluid class="d-flex justify-center fill-height">
    <v-row justify="center" align="center" class="fill-height">
      <!--      <v-col cols="12">-->
      <v-card ref="form" width="600">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login Your Personal Account</v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-select v-model="defaultLoginSelection" :items="loginSelection"
                        label="Login Selection" outlined></v-select>
              <v-text-field ref="email" v-model="email" v-if="defaultLoginSelection==='Email'"
                            :rules="[() => !!email || 'This field is required',emailCheck]" clearable
                            prepend-icon="mdi-email" append-icon="mdi-send" @click:append="sendOPTtoUser"
                            type="email" label="Email" placeholder="abcd@ef.com" required>
              </v-text-field>
              <v-text-field ref="telephone" v-model="telephone" v-if="defaultLoginSelection==='Telephone'"
                            :rules="[() => !!telephone || 'This field is required',telephoneCheck]" clearable
                            prepend-icon="mdi-phone" append-icon="mdi-send" @click:append="sendOPTtoUser"
                            type="telephone" label="Telephone" placeholder="12345678901" required>
              </v-text-field>
              <v-text-field ref="password" v-model="password" clearable @click:append="showPwd = !showPwd"
                            :rules="[() => !!password || 'This field is required',passwordCheck]"
                            prepend-icon="mdi-key" :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPwd ? 'text' : 'password'" label="Password" placeholder="password" required>
              </v-text-field>
              <OPTInput></OPTInput>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text color="vue_theme" class="font-weight-bold" @click="setRegisterFormVisible">Register Now</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" class="font-weight-bold" text @click="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
      <!--      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import OPTInput from "@/components/OPTInput.vue";
import router from "@/router";
import {mapMutations} from "vuex";

export default {
  name: "LoginForm",
  components: {
    OPTInput,
  },
  data: () => ({
    showPwd: false,
    defaultLoginSelection: 'Email',
    loginSelection: ['Email', 'Telephone'],
    errorMessages: '',
    email: null,
    telephone: null,
    password: null,
    formHasErrors: false,
  }),
  computed: {
    form() {
      return {
        email: this.email,
        telephone: this.telephone,
        password: this.password,
      }
    },
  },
  watch: {
    name() {
      this.errorMessages = ''
    },
  },
  methods: {
    ...mapMutations([
      'setRegisterFormVisible',
    ]),
    emailCheck() {
      this.errorMessages = this.email ? `Hey! I'm required` : ''
      return true
    },
    telephoneCheck() {
      this.errorMessages = this.telephone ? `Hey! I'm required` : ''
      return true
    },
    passwordCheck() {
      this.errorMessages = this.password ? `Hey! I'm required` : ''
      return true
    },
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    sendOPTtoUser() {
      console.log('sent!')
    },
    submit() {
      this.formHasErrors = false
      // Object.keys(this.form).forEach(f => {
      //   if (!this.form[f]) this.formHasErrors = true
      //   this.$refs[f].validate(true)
      // })
      setTimeout(() => {
        this.formHasErrors = false
        router.push('/')
      }, 500)
    },
  },
}
</script>

<style scoped>

</style>
