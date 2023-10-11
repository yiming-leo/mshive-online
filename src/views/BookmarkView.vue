<template>
  <v-col :cols="10">
    <v-sheet min-height="60vh" max-height="80vh" rounded="lg" class="overflow-auto" elevation="2">
      <v-col>
        <v-treeview v-model="selection" :items="items" return-object
                    open-all dense hoverable rounded selected-color="blue">
          <template #prepend="{ item, open }">
            <v-chip-group>
              <v-chip small
                      :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
              </v-chip>
              <v-chip small dark>
                {{ item.attribute }}
              </v-chip>
              <!--            <v-chip small dark>-->
              <v-icon :color="item.isBookmarks? 'green' : 'red'">
                {{ item.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel' }}
              </v-icon>
              <!--            </v-chip>-->
            </v-chip-group>
          </template>
        </v-treeview>
      </v-col>
    </v-sheet>
  </v-col>
</template>
<script>
import bookmarkRawData from "@/json/bookmarkRawData.json"

export default {
  name: 'BookmarkView',
  components: {},
  data: () => ({
    selection: [],
    items: [bookmarkRawData]
  })
}
</script>
