<template>
  <v-container>
    <v-text-field
        v-model="search" dense outlined append-icon="mdi-magnify"
        label="Search Table..." single-line hide-details></v-text-field>
    <v-data-table :headers="headers" :items="desserts" :search="search"
                  item-key="index" :group-by="['house']"
                  class="elevation-1" show-group-by
                  multi-sort :loading="loading" loading-text="Loading... Please wait"
    >
<!--      <template #top>-->
<!--        <v-card>-->
<!--          <v-card-actions>-->
<!--            <v-spacer></v-spacer>-->
<!--            <v-btn color="blue darken-1" text @click="close">Cancel-->
<!--            </v-btn>-->
<!--            <v-btn color="blue darken-1" text @click="save">Save-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </template>-->
<!--      <template v-slot:item.actions="{ item }">-->
<!--        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>-->
<!--        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>-->
<!--      </template>-->
<!--      <template v-slot:no-data>-->
<!--        <v-btn color="primary" @click="initialize">Reset</v-btn>-->
<!--      </template>-->
    </v-data-table>
  </v-container>
</template>

<script>
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
      ],
      desserts: [
        {
          index: '1',
          name: '劳力士',
          house: '老家',
          furniture: '橱柜',
          attribute: '手表',
          size: 's',
          isBookmarks: true,
          theme: '主题1',
          mainColor: '#ffaaaa',
          minorColor: '#aaffff',
        },
        {
          index: '2',
          name: '充电宝',
          house: '老家',
          furniture: '书桌',
          attribute: '电器',
          size: 'm',
          isBookmarks: false,
          theme: '主题2',
          mainColor: '#ffaaaa',
          minorColor: '#aaffff',
        },
        {
          index: '3',
          name: '劳力士2',
          house: '立业园',
          furniture: '橱柜',
          attribute: '手表',
          size: 's',
          isBookmarks: true,
          theme: '主题1',
          mainColor: '#ffaaaa',
          minorColor: '#aaffff',
        },
        {
          index: '4',
          name: '旧手机',
          house: '立业园',
          furniture: '书桌',
          attribute: '电器',
          size: 'm',
          isBookmarks: true,
          theme: '主题2',
          mainColor: '#ffaaaa',
          minorColor: '#aaffff',
        },
      ],
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
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
}
</script>

<style scoped>

</style>
