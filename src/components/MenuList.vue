<template>
  <v-hover v-slot="{hover}">
    <v-sheet rounded min-height="20vh" min-width="11vw" :elevation="hover ? 12 : 2" class="transition-swing">
      <v-list nav class="rounded-lg">
        <!--<v-subheader>Functions</v-subheader>-->
        <v-list-item-group mandatory v-model="selectedItem" color="primary">
          <v-list-item v-for="item in funcButtonList" :key="item.index"
                       link @click="switchFuncButton(item.index)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.content" class="font-weight-bold"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-sheet>
  </v-hover>
</template>

<script>
import {mapMutations} from "vuex";
import store from "@/store";

export default {
  name: "MenuList",
  store,
  data: () => ({
    selectedItem: 0,
    //in global state management -> influence HomeView
    funcButtonList: [
        {index: 1, content: 'Room', icon: 'mdi-home'},
      // {index: 2, content: 'Layer', icon: 'mdi-view-dashboard'},
      {index: 2, content: 'Furniture', icon: 'mdi-sofa'},
      {index: 3, content: 'Stuff', icon: 'mdi-text-box-multiple'},
      {index: 4, content: 'Bookmark', icon: 'mdi-book'},
      {index: 5, content: 'Timeline', icon: 'mdi-timeline'},
    ],
    refreshButton: {content: 'Refresh', icon: 'mdi-refresh'},
  }),
  methods: {
    ...mapMutations([
      'switchFuncButton',
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

  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  #menulist {
    display: none;
  }

}
</style>
