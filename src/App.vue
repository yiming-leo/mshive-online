<template>
  <v-app>
    <!--系统栏-->
<!--    <v-slide-y-transition>-->
<!--      <SystemBar v-if="systemBarVisible"></SystemBar>-->
<!--    </v-slide-y-transition>-->
    <router-view/>
  </v-app>
</template>

<script>
import SystemBar from "@/components/SystemBar.vue";
import {mapMutations} from "vuex";
import store from "./store/index.js";

export default {
  name: 'App',
  store,
  components: {
    SystemBar,
  },
  data: () => ({}),
  created() {
  },
  computed: {
    systemBarVisible() {
      return this.$store.state.components.systemBar
    },
  },
  mounted() {
  },
  methods: {
    ...mapMutations([
      'setSystemBarVisible',
    ]),
  },
};
</script>
<style>
/*disable scroll*/
html {
  overflow-y: auto
}

::-webkit-scrollbar {
  display: none;
}
</style>
