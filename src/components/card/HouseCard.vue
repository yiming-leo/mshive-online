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
          <v-col align-self="center" cols="1">
            <v-img height="30" width="30" :style="`backgroundColor: `+ house.color" class="rounded-pill"></v-img>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card elevation="0">
          <!--加载动画插槽-->
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="house.index" label="UUID" disabled dense>
                {{ house.index }}
              </v-text-field>
              <v-text-field v-model="house.name" label="Name" :disabled="setDisabled" dense>
                {{ house.name }}
              </v-text-field>
              <v-text-field v-model="house.attribute" label="Attribute" :disabled="setDisabled" dense>
                {{ house.attribute }}
              </v-text-field>
              <v-text-field v-model="house.color" label="Color" :disabled="setDisabled" dense>
                {{ house.color }}
              </v-text-field>
              <v-text-field v-model="house.description" label="Description" :disabled="setDisabled" dense>
                {{ house.description }}
              </v-text-field>
              <v-text-field v-model="house.isCurrent" label="Is Current" :disabled="setDisabled" dense>
                {{ house.isCurrent }}
              </v-text-field>
              <v-text-field v-model="house.space" label="Space" :disabled="setDisabled" dense>
                {{ house.space }}
              </v-text-field>
              <v-text-field v-model="house.totalLayer" label="Total Layer" :disabled="setDisabled" dense>
                {{ house.totalLayer }}
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-img height="250" :src="house.imgUrl"></v-img>
            </v-col>
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
export default {
  name: "HouseCard",
  data: () => ({
    setDisabled: true,
    houseList: [
      {
        index: '648fe2130df02d3007092a56',
        attribute: '工作室',
        color: '#42b883',
        description: '之江银泰旁边的老窝罢了',
        imgUrl: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        isCurrent: true,
        isDeleted: false,
        location: '之江银泰，自己找',
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '我的老窝',
        refUserId: '648fdfbb54b0950d00c37c2e',
        space: 120,
        totalLayer: 3,
      },
      {
        index: '648fe2130df02d3007092a57',
        attribute: '寝室',
        color: '#FFC107',
        description: '糟糕的地方',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isCurrent: false,
        isDeleted: false,
        location: '明德路',
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '立业园',
        refUserId: '648fdfbb54b0950d00c37c2e',
        space: 20,
        totalLayer: 1,
      },
      {
        index: '648fe2130df02d3007092a58',
        attribute: '老家',
        color: '#2196F3',
        description: '梦开始的地方',
        imgUrl: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg',
        isCurrent: false,
        isDeleted: false,
        location: '丽水，浙江',
        modifyTime: '2023-06-19T05:05:23.714Z',
        name: '老家',
        refUserId: '648fdfbb54b0950d00c37c2e',
        space: 130,
        totalLayer: 1,
      },
    ]
  }),
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

    }
  },
}
</script>

<style scoped>

</style>
