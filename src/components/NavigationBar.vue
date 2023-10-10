<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <!--user button-->
      <v-btn text class="px-2 mr-3 d-flex flex-row justify-start overflow-hidden"
             min-width="175" max-width="200" link @click="switchAccountButton">
        <v-avatar class="mr-2" min-width="38" :color="account.avatar" size="38">YL</v-avatar>
        <v-content class="py-0 text-capitalize">{{ account.username }}</v-content>
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn-toggle mandatory borderless group dense tile color="primary" v-model="selectedItem">
        <!--nav buttons-->
        <v-btn v-for="link in navbarLinks" :key="link.index" text :href="link.link" retain-focus-on-click
               @click="switchNavbarButton(link.index); defaultHome(link.index)"
               class="ml-3 font-weight-bold rounded-l rounded-r">
          {{ link.text }}
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-responsive min-width="100" max-width="260">
        <v-text-field dense flat hide-details rounded solo-inverted
                      placeholder="Search Something..."></v-text-field>
      </v-responsive>
      <!--nav right-->
      <v-menu bottom open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text size="32" class="ml-2 py-0 px-0" v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <!--<v-subheader>Select Languages</v-subheader>-->
          <v-list-item dense v-for="(languageItem, index) in languageList" :key="index" link class="pl-0">
            <v-list-item-icon class="mx-2">
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
import store from "../store/index.js";
import {mapMutations} from "vuex";

export default {
  name: "NavigationBar",
  store,
  data: () => ({
    account: {avatar: "primary", username: "Yiming Leo"},
    navbarLinks: [
      {index: 1, text: 'Dashboard', link: ""},
      {index: 2, text: 'Import', link: ""},
      {index: 3, text: 'Statistic', link: ""},
      {index: 4, text: 'Export', link: ""},
      {index: 5, text: 'Official Web', link: "http://49.235.113.96:8081"},
    ],
    languageList: [
      {index: 1, lang: "zh_cn", name: "简体中文", flag: "cn"},
      {index: 2, lang: "zh_tw", name: "繁體中文", flag: "hk"},
      {index: 3, lang: "en", name: "English", flag: "gb"},
      {index: 4, lang: "es", name: "Español", flag: "es"},
      {index: 5, lang: "kr", name: "한국어", flag: "kr"},
      {index: 6, lang: "jp", name: "日本語", flag: "jp"},
      {index: 7, lang: "ar", name: "بالعربية", flag: "sa"},
      {index: 8, lang: "ru", name: "Русский", flag: "ru"},
    ],
    selectedItem: 0,
  }),
  methods: {
    ...mapMutations([
      'switchAccountButton',
      'switchNavbarButton',
    ]),
    //ensure when click any navbar button, the default sub contents(Dashboard-->Home) will react
    defaultHome(index) {
      if (index === 1) {
        this.$store.state.funcMenuList.funcButton = 1
      }
    },
  }
}
</script>

<style scoped>

</style>
