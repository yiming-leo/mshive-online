<template>
  <v-container>
    <v-row dense class="mb-1" id="header">
      <v-col cols="1">
        <v-btn @click="printPage" depressed color="primary">Print</v-btn>
      </v-col>
      <v-col cols="11">
        <v-text-field v-model="search" dense outlined append-icon="mdi-magnify"
                      label="Search Table..." single-line hide-details></v-text-field>
      </v-col>
    </v-row>
    <v-data-table id="mainbody" :headers="headers" :items="allStuff" :search="search"
                  item-key="index" :group-by="['house']"
                  class="elevation-1 overflow-hidden" show-group-by
                  multi-sort :loading="loading" loading-text="Loading... Please wait"
    >
    </v-data-table>
  </v-container>
</template>

<script>
import manageAllStuff from "@/json/manage/manageAllStuff.json"

export default {
  name: "ManageView",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      loading: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        house: 0,
        furniture: 0,
        attribute: 0,
        size: 0,
        mainColor: 0,
        minorColor: 0,
        theme: 0,
      },
      headers: [
        {text: 'Stuff', align: 'start', value: 'name', groupable: false},
        {text: 'House', value: 'house', align: 'center', groupable: true},
        {text: 'Furniture', value: 'furniture', align: 'center', groupable: true},
        {text: 'Attribute', value: 'attribute', align: 'center', groupable: true},
        {text: 'Size', value: 'size', align: 'center', groupable: true},
        {text: 'Color1', value: 'mainColor', align: 'center', groupable: true},
        {text: 'Color2', value: 'minorColor', align: 'center', groupable: true},
        {text: 'Theme', value: 'theme', align: 'center', groupable: true},
        {text: 'Bookmark', value: 'isBookmarks', align: 'center', groupable: true},
        {text: 'Description', value: 'description', align: 'center', groupable: true},
      ],
      allStuff: manageAllStuff,
    }
  },
  computed: {},
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  created() {
    this.initialize()
  },
  methods: {
    printPage() {
      window.print()
    }
  }
}
</script>

<style scoped>
@media print {
  @page {
    /*size: A4;*/
    margin: 0;
  }

  #header {
    display: none;
  }
}
</style>
