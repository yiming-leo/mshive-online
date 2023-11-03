<template>
  <v-col :cols="10">
    <v-sheet min-height="60vh" max-height="80vh" rounded="lg" class="overflow-auto" elevation="2">
      <v-col>
        <v-text-field v-model="search" label="Search Directory / Stuff" outlined background-color="white"
                      hide-details clearable clear-icon="mdi-close-circle-outline"  @click="bookmarkTreeRequest(userUUId)">
        </v-text-field>
        <v-checkbox v-model="caseSensitive" hide-details label="Case sensitive search">
        </v-checkbox>
        <v-treeview v-model="selection" :items="items" return-object :search="search" :filter="filter"
                    :open.sync="open" open-all dense hoverable rounded selected-color="blue">
          <!--left buttons view-->
          <template #prepend="{ item, open }">
            <v-chip-group>
              <v-chip small
                      :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
              </v-chip>
              <v-chip small dark>
                {{ item.attribute }}
              </v-chip>
              <v-chip small dark>
                {{ item.size }}
              </v-chip>
              <v-icon :color="item.isBookmarks? 'green' : 'red'">
                {{ item.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel' }}
              </v-icon>
            </v-chip-group>
          </template>
          <!--right img view-->
          <template #append="{ item }">
            <v-tooltip left color="#00000044">
              <template v-slot:activator="{ on, attrs }">
                <v-sheet height="40px" width="250px" v-bind="attrs" v-on="on">
                </v-sheet>
              </template>
              <v-img :src="item.image" alt="No Image" class="rounded"
                     max-width="300px" width="300px" max-height="200px" height="200px">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular v-if="item.name!='Root'" indeterminate
                                         color="grey lighten-5"></v-progress-circular>
                    <v-icon v-if="item.name=='Root'" dark large>mdi-cancel</v-icon>
                  </v-row>
                </template>
              </v-img>
            </v-tooltip>
          </template>
        </v-treeview>
      </v-col>
    </v-sheet>
  </v-col>
</template>
<script>

import {getBookmarkTree} from "@/api/bookmarkTreeRequest/bookmarkApi";

export default {
  name: 'BookmarkView',
  components: {},
  data: () => ({
    selection: [],
    open: [1, 2],
    search: null,
    treeSearchResult: null,
    caseSensitive: false,
    items: [],
    userUUId: '648fdfbb54b0950d00c37c2e'
  }),
  computed: {
    filter() {
      return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
    },

  },
  methods: {
    bookmarkTreeRequest(userUUId) {
      getBookmarkTree(userUUId).then(res => {
        console.log(res)
        this.items = res.data.data
      })
    }
  }
}
</script>
