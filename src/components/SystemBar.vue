//system bar top of view
<template>
  <v-system-bar app dark color="active" height="30" window class="px-0" id="systembar">
    <v-spacer></v-spacer>
    <a href="#" class="white--text">New Service Available Now! 🎉</a>
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
@media print {
  @page {
    /*size: A4;*/
    margin: 0;
  }
  #systembar{
    display: none;
  }
}
</style>
