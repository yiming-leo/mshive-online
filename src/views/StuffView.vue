<!--HomeView->StuffView-->
<template>
  <v-col :cols="10">
    <v-container class="my-0 mx-0 px-0 py-0">
      <v-row>
        <v-col cols="12">
          <v-sheet class="d-flex flex-column overflow-auto" min-height="70vh"
                   rounded="lg" color="transparent">
            <v-skeleton-loader class="mb-2" type="card" v-if="isLoading"></v-skeleton-loader>
            <template v-else-if="!isLoading">
              <StuffCard :stuff-list="stuffList" :set-disabled="setStuffCardDisabled"></StuffCard>
              <StuffCard :is-eager="isStuffCardEager" class="mt-1" :stuff-list="stuffTemplateJSON"
                         :set-disabled="setStuffCardDisabled"
                         v-if="haveAlreadyAddNewOneStuffCard === false"></StuffCard>
              <!--the button adding new one stuff card-->
              <v-btn class="my-2" color="white" @click="addNewOneStuffCard"
                     v-if="haveAlreadyAddNewOneStuffCard === true">
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

import StuffCard from "@/components/card/StuffCard.vue";
import stuffList from "@/json/stuff/stuffListRawData.json"
import stuffTemplateJSON from "@/json/stuff/stuffTemplateJSON.json"

export default {
  name: 'Stuff',
  components: {
    StuffCard
  },
  data: () => ({
    setStuffCardDisabled: true,
    haveAlreadyAddNewOneStuffCard: true,
    isStuffCardEager: true,
    isLoading: false,
    stuffList: stuffList,
    stuffTemplateJSON: stuffTemplateJSON,
  }),
  mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  },
  methods: {
    addNewOneStuffCard() {
      this.haveAlreadyAddNewOneStuffCard = false
      //填写信息
      //填完保存
      //保存完刷新组件（此时新数据已加载进入数据库）
    },
  },
}
</script>
