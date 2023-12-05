<!--HomeView->FurnitureView->FurnitureCard-->
<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="furniture in furnitureList" :key="furniture.index">
      <!--扩展页面头部-->
      <v-expansion-panel-header>
        <v-row>
          <!--名字区域-->
          <v-col align-self="center" cols="3">
            <div class="text-h6">{{ furniture.name }}</div>
          </v-col>
          <!--标签区域-->
          <v-col align-self="center" cols="8">
            <v-chip-group>
              <!--属性-->
              <v-chip link color="primary" outlined>{{ furniture.attribute }}</v-chip>
              <!--是否星标-->
              <v-chip v-if="furniture.isBookmarks === true" color="vue_theme" outlined>
                <v-icon>mdi-check</v-icon>
                Bookmarked
              </v-chip>
              <v-chip v-else-if="furniture.isBookmarks === false" color="error" outlined>
                <v-icon>mdi-minus</v-icon>
                UnBookmark
              </v-chip>
            </v-chip-group>
          </v-col>
          <!--color point-->
          <v-col align-self="center" cols="1">
            <v-img :style="`background: linear-gradient(0.45turn,`+furniture.mainColor+`,`+furniture.minorColor+`)`"
                   height="30" width="30" class="rounded-lg rounded-tr-0 rounded-bl-0"/>
          </v-col>
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
                <v-text-field v-model="furniture.id" label="UUID" disabled>
                  {{ furniture.id }}
                </v-text-field>
                <!--左侧上第二行：所属Room+自动搜索Room词库下拉菜单-->
                <v-menu transition="fade-transition" :close-on-content-click="false">
                  <template #activator="{onRoom, attrsRoom}">
                    <v-autocomplete label="Belong to Room" prefix="Room Name: " :disabled="setDisabled"
                                    v-on="onRoom" v-bind="attrsRoom" no-data-text="请选择所属Room"
                                    v-model="furniture.refRoomId" :items="roomTagList" item-text="name"
                                    item-value="id">
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
                <!--左侧上第三行：名字-->
                <v-text-field v-model="furniture.name" label="Name" :disabled="setDisabled" outlined dense>
                  {{ furniture.name }}
                </v-text-field>
                <!--左侧上第四行：属性-星标书签-->
                <v-row>
                  <v-col cols="9">
                    <!--属性栏-->
                    <v-text-field v-model="furniture.attribute" label="Attribute"
                                  :disabled="setDisabled" outlined dense>
                      {{ furniture.attribute }}
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <!--书签星标按钮-->
                    <v-btn depressed @click="furniture.isBookmarks=!furniture.isBookmarks"
                           dark :color="furniture.isBookmarks? 'green' : 'red'" :disabled="setDisabled">
                      <v-icon>{{ (furniture.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel') }}</v-icon>
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
                          <v-text-field v-model="furniture.mainColor" label="Main Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ furniture.mainColor }}
                            <template #append>
                              <v-icon :color="furniture.mainColor" :disabled="setDisabled">mdi-palette</v-icon>
                            </template>
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200" key="color-picker1"
                                        v-model:value="furniture.mainColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <!--颜色插槽2-->
                      <v-menu transition="fade-transition"
                              :close-on-content-click="false">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="furniture.minorColor" label="Minor Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ furniture.minorColor }}
                            <template #append>
                              <v-icon :color="furniture.minorColor" :disabled="setDisabled">mdi-palette</v-icon>
                            </template>
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200" key="color-picker2"
                                        v-model:value="furniture.minorColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <!--描述文本框-->
                  <v-textarea v-model="furniture.description" label="Description" :disabled="setDisabled" outlined
                              height="120"
                              clearable clear-icon="mdi-close-circle" counter>
                    {{ furniture.description }}
                  </v-textarea>
                </v-row>
              </v-col>
              <!--右侧：图片上传与识别加载-->
              <v-col cols="7">
                <!--图片上传器，需要额外插槽-->
                <AvatarUploader ref="avatarUploader" :frame-height="400" :upload-is-disabled="setDisabled">
                </AvatarUploader>
              </v-col>
            </v-row>
            <!--右下三按钮-->
            <v-card-actions class="px-0 mt-auto d-flex justify-end">
              <!--修改/保存按钮-->
              <v-btn color="primary" class="font-weight-bold" text @click="modifyFurniture()"
                     v-if="setDisabled===true">Modify
              </v-btn>
              <v-btn color="teal" class="font-weight-bold" text @click="saveFurniture(userUUId, furniture)"
                     v-if="setDisabled===false">Save
              </v-btn>
              <v-overlay :value="overlayLoading">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
              </v-overlay>
              <!--删除按钮-->
              <v-btn color="red" class="font-weight-bold" text @click="deleteFurniture(userUUId, furniture.index)">
                Delete
              </v-btn>
              <!--复制按钮-->
              <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateFurniture(furniture.index)">
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
import {deleteOneFurniture, updateOneFurniture} from "@/api/furnitureRequest/furnitureApi";
import {getCurrentDateTime} from "@/js/generalDataConverter";
import {searchAllRoom, searchRoomListByRoomUUIds} from "@/api/roomRequest/roomApi";


export default {
  name: "FurnitureCard",
  components: {AvatarUploader},
  props: {
    userUUId: String,
    furnitureList: Array,
    isEager: false,
  },
  data: () => ({
    //设置是否禁用卡片
    setDisabled: true,

    //装载刚查询完room列表的原始数据
    roomList: [],
    //自动搜索Room词库下拉菜单模拟数据
    roomTagList: [],
    //装载此页面数据显示后所需的roomUUId，是roomTagList的前置条件
    roomUUIds: [],

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
    //查询供furniture选择的room列表
    this.queryRoomListByRoomUUIds(this.userUUId)
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
    //-------------按roomUUId查询roomName，通识加装到roomTagList----------------
    async queryRoomListByRoomUUIds(userUUId) {
      // try {
      //   var furnitureListLength = this.furnitureList.length
      //   console.log("furnitureListLength")
      //   console.log(furnitureListLength)
      //   //
      //   for (let i = 0; i < furnitureListLength; i++) {
      //     //查询
      //     if (!this.roomUUIds.includes(this.furnitureList.at(i).refRoomId)) {
      //       this.roomUUIds.push(this.furnitureList.at(i).refRoomId)
      //     }
      //   }
      //
      //
      //
      //   console.log("this.furnitureList")
      //   console.log(this.furnitureList)
      //   console.log("this.roomUUIds")
      //   console.log(this.roomUUIds)
      // } catch (error) {
      //   if (furnitureListLength == null) {
      //     console.log("真进去了吗？")
      //     console.error("RU404", "room tag search failed")
      //     this.sendMessage(404, 'warning', "room uuid list loading failed", 2000);
      //   }
      // }

      //查询所有room装载成数组给roomUUIds
      await searchAllRoom(userUUId).then(res => {
        if (res.data.status != 200 || !res) {
          this.sendMessage(404, 'warning', res.data.msg, 2000);
        } else {
          this.roomList = res.data.data
          console.log("this.roomList")
          console.log(this.roomList)
          for (let i = 0; i < this.roomList.length; i++) {
            this.roomUUIds.push(this.roomList.at(i).id)
          }
          console.log("this.roomUUIds")
          console.log(this.roomUUIds)
        }
      })

      //根据加装的room uuid查询完整的room list
      try {
        await searchRoomListByRoomUUIds(userUUId, this.roomUUIds).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.msg, 2000);
          } else {
            var roomUUIdLength = this.roomUUIds.length
            //根据之前push进入的room id，来查找并装载tag数据
            for (let i = 0; i < roomUUIdLength; i++) {
              this.roomTagList.push(res.data.data.at(i))
            }
          }
          // 成功不需要发送消息
          // this.sendMessage(200, 'success', res.data.msg, 2000);
          //转换状态
          this.setDisabled = true
        })
      } catch (error) {
        console.error("RR500", "room tag search failed")
        this.sendMessage(500, 'error', "room tag search failed", 2000);
      }
    },
    //-------------修改操作（空操作，为了迎合保存操作）----------------
    modifyFurniture() {
      //转换状态
      this.setDisabled = false
    },
    //-----------------------保存操作----------------------------
    async saveFurniture(userUUId, furniture) {
      //读取数据
      console.log("furniture: " + furniture)
      //封闭操作遮罩层
      this.overlayLoading = true
      //组装数据
      furniture.modifyTime = getCurrentDateTime()
      furniture.modifyCount += 1
      //更新数据到数据库
      try {
        await updateOneFurniture(userUUId, furniture).then(res => {
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
    },
    //-----------------------删除操作----------------------------
    async deleteFurniture(userUUId, furnitureUUId) {
      //封闭操作遮罩层
      this.overlayLoading = true
      //更新数据到数据库
      try {
        await deleteOneFurniture(userUUId, furnitureUUId).then(res => {
          if (res.data.status != 200 || !res) {
            this.sendMessage(404, 'warning', res.data.msg, 2000);
          } else {
            this.sendMessage(200, 'success', res.data.msg, 2000);
          }
        })
      } catch (error) {
        this.sendMessage(500, 'error', "delete failed", 2000);
        console.log("error: " + error)
      }
      //转换状态
      this.setDisabled = true
      //开放操作遮罩层
      this.overlayLoading = false
    },
    //-----------------------复制操作----------------------------
    async duplicateFurniture(index) {

    },

  },
}
</script>

<style scoped>

</style>
