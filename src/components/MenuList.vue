<template>
  <v-sheet rounded="lg" min-height="20vh">
    <v-list shaped class="rounded-lg">
      <!--<v-subheader>Functions</v-subheader>-->
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="item in funcButtonList" :key="item.index" link>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.content"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item-group>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon v-text="refreshButton.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="refreshButton.content"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list-item-group>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "MenuList",
  data: ()=>({
    selectedItem: 0,
    funcButtonList: [
      {index: 1, content: 'House', icon: 'mdi-home'},
      {index: 2, content: 'Layer', icon: 'mdi-view-dashboard'},
      {index: 3, content: 'Room', icon: 'mdi-floor-plan'},
      {index: 4, content: 'Furniture', icon: 'mdi-sofa'},
      {index: 5, content: 'Item', icon: 'mdi-text-box-multiple'},
      {index: 6, content: 'Import', icon: 'mdi-credit-card-scan'},
      {index: 7, content: 'Statistic', icon: 'mdi-chart-areaspline'},
      {index: 8, content: 'Bookmark', icon: 'mdi-book'},
    ],
    refreshButton: {content: 'Refresh', icon: 'mdi-refresh'},
  }),
}
</script>

<style scoped>

</style>
