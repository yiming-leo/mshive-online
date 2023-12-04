//register page --> OPT code module
<template>
  <div class="my-2">
    <div class="ma-auto position-relative" style="max-width: 500px">
      <v-otp-input
          :disabled="loading"
          @finish="onFinish"
      ></v-otp-input>
      <v-overlay absolute :value="loading">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </v-overlay>
    </div>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000" top>
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import router from "@/router";
import {validateOTPEmail} from "@/api/userRequest/userApi";

export default {
  name: "OPTInput",
  data: () => ({
    loading: false,//消息栏是否禁用
    snackbar: false,//消息栏是否显示
    snackbarColor: 'default',//消息栏颜色
    text: '',//消息栏的文字
    email_addr: '',//待验证的邮箱地址
    // expectedOtp: '123456',
  }),
  methods: {
    //onFinish：当输入完毕OTP码时自动触发验证机制
    async onFinish(rsp) {
      this.loading = true

      await setTimeout(() => {
        this.loading = false
        //根据当前邮箱/手机号查询当时服务器内的OTP码
        validateOTPEmail(this.email_addr, rsp).then(res=>{
          console.log("validateOTPEmail")
          console.log(res)
          if (res.data.status != 200 || !res) {
            this.snackbarColor = 'warning'
          } else {
            this.snackbarColor = 'success'
          }
          this.text = res.data.msg
          this.snackbar = true
        })
      }, 2000)
    },
  },
}
</script>

<style scoped>

</style>
