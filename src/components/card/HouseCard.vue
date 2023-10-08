<!--HomeView->HouseView->HouseCard-->
<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="house in houseList" :key="house.index">
      <v-expansion-panel-header>
        <v-row>
          <v-col align-self="center" cols="3">
            <div class="text-h6">{{ house.name }}</div>
          </v-col>
          <v-col align-self="center" cols="8">
            <v-chip-group>
              <v-chip link color="primary" outlined>{{ house.attribute }}</v-chip>
              <v-chip link color="amber" outlined>Space: {{ house.space }}</v-chip>
              <v-chip link color="pink" outlined>Layer: {{ house.totalLayer }}</v-chip>
              <v-chip v-if="house.isCurrent === true" color="vue_theme" outlined>
                <v-icon>mdi-check</v-icon>
                Current
              </v-chip>
              <v-chip v-else-if="house.isCurrent === false" color="error" outlined>
                <v-icon>mdi-minus</v-icon>
                Outdated
              </v-chip>
            </v-chip-group>
          </v-col>
          <!--color point-->
          <v-col align-self="center" cols="1">
            <v-img height="30" width="30" :style="`backgroundColor: `+ house.mainColor" class="rounded-pill"/>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content :eager="isEager">
        <v-card elevation="0">
          <!--加载动画插槽-->
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-row>
            <v-col cols="5" class="mt-2">
              <v-text-field v-model="house.index" label="UUID" disabled>
                {{ house.index }}
              </v-text-field>
              <v-text-field v-model="house.name" label="Name" :disabled="setDisabled" outlined dense>
                {{ house.name }}
              </v-text-field>
              <v-text-field v-model="house.attribute" label="Attribute" :disabled="setDisabled" outlined dense>
                {{ house.attribute }}
              </v-text-field>
              <v-row class="mt-0">
                <v-col>
                  <!--颜色插槽-->
                  <v-menu transition="fade-transition">
                    <template #activator="{on, attrs}">
                      <v-text-field v-model="house.mainColor" label="Main Color" :disabled="setDisabled"
                                    outlined dense v-bind="attrs" v-on="on">
                        {{ house.mainColor }}
                      </v-text-field>
                    </template>
                    <v-color-picker dot-size="25" swatches-max-height="200"
                                    v-model:value="house.mainColor"></v-color-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-text-field v-model="house.minusColor" label="Minus Color" :disabled="setDisabled" outlined dense>
                    {{ house.minusColor }}
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-0">
                <v-col>
                  <v-text-field v-model="house.space" label="Space" :disabled="setDisabled"
                                type="number" outlined dense>
                    {{ house.space }}
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="house.totalLayer" label="Total Layer"
                                :disabled="setDisabled" type="number" outlined dense>
                    {{ house.totalLayer }}
                  </v-text-field>
                </v-col>
              </v-row>
              <v-switch v-model="house.isCurrent" :label="`Is Current: ${house.isCurrent}`"
                        :disabled="setDisabled" dense class="my-0"></v-switch>
            </v-col>
            <v-col cols="7">
              <AvatarUploader></AvatarUploader>
            </v-col>
          </v-row>
          <v-row class="ms-0 me-3">
            <v-textarea v-model="house.description" label="Description" :disabled="setDisabled" outlined height="80"
                        clearable clear-icon="mdi-close-circle" counter>
              {{ house.description }}
            </v-textarea>
          </v-row>
          <v-card-actions class="px-0 mt-auto d-flex justify-end">
            <v-btn color="primary" class="font-weight-bold" text @click="modifyHouse()"
                   v-if="setDisabled===true">Modify
            </v-btn>
            <v-btn color="teal" class="font-weight-bold" text @click="saveHouse(house)"
                   v-if="setDisabled===false">Save
            </v-btn>
            <v-btn color="red" class="font-weight-bold" text @click="deleteHouse(house.index)">
              Delete
            </v-btn>
            <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateHouse(house.index)">
              Duplicate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader.vue";

export default {
  name: "HouseCard",
  components: {AvatarUploader},
  props: {
    setDisabled: Boolean,
    houseList: Array,
    isEager: false,
  },
  data: () => ({}),
  methods: {
    modifyHouse() {
      this.setDisabled = false
    },
    saveHouse(house) {
      this.setDisabled = true
      //读取数据

      //组装数据

      //更新数据到数据库
    },
    deleteHouse(index) {

    },
    duplicateHouse(index) {

    },
  },
}
</script>

<style scoped>

</style>
