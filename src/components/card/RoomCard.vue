<!--HomeView->RoomView->RoomCard-->
<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="room in roomList" :key="room.index">
      <!--panel header-->
      <v-expansion-panel-header>
        <v-row>
          <!--name area-->
          <v-col align-self="center" cols="3">
            <div class="text-h6">{{ room.name }}</div>
          </v-col>
          <!--label pins-->
          <v-col align-self="center" cols="8">
            <v-chip-group>
              <v-chip link color="primary" outlined>{{ room.attribute }}</v-chip>
              <v-chip v-if="room.isBookmarks === true" color="vue_theme" outlined>
                <v-icon>mdi-check</v-icon>
                Current
              </v-chip>
              <v-chip v-else-if="room.isBookmarks === false" color="error" outlined>
                <v-icon>mdi-minus</v-icon>
                Outdated
              </v-chip>
            </v-chip-group>
          </v-col>
          <!--color point-->
          <v-col align-self="center" cols="1">
            <v-img :style="`background: linear-gradient(0.45turn,`+room.mainColor+`,`+room.minorColor+`)`"
                   height="30" width="30" class="rounded-lg rounded-tr-0 rounded-bl-0"/>
          </v-col>
          <!--          :style="`backgroundColor: `+ room.mainColor"-->
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content :eager="isEager">
        <v-hover v-slot="{hover}">
          <v-card :elevation="hover? 12:0" class="px-4 transition-swing">
            <!--加载动画插槽-->
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>
            <v-row>
              <v-col cols="5" class="mt-2">
                <v-text-field v-model="room.id" label="UUID" disabled>
                  {{ room.id }}
                </v-text-field>
                <v-text-field v-model="room.name" label="Name" :disabled="setDisabled" outlined dense>
                  {{ room.name }}
                </v-text-field>
                <v-row>
                  <v-col cols="9">
                    <v-text-field v-model="room.attribute" label="Attribute" :disabled="setDisabled" outlined dense>
                      {{ room.attribute }}
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-btn depressed @click="room.isBookmarks=!room.isBookmarks"
                           dark :color="room.isBookmarks? 'green' : 'red'" :disabled="setDisabled">
                      <v-icon>{{ (room.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel') }}</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <!-- 左侧下共二行：颜色选择器-描述文本框-->
                <v-row class="mx-0 my-1">
                  <v-row>
                    <v-col>
                      <!--颜色插槽1-->
                      <v-menu transition="fade-transition"
                              :close-on-content-click="false">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="room.mainColor" label="Main Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ room.mainColor }}
                            <template #append>
                              <v-icon :color="room.mainColor" :disabled="setDisabled">mdi-palette</v-icon>
                            </template>
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200"
                                        v-model:value="room.mainColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <!--颜色插槽2-->
                      <v-menu transition="fade-transition"
                              :close-on-content-click="false">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="room.minorColor" label="Minor Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ room.minorColor }}
                            <template #append>
                              <v-icon :color="room.minorColor" :disabled="setDisabled">mdi-palette</v-icon>
                            </template>
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200"
                                        v-model:value="room.minorColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <!--描述文本框-->
                  <v-textarea v-model="room.description" label="Description" :disabled="setDisabled" outlined
                              height="120" clearable clear-icon="mdi-close-circle" counter>
                    {{ room.description }}
                  </v-textarea>
                </v-row>
              </v-col>
              <!--右侧：图片上传与识别加载-->
              <v-col cols="7">
                <!--图片上传器，需要额外插槽-->
                <AvatarUploader frame-height="330"></AvatarUploader>
              </v-col>
            </v-row>
            <!--右下三按钮-->
            <v-card-actions class="px-0 mt-auto d-flex justify-end">
              <!--修改/保存按钮-->
              <v-btn color="primary" class="font-weight-bold" text @click="modifyRoom()"
                     v-if="setDisabled===true">Modify
              </v-btn>
              <v-btn color="teal" class="font-weight-bold" text @click="saveRoom(userUUId, room)"
                     v-if="setDisabled===false">Save
              </v-btn>
              <v-overlay :value="overlayLoading">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
              </v-overlay>

              <!--确认弹窗-->
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">

                  <template v-slot:activator="{ on, attrs }">
                    <!--删除按钮-->
                    <v-btn color="red" class="font-weight-bold" v-bind="attrs"
                           v-on="on" text @click="dialog = true">
                      Delete
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">Double Check</v-card-title>
                    <v-card-text>
                      Are Your Sure to Delete {{ room.attribute }} : {{ room.name }} ?
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="" text @click="dialog = false">No</v-btn>
                      <v-btn color="primary" text @click="deleteRoom(userUUId, room.id)">Yes</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>

              <!--复制按钮-->
              <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateRoom(room.id)">
                Duplicate
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!--消息栏-->
    <v-snackbar v-model="snackbarStatus" light :timeout="snackbarTimeout" width="500"
                :color="snackbarColor" shaped app top centered>
      <v-row>
        <!--状态码-->
        <v-col cols="5" class="text-h6" align-self="center">
          {{ snackbarCode }}
        </v-col>
        <!--消息内容-->
        <v-col cols="7" align-self="center">
          {{ snackbarData }}
        </v-col>
      </v-row>
      <!--关闭按钮-->
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbarStatus = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-expansion-panels>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader.vue";
import {getCurrentDateTime} from "@/js/generalDataConverter";
import {deleteOneRoom, searchAllRoom, updateOneRoom} from "@/api/roomRequest/roomApi";


export default {
  name: "RoomCard",
  components: {AvatarUploader},
  props: {
    userUUId: String,
    roomList: Array,
    isEager: false,
  },
  data: () => ({
    //再次确认对话框弹窗
    dialog: false,

    //设置是否禁用卡片
    setDisabled: true,

    //颜色选择器菜单显示与否
    showMainColorPicker: [],
    showMinorColorPicker: [],
    //遮罩层显示与否
    overlayLoading: false,
    //消息栏
    snackbarStatus: false,
    snackbarCode: 200,
    snackbarColor: 'white',
    snackbarData: "none",
    snackbarTimeout: 2000,
  }),
  methods: {
    //------------------发送snackbar，唤醒消息栏------------------
    sendMessage(code, color, data, timeout) {
      this.snackbarStatus = true
      this.snackbarCode = code
      this.snackbarColor = color
      this.snackbarData = data
      this.snackbarTimeout = timeout
    },

    //-------------修改操作（空操作，为了迎合保存操作）----------------
    modifyRoom() {
      //转换状态
      this.setDisabled = false
    },
    //-----------------------修改保存Room操作----------------------------
    async saveRoom(userUUId, room) {
      this.setDisabled = true
      //读取数据
      console.log("room: " + room)
      //封闭操作遮罩层
      this.overlayLoading = true
      //组装数据
      room.modifyTime = getCurrentDateTime()
      room.modifyCount += 1
      //更新数据到数据库
      try {
        await updateOneRoom(userUUId, room).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.msg, 2000);
          } else {
            this.sendMessage(200, 'success', res.data.msg, 2000);
            //转换状态
            this.setDisabled = true
          }
        })
      } catch (error) {
        this.sendMessage(500, 'error', "update failed", 2000);
        console.log("error: " + error)
      }
      //开放操作遮罩层
      this.overlayLoading = false
      //更新数据到数据库
    },
    //-----------------------删除Room操作----------------------------
    async deleteRoom(userUUId, roomUUId) {
      //封闭操作遮罩层
      this.overlayLoading = true
      //更新数据到数据库
      try {
        await deleteOneRoom(userUUId, roomUUId).then(res => {
              if (res.data.status != 200 || !res) {
                this.sendMessage(404, 'warning', res.data.msg, 2000);
              } else {
                this.sendMessage(200, 'success', res.data.msg, 2000);
                //刷新一遍所有数据

                //------------------loadAllRoom--------------
                //封闭操作遮罩层
                this.overlayLoading = true
                //搜索数据
                try {
                  searchAllRoom(userUUId).then(res => {
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
                //------------------loadAllRoom--------------
              }
            }
        )
      } catch (error) {
        this.sendMessage(500, 'error', "delete failed", 2000);
        console.log("error: " + error)
      }
      //弹窗关闭
      this.dialog = false
      //转换状态
      this.setDisabled = true
      //开放操作遮罩层
      this.overlayLoading = false
    },
    //-----------------------复制Room操作----------------------------
    async duplicateRoom(index) {

    },
  }
  ,
}
</script>

<style scoped>

</style>
