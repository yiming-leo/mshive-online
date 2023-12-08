<!--HomeView->StuffView->StuffCard-->
<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="stuff in stuffList" :key="stuff.index">
      <!--panel header-->
      <v-expansion-panel-header>
        <v-row>
          <!--name area-->
          <v-col align-self="center" cols="3">
            <div class="text-h6">{{ stuff.name }}</div>
          </v-col>
          <!--label pins-->
          <v-col align-self="center" cols="8">
            <v-chip-group>
              <v-chip link color="primary" outlined>{{ stuff.attribute }}</v-chip>
              <v-chip v-if="stuff.isBookmarks === true" color="vue_theme" outlined>
                <v-icon>mdi-check</v-icon>
                Bookmarked
              </v-chip>
              <v-chip v-else-if="stuff.isBookmarks === false" color="error" outlined>
                <v-icon>mdi-minus</v-icon>
                unBookmark
              </v-chip>
            </v-chip-group>
          </v-col>
          <!--color point-->
          <v-col align-self="center" cols="1">
            <v-img :style="`background: linear-gradient(0.45turn,`+stuff.mainColor+`,`+stuff.minorColor+`)`"
                   height="30" width="30" class="rounded-lg rounded-tr-0 rounded-bl-0"/>
          </v-col>
          <!--          :style="`backgroundColor: `+ stuff.mainColor"-->
        </v-row>
      </v-expansion-panel-header>
      <!--扩展页面具体内容-->
      <v-expansion-panel-content :eager="isEager">
        <v-hover v-slot="{hover}">
          <v-card :elevation="hover? 12:0" class="px-4 transition-swing">
            <!--加载动画插槽-->
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>
            <v-row>
              <!--左侧：字段信息-->
              <v-col cols="5" class="mt-2">
                <!--左侧上第一行：UUID-->
                <v-text-field v-model="stuff.id" label="UUID" disabled>
                  {{ stuff.id }}
                </v-text-field>
                <!--左侧上第三行：所属Stuff+自动搜索Stuff词库下拉菜单-->
                <v-menu transition="fade-transition" :close-on-content-click="false">
                  <template #activator="{onFurniture, attrsFurniture}">
                    <v-autocomplete label="Belong to Furniture" prefix="Furniture Name: " :disabled="setDisabled"
                                    v-on="onFurniture" v-bind="attrsFurniture" no-data-text="请选择所属Furniture"
                                    v-model="stuff.refFurnitureId" :items="furnitureTagList" item-text="name"
                                    item-value="id" @change="syncCurrentRoomId(stuff)">
                      <!--此插槽是对下拉菜单中的各项进行修改，会覆盖原先数据-->
                      <template #item="{item}">
                        <v-row>
                          <v-col cols="4" sm>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                          </v-col>
                          <v-col cols="7" sm>
                            <v-list-item-subtitle>{{ item.id }}</v-list-item-subtitle>
                          </v-col>
                          <v-col cols="1" sm align-self="center" class="rounded-lg rounded-tr-0 rounded-bl-0"
                                 :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
                          </v-col>
                        </v-row>
                      </template>
                    </v-autocomplete>
                  </template>
                </v-menu>
                <!--左侧上第四行-->
                <v-text-field v-model="stuff.name" label="Name" :disabled="setDisabled" outlined dense>
                  {{ stuff.name }}
                </v-text-field>
                <!--左侧上第五行：属性-星标书签-->
                <v-row>
                  <v-col cols="9">
                    <v-text-field v-model="stuff.attribute" label="Attribute" :disabled="setDisabled" outlined dense>
                      {{ stuff.attribute }}
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-btn depressed @click="stuff.isBookmarks=!stuff.isBookmarks"
                           dark :color="stuff.isBookmarks? 'green' : 'red'" :disabled="setDisabled">
                      <v-icon>{{ (stuff.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel') }}</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <!-- 左侧下共二行：颜色选择器-描述文本框-->
                <v-row class="mx-0 my-1">
                  <!--颜色选择器-->
                  <v-row>
                    <v-col>
                      <!--颜色插槽1-->
                      <v-menu transition="fade-transition"
                              :close-on-content-click="false">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="stuff.mainColor" label="Main Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ stuff.mainColor }}
                            <template #append>
                              <v-icon :color="stuff.mainColor" :disabled="setDisabled">mdi-palette</v-icon>
                            </template>
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200" key="color-picker1"
                                        v-model:value="stuff.mainColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <!--颜色插槽2-->
                      <v-menu transition="fade-transition"
                              :close-on-content-click="false">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="stuff.minorColor" label="Minor Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ stuff.minorColor }}
                            <template #append>
                              <v-icon :color="stuff.minorColor" :disabled="setDisabled">mdi-palette</v-icon>
                            </template>
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200" key="color-picker2"
                                        v-model:value="stuff.minorColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <!--描述文本框-->
                  <v-textarea v-model="stuff.description" label="Description" :disabled="setDisabled" outlined
                              height="80"
                              clearable clear-icon="mdi-close-circle" counter>
                    {{ stuff.description }}
                  </v-textarea>
                </v-row>
              </v-col>
              <!--右侧：图片上传与识别加载-->
              <v-col cols="7">
                <!--图片上传器，需要额外插槽-->
                <AvatarUploader ref="avatarUploader" frame-height="430" :upload-is-disabled="setDisabled">
                </AvatarUploader>
              </v-col>
            </v-row>
            <!--右下三按钮-->
            <v-card-actions class="px-0 mt-auto d-flex justify-end">
              <!--修改/保存按钮-->
              <v-btn color="primary" class="font-weight-bold" text @click="modifyStuff()"
                     v-if="setDisabled===true">Modify
              </v-btn>
              <v-btn color="teal" class="font-weight-bold" text @click="saveStuff(userUUId, stuff)"
                     v-if="setDisabled===false">Save
              </v-btn>
              <v-overlay :value="overlayLoading">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
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
                      Are Your Sure to Delete?
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="" text @click="dialog = false">No</v-btn>
                      <v-btn color="primary" text @click="deleteStuff(userUUId, stuff.id)">Yes</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>

              <!--复制按钮-->
              <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateStuff(stuff.index)">
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
import {
  searchAllFurniture,
  searchFurnitureListByFurnitureUUIds,
  searchOneFurniture
} from "@/api/furnitureRequest/furnitureApi";
import {getCurrentDateTime} from "@/js/generalDataConverter";
import {deleteOneStuff, searchAllStuff, updateOneStuff} from "@/api/stuffRequest/stuffApi";

export default {
  name: "StuffCard",
  components: {AvatarUploader},
  props: {
    userUUId: String,
    stuffList: Array,
    isEager: false,
  },
  data: () => ({

    //当前左二被选中的furniture所影响的room_uuid
    currentRefRoomIdByRefFurnitureId: "",
    currentRefRoomNameByRefFurnitureId: "",

    //再次确认对话框弹窗
    dialog: false,

    //设置是否禁用卡片
    setDisabled: true,

    //装载刚查询完room列表的原始数据
    furnitureList: [],
    //自动搜索Furniture词库下拉菜单模拟数据
    furnitureTagList: [],
    //装载此页面数据显示后所需的roomUUId，是roomTagList的前置条件
    furnitureUUIds: [],

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
  computed: {},
  watch: {},
  mounted() {
    //查询供stuff选择的furniture列表
    this.queryFurnitureListByFurnitureUUIds(this.userUUId)
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
    //-------------修改操作（空操作，为了迎合保存操作）----------------
    modifyStuff() {
      this.setDisabled = false
    },
    //TODO-------------根据选中的furniture来同步room信息，只加装给参数，不显示在前端-------------
    async syncCurrentRoomId(stuff){
      //根据当前的furnitureUUId查询所属的roomId和room名字
      console.log("syncCurrentRoomId->stuff")
      console.log(stuff)
      this.currentRefRoomIdByRefFurnitureId = stuff.refRoomId
      console.log("this.currentRefRoomIdByRefFurnitureId")
      console.log(this.currentRefRoomIdByRefFurnitureId)
      // TODO 需要后端编写一个furnitureUUId查询furniture信息的接口而不是furnitureId
      await searchOneFurniture(furnitureUUId).then(res=>{
        if (res.data.status != 200 || !res) {
          this.sendMessage(404, 'warning', res.data.msg, 2000);
        } else {
          this.currentRefRoomIdByRefFurnitureId = res.data.data
        }
      })
    },
    //-------------按roomUUId查询roomName，通识加装到roomTagList(比Furniture多了的东西)----------------
    async queryFurnitureListByFurnitureUUIds(userUUId) {
      //查询所有room装载成数组给roomUUIds
      await searchAllFurniture(userUUId).then(res => {
        if (res.data.status != 200 || !res) {
          this.sendMessage(404, 'warning', res.data.msg, 2000);
        } else {
          this.furnitureList = res.data.data
          console.log("this.roomList")
          console.log(this.furnitureList)
          for (let i = 0; i < this.furnitureList.length; i++) {
            this.furnitureUUIds.push(this.furnitureList.at(i).id)
          }
          console.log("this.roomUUIds")
          console.log(this.furnitureUUIds)
        }
      })
      //根据加装的room uuid查询完整的room list
      try {
        await searchFurnitureListByFurnitureUUIds(userUUId, this.furnitureUUIds).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.msg, 2000);
          } else {
            var furnitureUUIdLength = this.furnitureUUIds.length
            //根据之前push进入的room id，来查找并装载tag数据
            for (let i = 0; i < furnitureUUIdLength; i++) {
              this.furnitureTagList.push(res.data.data.at(i))
            }
          }
          // 成功不需要发送消息
          // this.sendMessage(200, 'success', res.data.msg, 2000);
          //转换状态
          this.setDisabled = true
        })
      } catch (error) {
        console.error("FR500", "furniture tag search failed")
        this.sendMessage(500, 'error', "furniture tag search failed", 2000);
      }
    },
    //-----------------------修改保存Stuff操作----------------------------
    async saveStuff(userUUId, stuff) {
      //读取数据
      console.log("saveStuff->stuff")
      console.log(stuff)
      //封闭操作遮罩层
      this.overlayLoading = true
      //组装数据
      stuff.modifyTime = getCurrentDateTime()
      stuff.modifyCount += 1
      //特别注意跨层要组装room
      stuff.refRoomId = this.currentRefRoomIdByRefFurnitureId
      //更新数据到数据库
      try {
        await updateOneStuff(userUUId, stuff).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.msg, 2000);
            console.log("updateOneStuff->stuff")
            console.log(stuff)
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
    },
    //-----------------------删除Furniture操作----------------------------
    async deleteStuff(userUUId, stuffUUId) {
      //封闭操作遮罩层
      this.overlayLoading = true
      //更新数据到数据库
      try {
        await deleteOneStuff(userUUId, stuffUUId).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.msg, 2000);
          } else {
            this.sendMessage(200, 'success', res.data.msg, 2000);
            //刷新一遍所有数据

            //------------------loadAllStuff--------------
            //封闭操作遮罩层
            this.overlayLoading = true
            //搜索数据
            try {
              searchAllStuff(userUUId).then(res => {
                if (res.data.status != 200 || !res) {
                  this.sendMessage(404, 'warning', res.data.message, 2000);
                } else {
                  //将返回data内的list数据传给roomList进行渲染
                  this.stuffList = res.data.data
                  console.log("stuffList")
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
            //------------------loadAllFurniture--------------
          }
        })
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
    //-----------------------复制Stuff操作----------------------------
    duplicateStuff(index) {

    },
  },
}
</script>

<style scoped>

</style>
