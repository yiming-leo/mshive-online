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
              <v-chip link color="amber" outlined>Space: {{ stuff.space }}</v-chip>
              <v-chip link color="pink" outlined>Layer: {{ stuff.layer }}</v-chip>
              <v-chip v-if="stuff.isCurrent === true" color="vue_theme" outlined>
                <v-icon>mdi-check</v-icon>
                Current
              </v-chip>
              <v-chip v-else-if="stuff.isCurrent === false" color="error" outlined>
                <v-icon>mdi-minus</v-icon>
                Outdated
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
      <v-expansion-panel-content :eager="isEager">
        <v-card elevation="0">
          <!--加载动画插槽-->
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-row>
            <v-col cols="5" class="mt-2">
              <v-text-field v-model="stuff.index" label="UUID" disabled>
                {{ stuff.index }}
              </v-text-field>
              <v-text-field v-model="stuff.name" label="Name" :disabled="setDisabled" outlined dense>
                {{ stuff.name }}
              </v-text-field>
              <v-text-field v-model="stuff.attribute" label="Attribute" :disabled="setDisabled" outlined dense>
                {{ stuff.attribute }}
              </v-text-field>
              <v-row class="mt-0">
                <v-col>
                  <!--颜色插槽1-->
                  <v-menu transition="fade-transition">
                    <template #activator="{on, attrs}">
                      <v-text-field v-model="stuff.mainColor" label="Main Color" :disabled="setDisabled"
                                    outlined dense v-bind="attrs" v-on="on">
                        {{ stuff.mainColor }}
                      </v-text-field>
                    </template>
                    <v-color-picker dot-size="25" swatches-max-height="200"
                                    v-model:value="stuff.mainColor"></v-color-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <!--颜色插槽2-->
                  <v-menu transition="fade-transition">
                    <template #activator="{on, attrs}">
                      <v-text-field v-model="stuff.minorColor" label="Minor Color" :disabled="setDisabled"
                                    outlined dense v-bind="attrs" v-on="on">
                        {{ stuff.minorColor }}
                      </v-text-field>
                    </template>
                    <v-color-picker dot-size="25" swatches-max-height="200"
                                    v-model:value="stuff.minorColor"></v-color-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row class="mt-0">
                <v-col>
                  <v-text-field v-model="stuff.space" label="Space" :disabled="setDisabled"
                                type="number" outlined dense>
                    {{ stuff.space }}
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="stuff.layer" label="Layer"
                                :disabled="setDisabled" type="number" outlined dense>
                    {{ stuff.layer }}
                  </v-text-field>
                </v-col>
              </v-row>
              <v-switch v-model="stuff.isCurrent" :label="`Is Current: ${stuff.isCurrent}`"
                        :disabled="setDisabled" dense class="my-0"></v-switch>
            </v-col>
            <v-col cols="7">
              <AvatarUploader></AvatarUploader>
            </v-col>
          </v-row>
          <v-row class="ms-0 me-3">
            <v-textarea v-model="stuff.description" label="Description" :disabled="setDisabled" outlined height="80"
                        clearable clear-icon="mdi-close-circle" counter>
              {{ stuff.description }}
            </v-textarea>
          </v-row>
          <v-card-actions class="px-0 mt-auto d-flex justify-end">
            <v-btn color="primary" class="font-weight-bold" text @click="modifyStuff()"
                   v-if="setDisabled===true">Modify
            </v-btn>
            <v-btn color="teal" class="font-weight-bold" text @click="saveStuff(stuff)"
                   v-if="setDisabled===false">Save
            </v-btn>
            <v-btn color="red" class="font-weight-bold" text @click="deleteStuff(stuff.index)">
              Delete
            </v-btn>
            <v-btn color="deep-purple" class="font-weight-bold" text @click="duplicateStuff(stuff.index)">
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
  name: "StuffCard",
  components: {AvatarUploader},
  props: {
    setDisabled: Boolean,
    stuffList: Array,
    isEager: false,
  },
  data: () => ({}),
  methods: {
    modifyStuff() {
      this.setDisabled = false
    },
    saveStuff() {
      this.setDisabled = true
      //读取数据

      //组装数据

      //更新数据到数据库
    },
    deleteStuff(index) {

    },
    duplicateStuff(index) {

    },
  },
}
</script>

<style scoped>

</style>
