<!--HomeView->StuffView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column overflow-auto" min-height="70vh"
                   rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
              <StuffCard :stuff-list="stuffList" ref="stuffCard"
                         :user-u-u-id="userUUId"
                         :userUUId="userUUId"></StuffCard>
              <!--the button adding new one stuff card-->
              <v-btn class="my-2" color="white" @click="addNewOneStuffCard">
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

import StuffCard from "@/components/card/StuffCard.vue";
import {insertOneStuff, searchAllStuff} from "@/api/stuffRequest/stuffApi";
import stuffTemplateJSON from "@/json/stuff/stuffTemplateJSON.json"

export default {
  name: 'Stuff',
  components: {StuffCard},
  data: () => ({
    userUUId: '648fdfbb54b0950d00c37c2e',
    haveAlreadyAddNewOneStuffCard: true,
    isStuffCardEager: true,
    isLoading: false,
    //存放所有查询回来的物品
    stuffList: null,
    //物品模板
    stuffTemplateJSON: stuffTemplateJSON,

    //消息栏
    snackbarStatus: false,
    snackbarCode: 200,
    snackbarColor: 'white',
    snackbarData: "none",
    snackbarTimeout: 2000,
  }),
  mounted() {
    this.isLoading = true
    this.loadAllStuff(this.userUUId)
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
    async loadAllStuff(userUUId) {
      //封闭操作遮罩层
      this.overlayLoading = true
      //搜索数据
      try {
        await searchAllStuff(userUUId).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.message, 2000);
          } else {
            //将返回data内的list数据传给stuffList进行渲染
            this.stuffList = res.data.data
            console.log("this.stuffList")
            console.log(this.stuffList)
            this.sendMessage(200, 'success', res.data.message, 2000);
          }
        })
      } catch (error) {
        console.error("SR404", "stuff load failed")
        this.sendMessage(500, 'error', "load failed", 2000);
      }
      //开放操作遮罩层
      this.overlayLoading = false
    },
    //----------------------新增一条Stuff操作--------------------------
    async addNewOneStuffCard() {
      this.haveAlreadyAddNewOneStuffCard = false
      //填写信息
      //模拟一个暂时的stuff模板
      stuffTemplateJSON =
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
      console.log("prepare insertOneStuff")
      await insertOneStuff(this.userUUId, stuffTemplateJSON).then(res => {
        if (res.data.status != 200 || !res) {
          this.sendMessage(404, 'warning', res.data.message, 2000);
        } else {
          this.sendMessage(200, 'success', res.data.message, 2000);
        }
      })
      //保存完刷新组件（此时新数据已加载进入数据库）
      await this.loadAllStuff(this.userUUId)
    },
  },
}
</script>
