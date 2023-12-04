<!--HomeView->RoomView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
              <RoomCard :room-list="roomList" ref="roomCard"
                        :user-u-u-id="userUUId"
                        :userUUId="userUUId"></RoomCard>
              <!--the button adding new one room card-->
              <RoomCard :is-eager="isRoomCardEager" ref="roomCard"
                        :user-u-u-id="userUUId"
                        class="mt-1" :room-list="roomTemplateJSON"
                        v-if="haveAlreadyAddNewOneRoomCard === false">
              </RoomCard>
              <!--the add-new-one button-->
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
import roomTemplateJSON from "@/json/room/roomTemplateJSON.json"
import {searchAllRoom} from "@/api/roomRequest/roomApi";

export default {
  name: 'RoomView',
  components: {RoomCard},
  data: () => ({
    userUUId: '648fdfbb54b0950d00c37c2e',
    haveAlreadyAddNewOneRoomCard: true,
    isRoomCardEager: true,
    isLoading: false,
    //存放所有查询回来的房间
    roomList: null,
    roomTemplateJSON: roomTemplateJSON,

    //消息栏
    snackbarStatus: false,
    snackbarCode: 200,
    snackbarColor: 'white',
    snackbarData: "none",
    snackbarTimeout: 2000,
  }),
  mounted() {
    this.isLoading = true
    this.loadAllRoom(this.userUUId)
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  },
  methods: {
    //------------------发送snackbar，唤醒消息栏------------------
    sendMessage(code, color, data, timeout) {
      this.snackbarStatus = true
      this.snackbarCode = code
      this.snackbarColor = color
      this.snackbarData = data
      this.snackbarTimeout = timeout
    },
    //----------------------查询所有操作--------------------------
    async loadAllRoom(userUUId) {
      //封闭操作遮罩层
      this.overlayLoading = true
      //搜索数据
      try {
        await searchAllRoom(userUUId).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.message, 2000);
          } else {
            //将返回data内的list数据传给roomList进行渲染
            this.roomList = res.data.data
            console.log("roomList")
            console.log(this.roomList)
            this.sendMessage(200, 'success', res.data.message, 2000);
          }
        })
      } catch (error) {
        console.error("FR404", "room load failed")
        this.sendMessage(500, 'error', "load failed", 2000);
      }
      //开放操作遮罩层
      this.overlayLoading = false
    },
    addNewOneRoomCard() {
      this.haveAlreadyAddNewOneRoomCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
