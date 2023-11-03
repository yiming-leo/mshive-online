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
                <v-text-field v-model="room.index" label="UUID" disabled>
                  {{ room.index }}
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
                <v-row class="mx-0 my-1">
                  <v-row>
                    <v-col>
                      <!--颜色插槽1-->
                      <v-menu transition="fade-transition">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="room.mainColor" label="Main Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ room.mainColor }}
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200"
                                        v-model:value="room.mainColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                    <v-col>
                      <!--颜色插槽2-->
                      <v-menu transition="fade-transition">
                        <template #activator="{on, attrs}">
                          <v-text-field v-model="room.minorColor" label="Minor Color" :disabled="setDisabled"
                                        outlined dense v-bind="attrs" v-on="on">
                            {{ room.minorColor }}
                          </v-text-field>
                        </template>
                        <v-color-picker dot-size="25" swatches-max-height="200"
                                        v-model:value="room.minorColor"></v-color-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-textarea v-model="room.description" label="Description" :disabled="setDisabled" outlined
                              height="120" clearable clear-icon="mdi-close-circle" counter>
                    {{ room.description }}
                  </v-textarea>
                </v-row>
              </v-col>
              <v-col cols="7">
                <AvatarUploader frame-height="330"></AvatarUploader>
              </v-col>
            </v-row>
            <v-card-actions class="px-0 mt-auto d-flex justify-end">
              <v-btn color="primary" class="font-weight-bold" text @click="modifyRoom()"
                     v-if="setDisabled===true">Modify
              </v-btn>
              <v-btn color="teal" class="font-weight-bold" text @click="saveRoom(room)"
                     v-if="setDisabled===false">Save
              </v-btn>
              <v-btn color="red" class="font-weight-bold" text @click="deleteRoom(room.index)">
                Delete
              </v-btn>
              <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateRoom(room.index)">
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
  name: "RoomCard",
  components: {AvatarUploader},
  props: {
    setDisabled: Boolean,
    roomList: Array,
    isEager: false,
  },
  data: () => ({}),
  methods: {
    modifyRoom() {
      this.setDisabled = false
    },
    saveRoom(room) {
      this.setDisabled = true
      //读取数据

      //组装数据

      //更新数据到数据库
    },
    deleteRoom(index) {

    },
    duplicateRoom(index) {

    },
  },
}
</script>

<style scoped>

</style>
