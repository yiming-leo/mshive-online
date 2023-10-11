<!--HomeView->HouseView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="9">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <HouseCard :house-list="houseList" :set-disabled="setHouseCardDisabled"></HouseCard>
            <HouseCard :is-eager="isHouseCardEager" class="mt-1" :house-list="houseTemplateJSON"
                       :set-disabled="setHouseCardDisabled" v-if="haveAlreadyAddNewOneHouseCard === false"></HouseCard>
            <!--the button adding new one house card-->
            <v-btn elevation="2" class="my-2" color="white" @click="addNewOneHouseCard" v-if="haveAlreadyAddNewOneHouseCard === true">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet min-height="60vh" max-height="70vh" rounded="lg" class="overflow-auto" elevation="1">
            <v-col>
              <v-treeview v-model="selection" :items="items" return-object
                          open-all dense hoverable rounded selected-color="blue">
                <template #prepend="{ item, open }">
                  <v-chip small
                          :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
                  </v-chip>
                </template>
              </v-treeview>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>
<script>

import HouseCard from "@/components/card/HouseCard.vue";
import houseListRawData from "@/json/houseListRawData.json"
import houseItemRawData from "@/json/houseItemRawData.json"
import houseTemplateJSON from "@/json/houseTemplateJSON.json"

export default {
  name: 'HouseView',
  components: {HouseCard},
  data: () => ({
    setHouseCardDisabled: true,
    haveAlreadyAddNewOneHouseCard: true,
    isHouseCardEager: true,
    houseList: houseListRawData,
    houseTemplateJSON: houseTemplateJSON,
    // right tree view
    selectionType: 'leaf',
    selection: [],
    //items only ID! not index!
    items: houseItemRawData,
  }),
  methods: {
    addNewOneHouseCard() {
      this.haveAlreadyAddNewOneHouseCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
