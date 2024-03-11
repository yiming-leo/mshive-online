//login page --> login form
<template>
  <v-container app fluid class="d-flex justify-center fill-height">
    <v-row justify="center" align="center" class="fill-height">
      <!--      <v-col cols="12">-->
      <v-card ref="form" width="600" :disabled="loading">
        <v-overlay absolute :value="loading">
          <v-progress-circular
              indeterminate
              color="primary"
          ></v-progress-circular>
        </v-overlay>
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
              <!--OTP输入框，ref用于父向子传值-->
              <OPTInput ref="otp_bar"></OPTInput>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <!--切换到注册页面-->
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
        <!--发送验证码的消息栏-->
        <v-snackbar v-model="optSnackbar" light top>
          <div class="text-body-1">
            OTP has sent to your email/phone, please check it.
          </div>
          <div class="text--caption">Type or copy/paste.</div>
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="optSnackbar = false">Close</v-btn>
          </template>
        </v-snackbar>
      </v-card>
      <!--      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import OPTInput from "@/components/OPTInput.vue";
import router from "@/router";
import {mapMutations} from "vuex";
import {sendOTPEmail} from "@/api/userRequest/userApi";

export default {
  name: "LoginForm",
  components: {
    OPTInput,
  },
  data: () => ({
    optSnackbar: false,
    showPwd: false,
    loading: false,
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
    //点击发送OTP码
    async sendOPTtoUser() {
      if (this.emailCheck() === true && this.telephoneCheck() && this.passwordCheck()){
        this.optSnackbar = true
        //将父类的email赋值到子类的email_addr上
        this.$refs.otp_bar.email_addr = this.email
        //发送otp验证码到用户邮箱上
        await sendOTPEmail(this.email).then(res => {
          console.log("sendOTPEmail")
          console.log(res)
          if (res.data.status != 200 || !res) {
            this.snackbarColor = 'warning'
          } else {
            this.snackbarColor = 'success'
          }
          this.text = res.data.msg
          this.snackbar = true
        })
      }
      else {
        // this.
      }
    },
    submit() {
      this.formHasErrors = false
      this.loading = true
      setTimeout(() => {
        this.formHasErrors = false
        router.push('/')
      }, 1500)
    },
  },
}
</script>

<style scoped>

</style>
