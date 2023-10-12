<!--HomeView->HouseView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column" min-height="70vh" rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
              <HouseCard :house-list="houseList" :set-disabled="setHouseCardDisabled"></HouseCard>
              <HouseCard :is-eager="isHouseCardEager" class="mt-1" :house-list="houseTemplateJSON"
                         :set-disabled="setHouseCardDisabled"
                         v-if="haveAlreadyAddNewOneHouseCard === false"></HouseCard>
              <!--the button adding new one house card-->
              <v-btn elevation="2" class="my-2" color="white" @click="addNewOneHouseCard"
                     v-if="haveAlreadyAddNewOneHouseCard === true">
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

import HouseCard from "@/components/card/HouseCard.vue";
import houseListRawData from "@/json/house/houseListRawData.json"
import houseTemplateJSON from "@/json/house/houseTemplateJSON.json"

export default {
  name: 'HouseView',
  components: {HouseCard},
  data: () => ({
    setHouseCardDisabled: true,
    haveAlreadyAddNewOneHouseCard: true,
    isHouseCardEager: true,
    isLoading: false,
    houseList: houseListRawData,
    houseTemplateJSON: houseTemplateJSON,
  }),
  mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  },
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
