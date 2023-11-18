<template>
  <v-container class="my-1">
    <v-file-input v-model="fileInfo" label="Avatar" :rules="[v => !!v || 'Avatar is required']"
                  @change="uploadFile" :disabled="uploadIsDisabled" prepend-icon="mdi-camera"
                  :userUUId="userUUId" @click:clear="clearTag" clearable
                  :loading="imgUploadIsLoading" accept="image/*" class="mx-0 px-0 my-0 py-0">
    </v-file-input>
    <v-img :src="imgUrl" style="border: 1px solid #757575" contain>
      <!--遮罩层渲染区域-->
      <v-overlay absolute color="black">
        <!--渲染出检测数据位置-->
        <div :style="computedStyle" id="overlayTagText">
          <v-icon size="12" color="white" left>
            mdi-map-marker
          </v-icon>
          {{ itemCentralRenderMode.tag }}
          {{ itemCentralRenderMode.type }}
        </div>
      </v-overlay>
    </v-img>
    <!--    {{ this.itemRenderList }}-->
    <v-snackbar v-model="snackbarStatus" light :timeout="snackbarTimeout" width="500"
                :color="snackbarColor" shaped app top centered>
      <v-row>
        <!--状态码-->
        <v-col cols="5" class="text-h6" align-self="center">
          {{ snackbarCode }}
        </v-col>
        <!--消息内容-->
        <v-col cols="7" align-self="center">
          {{ snackbarData }}
        </v-col>
      </v-row>
      <!--关闭按钮-->
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbarStatus = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>

import {recognizeTaggingLocate} from "@/api/aiRequest/airecognizeApi";

export default {
  name: "AvatarUploader",
  props: {
    userUUId: String,
    uploadIsDisabled: Boolean,
  },
  data() {
    return {
      fileInfo: null,
      imgUrl: '',
      fileNaturalWidth: 200,
      fileNaturalHeight: 200,
      //API使用后物体识别结果List
      itemRecognizeResultList: [],
      //物体定位渲染模组
      itemRenderMode: {
        type: String,
        tag: String,
        boundingBox: {
          height: Number,
          topLeftX: Number,
          topLeftY: Number,
          width: Number,
        }
      },
      //物体定位渲染模组列表
      itemRenderModeList: [],
      //物品中心点渲染模组
      itemCentralRenderMode: {
        type: String,
        tag: String,
        leftX: Number,
        leftY: Number,
      },
      //渲染时的List
      itemRenderList: [],
      //图片上传时加载与否
      imgUploadIsLoading: false,
      //消息栏
      snackbarStatus: false,
      snackbarCode: 200,
      snackbarColor: 'white',
      snackbarData: "none",
      snackbarTimeout: 2000,
    }
  },
  computed: {
    computedStyle() {
      var w = this.itemRenderMode.boundingBox.width
      var h = this.itemRenderMode.boundingBox.height
      var d = this.itemRenderMode.boundingBox.topLeftX
      var c = this.itemRenderMode.boundingBox.topLeftY
      var a = 600//CDN图片长
      var b = 337//CDN图片高
      var x = 600//浏览器图片长
      var y = b * x / a//浏览器图片高
      //计算左端
      var resleft = ((d / a) * x) - (x / 2) + (w / 2)
      console.log("resleft: " + resleft)
      //计算右端
      var restop = ((c / b) * y) - (y / 2) + (h / 2)
      console.log("restop: " + restop)
      //赋值中心点模组
      this.itemCentralRenderMode.tag = this.itemRenderMode.tag
      this.itemCentralRenderMode.type = this.itemRenderMode.type
      this.itemCentralRenderMode.leftX = resleft
      this.itemCentralRenderMode.leftY = restop
      console.log(this.itemCentralRenderMode)
      //返回位置
      return {
        position: 'absolute',
        left: `${resleft}px`,
        top: `${restop}px`,
        opacity: 1,
      };
    },
  },
  methods: {
    clearTag() {
      this.itemCentralRenderMode.tag = ''
      this.itemCentralRenderMode.type = ''
      this.itemCentralRenderMode.leftX = 0
      this.itemCentralRenderMode.leftY = 0

      document.getElementById('overlayTagText').style.opacity = 0;
      // let element = document.getElementById('overlayTagText')
      // if (element) ;
      // {
      //   element.parentNode.removeChild(element);
      // }
    },
    //------------------发送snackbar，唤醒消息栏------------------
    sendMessage(code, color, data, timeout) {
      this.snackbarStatus = true
      this.snackbarCode = code
      this.snackbarColor = color
      this.snackbarData = data
      this.snackbarTimeout = timeout
    },
    async uploadFile() {
      //开启操作保护
      this.uploadIsDisabled = true
      document.getElementById('overlayTagText').style.opacity = 0;

      console.log("this.fileInfo: " + this.fileInfo)
      let files = this.fileInfo
      let that = this
      let reader = new FileReader()
      if (files) {
        reader.readAsDataURL(files)
      }
      //读取图片长宽
      const img = new Image()
      reader.onload = function (e) {
        that.imgUrl = this.result
        img.src = e.target.result;
        img.onload = () => {
          this.fileNaturalWidth = img.width
          that.width1 = img.width
          this.fileNaturalHeight = img.height
          that.height1 = img.height
          console.log("natural width+height1: " + img.width + " " + img.height);
          console.log("natural width+height2: " + this.fileNaturalWidth + " " + this.fileNaturalHeight);
        };
      }

      if (this.fileInfo === null) {
        that.imgUrl = ''
      }
      console.log("that.imgUrl: " + that.imgUrl)
      //图片识别与渲染处理
      await this.imgUploadRender()
      console.log("natural width+height4: " + this.fileNaturalWidth + " " + this.fileNaturalHeight);
      //关闭操作保护
      this.uploadIsDisabled = false
      document.getElementById('overlayTagText').style.opacity = 1;
    },

    //----------------图片识别定位渲染与赋值操作--------------------
    async imgUploadRender() {
      console.log("natural width+height3: " + this.fileNaturalWidth + " " + this.fileNaturalHeight);
      console.log("processing imgUploadRender")
      //上传图片
      let imgUrl = await this.uploadImg2CDN();
      console.log("processed uploadImg2CDN: " + imgUrl)
      //AI识别
      let recognizeResult = await this.AIRecognizeImage(this.userUUId, imgUrl, true,
          "zh", "10", 15, "huawei");

      console.log("processed AIRecognizeImage:" + recognizeResult)
      //结果渲染
      this.itemRenderList = await this.itemPositionRender(recognizeResult);
      console.log(this.itemRenderList)
      //消息栏公告
      this.sendMessage(200, 'success', "Recognize Success!", 2000)
    },
    //--------------------图片上传CDN操作-------------------------
    async uploadImg2CDN() {
      //开启图像加载
      this.imgUploadIsLoading = true
      //发送图片至服务器，并存储在图床CDN上

      //关闭图像加载
      this.imgUploadIsLoading = false
      //返回存储url（模拟数据）
      return "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe8717364-cff0-4ad6-9e26-fe4373ff41b6%2F0821f13b-f951-4deb-87bb-1b2bc0d37791%2F%25E5%25BE%25AE%25E4%25BF%25A1%25E5%259B%25BE%25E7%2589%2587_20231014174535.jpg?id=02986b01-f490-45ad-a996-f7e99f8c4287&table=block&spaceId=e8717364-cff0-4ad6-9e26-fe4373ff41b6&width=600&userId=9f607b9e-3871-4700-ae85-31546a3a1ceb&cache=v2"
    },
    //----------------AI识别并返回物品与定位操作--------------------
    async AIRecognizeImage(userUUId, imgUrl, needDet, language, threshold, limit, serverName) {
      //开启图像加载
      this.imgUploadIsLoading = true

      //组装数据为JSON对象
      let data = {
        "imgUrl": imgUrl,
        "needDet": needDet,
        "language": language,
        "threshold": threshold,
        "limit": limit,
        "serverName": serverName,
      }
      //发送相应的url到AI识别接口处进行识别
      try {
        await recognizeTaggingLocate(userUUId, data).then(res => {
          //识别失败，返回消息
          if (res.data.status != 200 || !res) {
            this.sendMessage(res.data.status, 'warning', res.data.message + " " + res.data.data, 2000);
          } else {
            //识别成功，等待List接收组装数据
            this.itemRecognizeResultList = res.data.data
            //返回消息
            this.sendMessage(200, 'success', res.data.message, 2000);
          }
        })
      } catch (error) {
        this.sendMessage(500, 'error', "load failed", 2000);
      }

      //关闭图像加载
      this.imgUploadIsLoading = false
    },
    //------------------物体定位渲染并赋值操作----------------------
    itemPositionRender(recognizeResultList) {
      //开启图像加载
      this.imgUploadIsLoading = true
      //轮询赋值模组
      // for (let i = 0; i < recognizeResultList.length(); i++) {
      // }
      //利用插槽将定位渲染在图像框上面

      //将数据自动赋值给其它左侧属性

      //关闭图像加载
      this.imgUploadIsLoading = false

      //模拟：将数据存入渲染list，之后删
      this.recognizeResultList = this.itemRecognizeResultList
      this.recognizeResultList = [
        {
          "type": "书类",
          "tag": "书本",
          "boundingBox": {
            "height": 321,
            "topLeftX": 1,
            "topLeftY": 15,
            "width": 233
          }
        },
        {
          "type": "电子类",
          "tag": "耳机",
          "boundingBox": {
            "height": 20,
            "topLeftX": 150,
            "topLeftY": 200,
            "width": 20
          }
        }
      ]
      // this.itemRenderMode = this.recognizeResultList.at(0)
      // return this.itemRenderMode
      return this.recognizeResultList
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
