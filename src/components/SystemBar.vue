<template>
  <v-system-bar app dark color="active" height="30" window class="px-0">
<!--    <v-btn @click="setSystemBarVisible" light depressed color="primary">Look Around</v-btn>-->
    <v-spacer></v-spacer>
    <a href="#" class="white--text">New Function Available Now! 🎉</a>
    <v-spacer></v-spacer>
    <v-btn @click="setSystemBarVisible" light depressed fab height="20" width="20" color="transparent mr-4">
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "SystemBar",
  data: () => ({}),
  methods: {
    ...mapMutations([
      'setSystemBarVisible',
    ]),
  },
}
</script>

<style scoped>

</style>
