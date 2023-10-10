<!--main root page-->
<template>
  <v-app id="inspire">
    <NavigationBar></NavigationBar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!--          <v-col class="my-0 mx-0 px-0 py-0" cols="12">-->
          <!--            <v-scroll-y-reverse-transition mode="out-in">-->

          <!--            </v-scroll-y-reverse-transition>-->
          <!--          </v-col>-->
          <!--navbar influences left list-->
          <v-col cols="2">
            <v-scroll-y-transition mode="out-in">
              <MenuList style="position: fixed" v-if="accountButtonState===false && navbarButtonState===1"></MenuList>
              <ImportView style="position: fixed"
                          v-if="accountButtonState===false && navbarButtonState===2"></ImportView>
              <StatisticView style="position: fixed"
                             v-if="accountButtonState===false && navbarButtonState===3"></StatisticView>
            </v-scroll-y-transition>
          </v-col>
          <!--left list influences middle-->
          <v-scroll-y-transition mode="out-in">
            <HouseView v-if="funcButtonState === 1"></HouseView>
            <FurnitureView v-else-if="funcButtonState === 2"></FurnitureView>
            <StuffView v-else-if="funcButtonState === 3"></StuffView>
            <BookmarkView v-else-if="funcButtonState === 4"></BookmarkView>

            <AccountView v-else-if="accountButtonState === true"></AccountView>
            <ManageView v-if="accountButtonState===false && navbarButtonState===4"></ManageView>
          </v-scroll-y-transition>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import store from "../store/index.js";
import {mapMutations} from "vuex";
import NavigationBar from "@/components/NavigationBar.vue";
import MenuList from "@/components/MenuList.vue";
import SystemBar from "@/components/SystemBar.vue";
import HouseView from "@/views/HouseView.vue";
import FurnitureView from "@/views/FurnitureView.vue";
import StuffView from "@/views/StuffView.vue";
import ImportView from "@/views/ImportView.vue";
import StatisticView from "@/views/StatisticView.vue";
import BookmarkView from "@/views/BookmarkView.vue";
import AccountView from "@/views/AccountView.vue";
import ManageView from "@/views/ManageView.vue";

export default {
  name: 'Home',
  store,
  components: {
    ManageView,
    NavigationBar,
    MenuList,
    SystemBar,
    HouseView,
    FurnitureView,
    StuffView,
    ImportView,
    StatisticView,
    BookmarkView,
    AccountView,
  },
  computed: {
    funcButtonState() {
      return this.$store.state.funcMenuList.funcButton
    },
    accountButtonState() {
      return this.$store.state.navbar.accountButton
    },
    navbarButtonState() {
      return this.$store.state.navbar.navbarButtons
    },
  },
  data: () => ({
    colLength: 2,
  }),
  // mounted() {
  //   if (this.navbarButtonState === 4) {
  //     this.colLength = 12
  //   } else {
  //     this.colLength = 2
  //   }
  // },
  methods: {
    ...mapMutations([
      'switchFuncButton',
      'switchAccountButton',
      'switchNavbarButton',
    ]),
  },
}
</script>
