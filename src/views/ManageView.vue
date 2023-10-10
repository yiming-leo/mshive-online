<template>
  <v-container>
    <v-text-field
        v-model="search"
        outlined
        append-icon="mdi-magnify"
        label="Search Table..."
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        item-key="name"
        sort-by="name"
        group-by="category"
        class="elevation-1"
        show-group-by
        :sort-by="['Category', 'Dairy']"
        :sort-desc="[false, true]"
        multi-sort
        loading
        loading-text="Loading... Please wait"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "ManageView",
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          value: 'name',
          groupable: true,
        },
        {text: 'Category', value: 'category', align: 'right'},
        {text: 'Dairy', value: 'dairy', align: 'right'},
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          category: 'Ice cream',
          dairy: 'Yes',
        },
        {
          name: 'Ice cream sandwich',
          category: 'Ice cream',
          dairy: 'Yes',
        },
        {
          name: 'Eclair',
          category: 'Cookie',
          dairy: 'Yes',
        },
        {
          name: 'Cupcake',
          category: 'Pastry',
          dairy: 'Yes',
        },
        {
          name: 'Gingerbread',
          category: 'Cookie',
          dairy: 'No',
        },
        {
          name: 'Jelly bean',
          category: 'Candy',
          dairy: 'No',
        },
        {
          name: 'Lollipop',
          category: 'Candy',
          dairy: 'No',
        },
        {
          name: 'Honeycomb',
          category: 'Toffee',
          dairy: 'No',
        },
        {
          name: 'Donut',
          category: 'Pastry',
          dairy: 'Yes',
        },
        {
          name: 'KitKat',
          category: 'Candy',
          dairy: 'Yes',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
