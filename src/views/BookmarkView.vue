<template>
  <v-sheet min-height="60vh" max-height="80vh" rounded="lg" class="overflow-auto">
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
</template>
<script>

export default {
  name: 'BookmarkView',
  components: {},
  data: () => ({
    selection: [],
    items: [
      {
        name: 'Root',
        id: '648fdfbb54b0950d00c37c2e',
        children: [
          {
            name: '老家',
            id: '648fe2130df02d3007092a58',
            mainColor: '#2196F3',
            minorColor: '#ffaaaa',
            attribute: '老家罢了',
            children: [
              {
                name: '大书柜',
                id: '648fe4410df02d3007092a61',
                mainColor: '#ffaaaa',
                minorColor: '#aaffff',
                isBookmarks: true,
                attribute: '书柜',
                children: [
                  {
                    name: '劳力士',
                    id: '648fe2130df02d3007092a64',
                    mainColor: '#cecece',
                    minorColor: '#818596',
                    isBookmarks: true,
                    attribute: '手表',
                  },
                  {
                    name: '充电宝',
                    id: '648fe2130df02d3007092a63',
                    mainColor: '#eeeeee',
                    minorColor: '#242631',
                    isBookmarks: false,
                    attribute: '电器',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
}
</script>
