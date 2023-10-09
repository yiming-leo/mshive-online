<!--HomeView->RoomView-->
<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <v-row>
      <v-col cols="9">
        <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
          <RoomCard :room-list="roomList" :set-disabled="setRoomCardDisabled"></RoomCard>
          <RoomCard :is-eager="isRoomCardEager" class="mt-1" :room-list="roomTemplateJSON"
                    :set-disabled="setRoomCardDisabled" v-if="haveAlreadyAddNewOneRoomCard === false"></RoomCard>
          <!--the button adding new one room card-->
          <v-btn class="my-2" color="white" @click="addNewOneRoomCard" v-if="haveAlreadyAddNewOneRoomCard === true">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-sheet>
      </v-col>
      <!--right tree view-->
      <v-col cols="3">
<!--        <template v-if="!selection.length">-->
<!--          No nodes selected.-->
<!--        </template>-->
<!--        <template v-else>-->
<!--          <div v-for="node in selection" :key="node.id">-->
<!--            {{ node.name }}-->
<!--          </div>-->
<!--        </template>-->
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

import RoomCard from "@/components/card/RoomCard.vue";

export default {
  name: 'RoomView',
  components: {
    RoomCard
  },
  data: () => ({
    // middle
    setRoomCardDisabled: true,
    haveAlreadyAddNewOneRoomCard: true,
    isRoomCardEager: true,
    roomList: [
      {
        index: '648fe2130df02d3007092a59',
        attribute: '卧室',
        mainColor: '#42b883',
        minorColor: '#ffaaaa',
        description: '我的卧室罢了',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isCurrent: true,
        isDeleted: false,
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '我的卧室',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        space: 15,
        layer: 1,
      },
      {
        index: '648fe2130df02d3007092a60',
        attribute: '客厅',
        mainColor: '#422222',
        minorColor: '#ffa111',
        description: '客厅罢了',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isCurrent: true,
        isDeleted: false,
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '大客厅',
        refUserId: '648fdfbb54b0950d00c37c2e',
        refHomeId: '648fe2130df02d3007092a58',
        space: 20,
        layer: 1,
      },
    ],
    roomTemplateJSON: [{
      index: '',
      attribute: '',
      mainColor: '',
      minorColor: '',
      description: '',
      imgUrl: '',
      isCurrent: true,
      isDeleted: false,
      modifyTime: '',
      name: '',
      refUserId: '',
      refHomeId: '',
      space: null,
      layer: null,
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
                name: '卧室',
                id: '648fe2130df02d3007092a59',
                mainColor: '#42b883',
                minorColor: '#ffaaaa',
              },
              {
                name: '客厅',
                id: '648fe2130df02d3007092a60',
                mainColor: '#422222',
                minorColor: '#ffa111',
              },
            ],
          },
        ],
      },
    ],
  }),
  methods: {
    addNewOneRoomCard() {
      this.haveAlreadyAddNewOneRoomCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
