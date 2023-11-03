<!--HomeView->RoomView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
              <RoomCard :room-list="roomList" :set-disabled="setRoomCardDisabled"></RoomCard>
              <RoomCard :is-eager="isRoomCardEager" class="mt-1" :room-list="roomTemplateJSON"
                         :set-disabled="setRoomCardDisabled"
                         v-if="haveAlreadyAddNewOneRoomCard === false"></RoomCard>
              <!--the button adding new one room card-->
              <v-btn elevation="2" class="my-2" color="white" @click="addNewOneRoomCard"
                     v-if="haveAlreadyAddNewOneRoomCard === true">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>
<script>

import RoomCard from "@/components/card/RoomCard.vue";
import roomListRawData from "@/json/room/roomListRawData.json"
import roomTemplateJSON from "@/json/room/roomTemplateJSON.json"

export default {
  name: 'RoomView',
  components: {RoomCard},
  data: () => ({
    setRoomCardDisabled: true,
    haveAlreadyAddNewOneRoomCard: true,
    isRoomCardEager: true,
    isLoading: false,
    roomList: roomListRawData,
    roomTemplateJSON: roomTemplateJSON,
  }),
  mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  },
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
