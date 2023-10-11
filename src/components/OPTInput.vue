//register page --> OPT code module
<template>
  <div class="my-2">
    <div class="ma-auto position-relative" style="max-width: 500px">
      <v-otp-input
          v-model="otp"
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

export default {
  name: "OPTInput",
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: 'default',
    otp: '',
    text: '',
    expectedOtp: '123456',
  }),
  methods: {
    onFinish(rsp) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
        this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`
        this.snackbar = true
      }, 2000)
    },
  },
}
</script>

<style scoped>

</style>
