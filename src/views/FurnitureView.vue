<!--HomeView->FurnitureView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
            <FurnitureCard :furniture-list="furnitureList" :set-disabled="setFurnitureCardDisabled"></FurnitureCard>
            <FurnitureCard :is-eager="isFurnitureCardEager" class="mt-1" :furniture-list="furnitureTemplateJSON"
                           :set-disabled="setFurnitureCardDisabled"
                           v-if="haveAlreadyAddNewOneFurnitureCard === false"></FurnitureCard>
            <!--the button adding new one furniture card-->
            <v-btn class="my-2" color="white" @click="addNewOneFurnitureCard"
                   v-if="haveAlreadyAddNewOneFurnitureCard === true">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            </template>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>
<script>

import FurnitureCard from "@/components/card/FurnitureCard.vue";
import furnitureListRawData from "@/json/furniture/furnitureListRawData.json"
import furnitureTemplateJSON from "@/json/furniture/furnitureTemplateJSON.json"

export default {
  name: 'FurnitureView',
  components: {
    FurnitureCard
  },
  data: () => ({
    setFurnitureCardDisabled: true,
    haveAlreadyAddNewOneFurnitureCard: true,
    isFurnitureCardEager: true,
    isLoading: false,
    furnitureList: furnitureListRawData,
    furnitureTemplateJSON: furnitureTemplateJSON,
  }),
  mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  },
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
