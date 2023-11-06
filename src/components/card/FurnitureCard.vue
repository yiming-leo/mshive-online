<!--HomeView->FurnitureView->FurnitureCard-->
<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="furniture in furnitureList" :key="furniture.index">
      <!--panel header-->
      <v-expansion-panel-header>
        <v-row>
          <!--name area-->
          <v-col align-self="center" cols="3">
            <div class="text-h6">{{ furniture.name }}</div>
          </v-col>
          <!--label pins-->
          <v-col align-self="center" cols="8">
            <v-chip-group>
              <v-chip link color="primary" outlined>{{ furniture.attribute }}</v-chip>
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
          <!--          :style="`backgroundColor: `+ furniture.mainColor"-->
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
                <v-text-field v-model="furniture.index" label="UUID" disabled>
                  {{ furniture.index }}
                </v-text-field>
                <!--自动搜索Room词库-->
                <v-menu transition="fade-transition" :close-on-content-click="false">
                  <template #activator="{onRoom, attrsRoom}">
                    <v-autocomplete label="Belong to Room" prefix="Room Name: " :disabled="setDisabled"
                                    v-on="onRoom" v-bind="attrsRoom" no-data-text="请选择所属Room"
                                    v-model="furniture.refRoomId" :items="roomTagList" item-text="roomName"
                                    item-value="roomUUID">
                      <!--此插槽是对下拉菜单中的各项进行修改，会覆盖原先数据-->
                      <template #item="{item}">
                        <v-row>
                          <v-col cols="4" sm>
                            <v-list-item-title>{{ item.roomName }}</v-list-item-title>
                          </v-col>
                          <v-col cols="7" sm>
                            <v-list-item-subtitle>{{ item.roomUUID }}</v-list-item-subtitle>
                          </v-col>
                          <v-col cols="1" sm align-self="center" class="rounded-lg rounded-tr-0 rounded-bl-0"
                                 :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
                          </v-col>
                        </v-row>
                      </template>
                    </v-autocomplete>
                  </template>
                </v-menu>
                <v-text-field v-model="furniture.name" label="Name" :disabled="setDisabled" outlined dense>
                  {{ furniture.name }}
                </v-text-field>
                <v-row>
                  <v-col cols="9">
                    <v-text-field v-model="furniture.attribute" label="Attribute" :disabled="setDisabled" outlined
                                  dense>
                      {{ furniture.attribute }}
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-btn depressed @click="furniture.isBookmarks=!furniture.isBookmarks"
                           dark :color="furniture.isBookmarks? 'green' : 'red'" :disabled="setDisabled">
                      <v-icon>{{ (furniture.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel') }}</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="mx-0 my-1">
                  <v-row>
                    <v-col>
                      <!--颜色插槽1-->
                      <v-menu transition="fade-transition" v-model="showMainColorPicker"
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
                        <v-color-picker dot-size="25" swatches-max-height="200"
                                        v-model:value="furniture.mainColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <!--颜色插槽2-->
                      <v-menu transition="fade-transition" v-model="showMinorColorPicker"
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
                        <v-color-picker dot-size="25" swatches-max-height="200"
                                        v-model:value="furniture.minorColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-textarea v-model="furniture.description" label="Description" :disabled="setDisabled" outlined
                              height="120"
                              clearable clear-icon="mdi-close-circle" counter>
                    {{ furniture.description }}
                  </v-textarea>
                </v-row>
              </v-col>
              <v-col cols="7">
                <AvatarUploader frame-height="400"></AvatarUploader>
              </v-col>
            </v-row>
            <v-card-actions class="px-0 mt-auto d-flex justify-end">
              <v-btn color="primary" class="font-weight-bold" text @click="modifyFurniture()"
                     v-if="setDisabled===true">Modify
              </v-btn>
              <v-btn color="teal" class="font-weight-bold" text @click="saveFurniture(furniture)"
                     v-if="setDisabled===false">Save
              </v-btn>
              <v-btn color="red" class="font-weight-bold" text @click="deleteFurniture(furniture.index)">
                Delete
              </v-btn>
              <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateFurniture(furniture.index)">
                Duplicate
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader.vue";

export default {
  name: "FurnitureCard",
  components: {AvatarUploader},
  props: {
    setDisabled: Boolean,
    furnitureList: Array,
    isEager: false,
  },
  data: () => ({
    roomTagList: [
      {roomUUID: '648fe4410df02d3007092a58', roomName: '办公', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a59', roomName: '私人', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a60', roomName: '生活', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a61', roomName: '生活', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a62', roomName: '生活', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a63', roomName: '生活', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a64', roomName: '生活', mainColor: "#ffaaaa", minorColor: "#aaffff"},
      {roomUUID: '648fe4410df02d3007092a65', roomName: '生活', mainColor: "#ffaaaa", minorColor: "#aaffff"},
    ],
    showMainColorPicker: false,
    showMinorColorPicker: false,
    colorPickerMenu: false,
  }),
  computed: {},
  methods: {
    roomListFilter(item, queryText, itemText) {
      const textOne = item.roomName.toLowerCase()
      const textTwo = item.roomUUID
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
    },
    modifyFurniture() {
      this.setDisabled = false
    },
    saveFurniture() {
      this.setDisabled = true
      //读取数据

      //组装数据

      //更新数据到数据库
    },
    deleteFurniture(index) {

    },
    duplicateFurniture(index) {

    },
  },
}
</script>

<style scoped>

</style>
