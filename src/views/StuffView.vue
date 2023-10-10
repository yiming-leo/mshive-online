<!--HomeView->StuffView-->
<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <v-row>
      <v-col cols="9">
        <v-sheet class="d-flex flex-column overflow-auto" min-height="70vh"
                 rounded="lg" color="transparent">
          <StuffCard :stuff-list="stuffList" :set-disabled="setStuffCardDisabled"></StuffCard>
          <StuffCard :is-eager="isStuffCardEager" class="mt-1" :stuff-list="stuffTemplateJSON"
                         :set-disabled="setStuffCardDisabled" v-if="haveAlreadyAddNewOneStuffCard === false"></StuffCard>
          <!--the button adding new one stuff card-->
          <v-btn class="my-2" color="white" @click="addNewOneStuffCard" v-if="haveAlreadyAddNewOneStuffCard === true">
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
</template>
<script>

import StuffCard from "@/components/card/StuffCard.vue";

export default {
  name: 'Stuff',
  components: {
    StuffCard
  },
  data: () => ({
    // middle
    setStuffCardDisabled: true,
    haveAlreadyAddNewOneStuffCard: true,
    isStuffCardEager: true,
    stuffList: [
      {
        index: '648fe2130df02d3007092a64',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '劳力士',
        attribute: '随身物品',
        mainColor: '#cecece',
        minorColor: '#818596',
        size: 'm',
        description: '手表',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题2',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },
      {
        index: '648fe2130df02d3007092a63',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '充电宝',
        attribute: '电器',
        mainColor: '#eeeeee',
        minorColor: '#242631',
        size: 'm',
        description: '我的随身物品',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },
      {
        index: '648fe2130df02d3007092a64',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '劳力士',
        attribute: '随身物品',
        mainColor: '#cecece',
        minorColor: '#818596',
        size: 'm',
        description: '手表',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题2',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },
      {
        index: '648fe2130df02d3007092a63',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '充电宝',
        attribute: '电器',
        mainColor: '#eeeeee',
        minorColor: '#242631',
        size: 'm',
        description: '我的随身物品',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },{
        index: '648fe2130df02d3007092a64',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '劳力士',
        attribute: '随身物品',
        mainColor: '#cecece',
        minorColor: '#818596',
        size: 'm',
        description: '手表',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题2',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },
      {
        index: '648fe2130df02d3007092a63',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '充电宝',
        attribute: '电器',
        mainColor: '#eeeeee',
        minorColor: '#242631',
        size: 'm',
        description: '我的随身物品',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },{
        index: '648fe2130df02d3007092a64',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '劳力士',
        attribute: '随身物品',
        mainColor: '#cecece',
        minorColor: '#818596',
        size: 'm',
        description: '手表',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题2',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },
      {
        index: '648fe2130df02d3007092a63',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        refFurnitureId: '648fe4410df02d3007092a62',
        name: '充电宝',
        attribute: '电器',
        mainColor: '#eeeeee',
        minorColor: '#242631',
        size: 'm',
        description: '我的随身物品',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        theme: '我自己定的主题',
        isBookmarks: true,
        isDeleted: false,
        modifyCount: 0,
        modifyTime: new Date(),
      },
    ],
    stuffTemplateJSON: [{
      index: '',
      refUserId: '',
      refHomeId: '',
      refFurnitureId: '',
      name: '',
      attribute: '',
      mainColor: '',
      minorColor: '',
      size: null,
      description: '',
      imgUrl: '',
      theme: '',
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
                children: [
                  {
                    name: '劳力士',
                    id: '648fe2130df02d3007092a64',
                    mainColor: '#cecece',
                    minorColor: '#818596',
                  },
                  {
                    name: '充电宝',
                    id: '648fe2130df02d3007092a63',
                    mainColor: '#eeeeee',
                    minorColor: '#242631',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
  methods: {
    addNewOneStuffCard() {
      this.haveAlreadyAddNewOneStuffCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
