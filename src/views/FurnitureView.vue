<!--HomeView->FurnitureView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="9">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <FurnitureCard :furniture-list="furnitureList" :set-disabled="setFurnitureCardDisabled"></FurnitureCard>
            <FurnitureCard :is-eager="isFurnitureCardEager" class="mt-1" :furniture-list="furnitureTemplateJSON"
                           :set-disabled="setFurnitureCardDisabled"
                           v-if="haveAlreadyAddNewOneFurnitureCard === false"></FurnitureCard>
            <!--the button adding new one furniture card-->
            <v-btn class="my-2" color="white" @click="addNewOneFurnitureCard"
                   v-if="haveAlreadyAddNewOneFurnitureCard === true">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-sheet>
        </v-col>
        <!--right tree view-->
        <v-col cols="3">
          <!--right top view bar-->
          <v-sheet min-height="60vh" max-height="70vh" rounded="lg" class="overflow-auto" elevation="2">
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

import FurnitureCard from "@/components/card/FurnitureCard.vue";
import furnitureListRawData from "@/json/furnitureListRawData.json"
import furnitureItemRawData from "@/json/furnitureItemRawData.json"
import furnitureTemplateJSON from "@/json/furnitureTemplateJSON.json"

export default {
  name: 'FurnitureView',
  components: {
    FurnitureCard
  },
  data: () => ({
    // middle
    setFurnitureCardDisabled: true,
    haveAlreadyAddNewOneFurnitureCard: true,
    isFurnitureCardEager: true,
    furnitureList: furnitureListRawData,
    furnitureTemplateJSON: furnitureTemplateJSON,
    // right tree view
    selectionType: 'leaf',
    selection: [],
    //items only ID! not index!
    items: furnitureItemRawData,
  }),
  methods: {
    addNewOneFurnitureCard() {
      this.haveAlreadyAddNewOneFurnitureCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
