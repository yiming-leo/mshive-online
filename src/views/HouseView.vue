<!--HomeView->HouseView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="9">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <HouseCard :house-list="houseList" :set-disabled="setHouseCardDisabled"></HouseCard>
            <HouseCard :is-eager="isHouseCardEager" class="mt-1" :house-list="houseTemplateJSON"
                       :set-disabled="setHouseCardDisabled" v-if="haveAlreadyAddNewOneHouseCard === false"></HouseCard>
            <!--the button adding new one house card-->
            <v-btn class="my-2" color="white" @click="addNewOneHouseCard" v-if="haveAlreadyAddNewOneHouseCard === true">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-sheet>
        </v-col>
        <v-col cols="3">
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

import HouseCard from "@/components/card/HouseCard.vue";

export default {
  name: 'HouseView',
  components: {HouseCard},
  data: () => ({
    setHouseCardDisabled: true,
    haveAlreadyAddNewOneHouseCard: true,
    isHouseCardEager: true,
    houseList: [
      {
        index: '648fe2130df02d3007092a56',
        attribute: '工作室',
        mainColor: '#42b883',
        minorColor: '#ffaaaa',
        description: '之江银泰旁边的老窝罢了',
        imgUrl: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        isCurrent: true,
        isDeleted: false,
        location: '之江银泰，自己找',
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '我的老窝',
        refUserId: '648fdfbb54b0950d00c37c2e',
        space: 120,
        totalLayer: 3,
      },
      {
        index: '648fe2130df02d3007092a57',
        attribute: '寝室',
        mainColor: '#FFC107',
        minorColor: '#ffaaaa',
        description: '糟糕的地方',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isCurrent: false,
        isDeleted: false,
        location: '明德路',
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '立业园',
        refUserId: '648fdfbb54b0950d00c37c2e',
        space: 20,
        totalLayer: 1,
      },
      {
        index: '648fe2130df02d3007092a58',
        attribute: '老家',
        mainColor: '#2196F3',
        minorColor: '#ffaaaa',
        description: '梦开始的地方',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isCurrent: false,
        isDeleted: false,
        location: '丽水，浙江',
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '老家',
        refUserId: '648fdfbb54b0950d00c37c2e',
        space: 130,
        totalLayer: 1,
      },
    ],
    houseTemplateJSON: [{
      index: '',
      attribute: '',
      mainColor: '',
      minorColor: '',
      description: '',
      imgUrl: '',
      isCurrent: false,
      isDeleted: false,
      location: '',
      modifyTime: '',
      name: '',
      refUserId: '',
      space: 0,
      totalLayer: 0,
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
            name: '我的老窝',
            id: '648fe2130df02d3007092a56',
            mainColor: '#42b883',
            minorColor: '#ffaaaa',
          },
          {
            name: '立业园',
            id: '648fe2130df02d3007092a57',
            mainColor: '#FFC107',
            minorColor: '#ffaaaa',
          },
          {
            name: '老家',
            id: '648fe2130df02d3007092a58',
            mainColor: '#2196F3',
            minorColor: '#ffaaaa',
          },
        ],
      },
    ],
  }),
  methods: {
    addNewOneHouseCard() {
      this.haveAlreadyAddNewOneHouseCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
