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
              <v-chip link color="amber" outlined>Space: {{ furniture.space }}</v-chip>
              <v-chip link color="pink" outlined>Size: {{ furniture.size }}</v-chip>
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
                <v-text-field v-model="furniture.name" label="Name" :disabled="setDisabled" outlined dense>
                  {{ furniture.name }}
                </v-text-field>
                <v-text-field v-model="furniture.attribute" label="Attribute" :disabled="setDisabled" outlined dense>
                  {{ furniture.attribute }}
                </v-text-field>
                <v-text-field v-model="furniture.usage" label="Usage" :disabled="setDisabled" outlined dense>
                  {{ furniture.usage }}
                </v-text-field>
                <v-row class="mt-0">
                  <v-col>
                    <!--颜色插槽1-->
                    <v-menu transition="fade-transition">
                      <template #activator="{on, attrs}">
                        <v-text-field v-model="furniture.mainColor" label="Main Color" :disabled="setDisabled"
                                      outlined dense v-bind="attrs" v-on="on">
                          {{ furniture.mainColor }}
                        </v-text-field>
                      </template>
                      <v-color-picker dot-size="25" swatches-max-height="200"
                                      v-model:value="furniture.mainColor"></v-color-picker>
                    </v-menu>
                  </v-col>
                  <v-col>
                    <!--颜色插槽2-->
                    <v-menu transition="fade-transition">
                      <template #activator="{on, attrs}">
                        <v-text-field v-model="furniture.minorColor" label="Minor Color" :disabled="setDisabled"
                                      outlined dense v-bind="attrs" v-on="on">
                          {{ furniture.minorColor }}
                        </v-text-field>
                      </template>
                      <v-color-picker dot-size="25" swatches-max-height="200"
                                      v-model:value="furniture.minorColor"></v-color-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col cols="8">
                    <v-text-field v-model="furniture.size" label="Size"
                                  :disabled="setDisabled" outlined dense>
                      {{ furniture.size }}
                    </v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-btn depressed @click="furniture.isBookmarks=!furniture.isBookmarks"
                           dark :color="furniture.isBookmarks? 'green' : 'red'" :disabled="setDisabled">
                      <v-icon>{{ (furniture.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel') }}</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="7">
                <AvatarUploader></AvatarUploader>
              </v-col>
            </v-row>
            <v-row class="ms-0 me-3">
              <v-textarea v-model="furniture.description" label="Description" :disabled="setDisabled" outlined
                          height="80"
                          clearable clear-icon="mdi-close-circle" counter>
                {{ furniture.description }}
              </v-textarea>
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
  data: () => ({}),
  methods: {
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
