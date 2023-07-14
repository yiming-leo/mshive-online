<template>
  <v-container class="my-1">
    <v-file-input v-model="fileInfo" label="Avatar" :rules="[v => !!v || 'Avatar is required']"
                  @change="uploadFile" :disabled="loading.uploadIsLoading" prepend-icon="mdi-camera"
                  :loading="loading.uploadIsLoading" accept="image/*" class="mx-0 px-0 my-0 py-0">
    </v-file-input>
    <v-img :src="imgUrl" height="330" style="border: 1px solid #757575"></v-img>
  </v-container>
</template>
<script>

export default {
  name: "AvatarUploader",
  data() {
    return {
      fileInfo: null,
      loading: {uploadIsLoading: false},
      imgUrl: '',
    }
  },
  created() {
  },
  methods: {
    uploadFile() {
      console.log(this.fileInfo)
      let files = this.fileInfo
      let that = this
      let reader = new FileReader()
      if (files) {
        reader.readAsDataURL(files)
      }
      reader.onload = function () {
        that.imgUrl = this.result
      }
      if (this.fileInfo === null) {
        that.imgUrl = ''
      }
      console.log(that.imgUrl)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
