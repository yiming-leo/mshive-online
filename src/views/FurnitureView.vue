<!--HomeView->FurnitureView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
              <FurnitureCard :furniture-list="furnitureList" ref="furnitureCard"
                             :user-u-u-id="userUUId"
                             :userUUId="userUUId"></FurnitureCard>
              <!--the add-new-one button-->
              <v-btn class="my-2" color="white" @click="addNewOneFurnitureCard">
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

import FurnitureCard from "@/components/card/FurnitureCard.vue";
import furnitureTemplateJSON from "@/json/furniture/furnitureTemplateJSON.json"
import {insertOneFurniture, searchAllFurniture} from "@/api/furnitureRequest/furnitureApi";
import roomTemplateJSON from "@/json/room/roomTemplateJSON.json";

export default {
  name: 'FurnitureView',
  components: {
    FurnitureCard
  },
  data: () => ({
    userUUId: '648fdfbb54b0950d00c37c2e',
    haveAlreadyAddNewOneFurnitureCard: true,
    isFurnitureCardEager: true,
    isLoading: false,
    //存放所有查询回来的家具
    furnitureList: null,
    //家具模板
    furnitureTemplateJSON: furnitureTemplateJSON,

    //消息栏
    snackbarStatus: false,
    snackbarCode: 200,
    snackbarColor: 'white',
    snackbarData: "none",
    snackbarTimeout: 2000,
  }),
  mounted() {
    this.isLoading = true
    this.loadAllFurniture(this.userUUId)
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
    async loadAllFurniture(userUUId) {
      //封闭操作遮罩层
      this.overlayLoading = true
      //搜索数据
      try {
        await searchAllFurniture(userUUId).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.message, 2000);
          } else {
            //将返回data内的list数据传给furnitureList进行渲染
            this.furnitureList = res.data.data
            console.log("this.furnitureList")
            console.log(this.furnitureList)
            this.sendMessage(200, 'success', res.data.message, 2000);
          }
        })
      } catch (error) {
        console.error("FR404", "furniture load failed")
        this.sendMessage(500, 'error', "load failed", 2000);
      }
      //开放操作遮罩层
      this.overlayLoading = false
    },
    //----------------------新增一条Furniture操作--------------------------
    async addNewOneFurnitureCard() {
      this.haveAlreadyAddNewOneFurnitureCard = false
      //填写信息
      //模拟一个暂时的furniture模板
      furnitureTemplateJSON =
          {
            "refUserId": this.userUUId,
            "name": "",
            "description": "",
            "attribute": "",
            "mainColor": "",
            "minorColor": "",
            "imgUrl": "",
            "isBookmarks": false,
            "modifyCount": 0,
          }
      //填完保存
      console.log("prepare insertOneFurniture")
      await insertOneFurniture(this.userUUId, furnitureTemplateJSON).then(res => {
        if (res.data.status != 200 || !res) {
          this.sendMessage(404, 'warning', res.data.message, 2000);
        } else {
          this.sendMessage(200, 'success', res.data.message, 2000);
        }
      })
      //保存完刷新组件（此时新数据已加载进入数据库）
      await this.loadAllFurniture(this.userUUId)
    },
    //-----------------------删除Furniture操作在FurnitureCard里面----------------------------
  },
}
</script>
