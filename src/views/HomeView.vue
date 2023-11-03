<!--main root page-->
<template>
  <v-app id="inspire">
    <v-slide-y-transition>
      <SystemBar v-if="systemBarVisible"></SystemBar>
    </v-slide-y-transition>
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
              <MenuList id="menulist" style="position: fixed" v-if="accountButtonState===false && navbarButtonState===1"></MenuList>
              <ImportView style="position: fixed"
                          v-if="accountButtonState===false && navbarButtonState===2"></ImportView>

            </v-scroll-y-transition>
          </v-col>
          <!--left list influences middle-->
          <v-scroll-y-transition mode="out-in">
            <RoomView v-if="funcButtonState === 1"></RoomView>
            <FurnitureView v-else-if="funcButtonState === 2"></FurnitureView>
            <StuffView v-else-if="funcButtonState === 3"></StuffView>
            <BookmarkView v-else-if="funcButtonState === 4"></BookmarkView>
            <TimelineView v-else-if="funcButtonState === 5"></TimelineView>

            <AccountView v-else-if="accountButtonState === true"></AccountView>
            <StatisticView v-if="accountButtonState===false && navbarButtonState===3"></StatisticView>
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
import FurnitureView from "@/views/FurnitureView.vue";
import StuffView from "@/views/StuffView.vue";
import ImportView from "@/views/ImportView.vue";
import StatisticView from "@/views/StatisticView.vue";
import BookmarkView from "@/views/BookmarkView.vue";
import AccountView from "@/views/AccountView.vue";
import ManageView from "@/views/ManageView.vue";
import TimelineView from "@/views/TimelineView.vue";
import RoomView from "@/views/RoomView.vue";

export default {
  name: 'Home',
  store,
  components: {
    RoomView,
    TimelineView,
    ManageView,
    NavigationBar,
    MenuList,
    SystemBar,
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
    systemBarVisible() {
      return this.$store.state.components.systemBar
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
      'setSystemBarVisible',
    ]),
  },
}
</script>
