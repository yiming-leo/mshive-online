<template>
  <v-app id="inspire">
    <NavigationBar></NavigationBar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <MenuList></MenuList>
          </v-col>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import MenuList from "@/components/MenuList.vue";
import SystemBar from "@/components/SystemBar.vue";

export default {
  name: 'Home',
  components: {
    NavigationBar,
    MenuList,
    SystemBar,
  },
  data: () => ({}),
  methods: {
  },
}
</script>
