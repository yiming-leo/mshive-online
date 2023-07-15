<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <v-row>
      <v-col cols="9">
        <v-sheet min-height="70vh" rounded="lg" color="transparent">
          <HouseCard></HouseCard>
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import HouseCard from "@/components/card/HouseCard.vue";

export default {
  name: 'HouseView',
  components: {HouseCard},
}
</script>
