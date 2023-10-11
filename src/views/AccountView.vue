<template>
  <v-col :cols="10">
    <v-sheet elevation="2" rounded class="my-0 mx-0 px-0 py-0">
      <v-container>
        <v-row justify="center" align="center" class="fill-height">
          <v-col>
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
      </v-container>
    </v-sheet>
  </v-col>
</template>
<script>

import AvatarUploader from "@/components/AvatarUploader.vue";

export default {
  name: 'Account',
  components: {AvatarUploader},
  data: () => ({
    continents: ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Australia', 'Antarctica'],
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
  watch: {},
  methods: {}
}
</script>
