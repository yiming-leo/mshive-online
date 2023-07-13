<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-btn text class="px-2 mr-3 d-flex flex-row justify-start overflow-hidden" min-width="175" max-width="200">
        <v-avatar class="mr-2" min-width="38" :color="account.avatar" size="38">YL</v-avatar>
        <v-content class="py-0 text-capitalize">{{ account.username }}</v-content>
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn v-for="link in navbarLinks" :key="link.index" text class="ml-3 font-weight-bold">{{ link.text }}</v-btn>
      <v-spacer></v-spacer>
      <v-responsive min-width="100" max-width="260">
        <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
      </v-responsive>
      <v-menu bottom open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text size="32" class="ml-2 py-0 px-0" v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <!--<v-subheader>Select Languages</v-subheader>-->
          <v-list-item v-for="(languageItem, index) in languageList" :key="index" link>
            <v-list-item-icon>
              <v-icon :class="'fi fi-'+ languageItem.flag +' translate-item-icon'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ languageItem.name }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationBar",

  data: () => ({
    account: {avatar: "primary", username: "Yiming Leo"},
    navbarLinks: [
      {index: 1, text: 'Dashboard', link: ""},
      {index: 2, text: 'Message', link: ""},
      {index: 3, text: 'Export', link: ""},
      {index: 4, text: 'Official Web', link: ""},
    ],
    languageList: [
      {index: 1, lang: "zh_cn", name: "简体中文", flag: "cn"},
      {index: 2, lang: "zh_tw", name: "繁體中文", flag: "tw"},
      {index: 3, lang: "en", name: "English", flag: "gb"},
      {index: 4, lang: "es", name: "Español", flag: "es"},
      {index: 5, lang: "kr", name: "한국어", flag: "kr"},
      {index: 6, lang: "jp", name: "日本語", flag: "jp"},
      {index: 7, lang: "ar", name: "بالعربية", flag: "sa"},
      {index: 8, lang: "ru", name: "Русский", flag: "ru"},
    ],
    closeOnClick: true,
  })
}
</script>

<style scoped>

</style>
