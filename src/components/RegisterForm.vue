//login page --> register form
<template>
  <v-container app fluid class="d-flex justify-center fill-height">
    <v-row justify="center" align="center" class="fill-height">
<!--      <v-col cols="12">-->
        <v-card ref="form" width="800">
          <v-card-title>Register</v-card-title>
          <v-card-subtitle>Create Your Personal Account</v-card-subtitle>
          <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field ref="username" v-model="username" :error-messages="errorMessages" type="username"
                                prepend-icon="mdi-account" label="Full Name" placeholder="John Doe" counter="25"
                                required
                                :rules="[() => !!username || 'This field is required',
                          () => !!username && username.length <= 25 || 'Username must be less than 25 characters',]">
                  </v-text-field>
                  <v-text-field ref="email" v-model="email"
                                :rules="[() => !!email || 'This field is required',emailCheck]"
                                prepend-icon="mdi-email" type="email" label="Email" placeholder="abcd@ef.com"
                                required>
                  </v-text-field>
                  <v-text-field ref="password" type="password" v-model="password" label="Password" required
                                placeholder="123456"
                                prepend-icon="mdi-key" :rules="[() => !!password || 'This field is required']">
                  </v-text-field>
                  <v-text-field ref="checkPassword" type="checkPassword" v-model="checkPassword" label="Check Password"
                                required placeholder="123456"
                                prepend-icon="mdi-check-all"
                                :rules="[() => !!checkPassword || 'This field is required']">
                  </v-text-field>
                  <v-text-field ref="telephone" v-model="telephone" type="telephone" label="Telephone" required
                                placeholder="12345678901"
                                prepend-icon="mdi-phone" :rules="[() => !!telephone || 'This field is required']">
                  </v-text-field>
                  <v-autocomplete ref="continent" v-model="continent"
                                  :rules="[() => !!continent || 'This field is required']"
                                  prepend-icon="mdi-earth" :items="continents" label="Continent" placeholder="Select..."
                                  required>
                  </v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <AvatarUploader></AvatarUploader>
                </v-col>
              </v-row>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text color="vue_theme" class="font-weight-bold" @click="setLoginFormVisible">Turn To Login</v-btn>
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
            <v-btn color="primary" class="font-weight-bold" text @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
<!--      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader.vue";
import {mapMutations} from "vuex";

export default {
  name: "RegisterForm",
  components: {
    AvatarUploader,
  },
  data: () => ({
    continents: ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania', 'Antarctica'],
    continent: null,
    errorMessages: '',
    username: null,
    email: null,
    telephone: null,
    password: null,
    checkPassword: null,
    avatar: null,
    formHasErrors: false,
  }),
  computed: {
    form() {
      return {
        username: this.name,
        email: this.email,
        telephone: this.telephone,
        password: this.password,
        checkPassword: this.checkPassword,
        continent: this.continent,
        avatar: this.avatar,
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
      'setLoginFormVisible',
    ]),
    emailCheck() {
      this.errorMessages = this.email && !this.username ? `Hey! I'm required` : ''
      return true
    },
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        this.$refs[f].validate(true)
      })

    },
  },
}
</script>

<style scoped>

</style>
