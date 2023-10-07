<template>
  <v-app id="inspire">
    <NavigationBar></NavigationBar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <MenuList style="position: fixed" v-if="accountButtonState===false && navbarButtonState===1"></MenuList>
          </v-col>
          <v-col cols="10">
            <v-scroll-y-transition mode="out-in">
              <HouseView v-if="funcButtonState === 1"></HouseView>
              <RoomView v-else-if="funcButtonState === 2"></RoomView>
              <FurnitureView v-else-if="funcButtonState === 3"></FurnitureView>
              <ItemView v-else-if="funcButtonState === 4"></ItemView>
              <ImportView v-else-if="funcButtonState === 5"></ImportView>
              <StatisticView v-else-if="funcButtonState === 6"></StatisticView>
              <BookmarkView v-else-if="funcButtonState === 7"></BookmarkView>
              <AccountView v-else-if="accountButtonState === true"></AccountView>
            </v-scroll-y-transition>
          </v-col>
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
import RoomView from "@/views/RoomView.vue";
import FurnitureView from "@/views/FurnitureView.vue";
import ItemView from "@/views/ItemView.vue";
import ImportView from "@/views/ImportView.vue";
import StatisticView from "@/views/StatisticView.vue";
import BookmarkView from "@/views/BookmarkView.vue";
import AccountView from "@/views/AccountView.vue";

export default {
  name: 'Home',
  store,
  components: {
    NavigationBar,
    MenuList,
    SystemBar,
    HouseView,
    RoomView,
    FurnitureView,
    ItemView,
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
    }
  },
  data: () => ({

  }),
  methods: {
    ...mapMutations([
      'switchFuncButton',
      'switchAccountButton',
      'switchNavbarButton',
    ]),
  },
}
</script>
