<!--HomeView->FurnitureView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="9">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <FurnitureCard :furniture-list="furnitureList" :set-disabled="setFurnitureCardDisabled"></FurnitureCard>
            <FurnitureCard :is-eager="isFurnitureCardEager" class="mt-1" :furniture-list="furnitureTemplateJSON"
                           :set-disabled="setFurnitureCardDisabled"
                           v-if="haveAlreadyAddNewOneFurnitureCard === false"></FurnitureCard>
            <!--the button adding new one furniture card-->
            <v-btn class="my-2" color="white" @click="addNewOneFurnitureCard"
                   v-if="haveAlreadyAddNewOneFurnitureCard === true">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-sheet>
        </v-col>
        <!--right tree view-->
        <v-col cols="3">
          <!--right top view bar-->
          <v-sheet min-height="60vh" max-height="70vh" rounded="lg" class="overflow-auto">
            <v-col>
              <v-treeview v-model="selection" :items="items" return-object
                          open-all dense hoverable rounded selected-color="blue">
                <template #prepend="{ item, open }">
                  <v-chip small
                          :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
                  </v-chip>
                </template>
              </v-treeview>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>
<script>

import FurnitureCard from "@/components/card/FurnitureCard.vue";

export default {
  name: 'FurnitureView',
  components: {
    FurnitureCard
  },
  data: () => ({
    // middle
    setFurnitureCardDisabled: true,
    haveAlreadyAddNewOneFurnitureCard: true,
    isFurnitureCardEager: true,
    furnitureList: [
      {
        index: '648fe4410df02d3007092a61',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        name: '大书柜',
        description: '放书的地方',
        attribute: '书柜',
        mainColor: '#ffaaaa',
        minorColor: '#aaffff',
        size: 'xxl',
        usage: '经常放以前的书',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 1,
        modifyTime: new Date(),
      },
      {
        index: '648fe4410df02d3007092a62',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        name: '通用书桌',
        description: '读书的地方',
        attribute: '书桌',
        mainColor: '#ffaaaa',
        minorColor: '#aaffff',
        size: 'xl',
        usage: '经常读书',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 1,
        modifyTime: new Date(),
      },
    ],
    furnitureTemplateJSON: [{
      index: '',
      refUserId: '',
      refHomeId: '',
      name: '',
      description: '',
      attribute: '',
      mainColor: '',
      minorColor: '',
      size: 0,
      usage: '',
      imgUrl: '',
      isBookmarks: true,
      isDeleted: false,
      modifyCount: 0,
      modifyTime: '',
    }],
    // right tree view
    selectionType: 'leaf',
    selection: [],
    //items only ID! not index!
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
            children: [
              {
                name: '大书柜',
                id: '648fe4410df02d3007092a61',
                mainColor: '#ffaaaa',
                minorColor: '#aaffff',
              },
              {
                name: '通用书桌',
                id: '648fe4410df02d3007092a62',
                mainColor: '#ffaaaa',
                minorColor: '#aaffff',
              },
            ]
          },
        ],
      },
    ],
  }),
  methods: {
    addNewOneFurnitureCard() {
      this.haveAlreadyAddNewOneFurnitureCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
