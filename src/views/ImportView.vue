<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <v-row>
      <v-col cols="4">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.roomReport"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200"
                  max-width="400"
              >
                <v-card-text>
                  <div>Download Room</div>
                  <p class="text-h4 white--text">Room Report</p>
                  <p>.xlsx document</p>
                  <div class="white--text">
                    Click to download your room information what you already have
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="amber accent-4" @click="triggerDownloadReport
                       (userUUId, startDate, endDate, onlyBookmarks,
                       needAll, roomDownloadType, roomFileName, fileType)">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.furnitureReport"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200"
                  max-width="400"
              >
                <v-card-text>
                  <div>Download Furniture</div>
                  <p class="text-h4 white--text">Furniture Report</p>
                  <p>.xlsx document</p>
                  <div class="white--text">
                    Click to download your furniture information what you already have
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="pink accent-4" @click="triggerDownloadReport
                       (userUUId, startDate, endDate, onlyBookmarks,
                       needAll, furnitureDownloadType, furnitureFileName, fileType)"
                >Download
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.stuffReport"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200"
                  max-width="400"
              >
                <v-card-text>
                  <div>Download Stuff</div>
                  <p class="text-h4 white--text">Stuff Report</p>
                  <p>.xlsx document</p>
                  <div class="white--text">
                    Click to download your stuff information what you already have
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="teal accent-4" @click="triggerDownloadReport
                       (userUUId, startDate, endDate, onlyBookmarks,
                       needAll, stuffDownloadType, stuffFileName, fileType)">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.roomTemplate"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  max-height="200"
                  max-width="600"
              >
                <v-card-text>
                  <div>Template</div>
                  <p class="text-h4 white--text">Template of Room</p>
                  <p>.xls document</p>
                  <div class="white--text">
                    Click to download the template for uploading room
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="teal accent-4">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.roomImport"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  max-height="200"
                  max-width="600"
              >
                <v-card-text>
                  <div>Import</div>
                  <p class="text-h4 white--text">Import Your Room</p>
                  <p>.xl / .xls / .csv document</p>
                  <div class="white--text">
                    Click to upload room
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.furnitureTemplate"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  max-height="200"
                  max-width="600"
              >
                <v-card-text>
                  <div>Template</div>
                  <p class="text-h4 white--text">Template of Furniture</p>
                  <p>.xls document</p>
                  <div class="white--text">
                    Click to download the template for uploading furniture
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="teal accent-4">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.furnitureImport"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  max-height="200"
                  max-width="600"
              >
                <v-card-text>
                  <div>Import</div>
                  <p class="text-h4 white--text">Import Your Furniture</p>
                  <p>.xl / .xls / .csv document</p>
                  <div class="white--text">
                    Click to upload furniture
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.stuffTemplate"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  max-height="200"
                  max-width="600"
              >
                <v-card-text>
                  <div>Template</div>
                  <p class="text-h4 white--text">Template of Stuff</p>
                  <p>.xls document</p>
                  <div class="white--text">
                    Click to download the template for uploading stuff
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="teal accent-4">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-img
                  :src="exportImgURL.stuffImport"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  max-height="200"
                  max-width="600"
              >
                <v-card-text>
                  <div>Import</div>
                  <p class="text-h4 white--text">Import Your Stuff</p>
                  <p>.xl / .xls / .csv document</p>
                  <div class="white--text">
                    Click to upload stuff
                  </div>
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {exportImgURL} from "@/assets/js/exportImgCDN";
import {downloadReport} from "@/api/downloadReportRequest/downloadReportAPI";


export default {
  name: 'ImportView',
  computed: {
    exportImgURL() {
      return exportImgURL
    }
  },
  components: {},
  data: () => ({
    userUUId: '648fdfbb54b0950d00c37c2e',
    startDate: '2020-02-12',
    endDate: '2020-02-12',
    onlyBookmarks: false,
    needAll: true,
    roomDownloadType: 'room',
    furnitureDownloadType: 'furniture',
    stuffDownloadType: 'stuff',
    roomFileName: '房间报表',
    furnitureFileName: '家具报表',
    stuffFileName: '物品报表',
    fileType: '.xlsx'
  }),
  methods: {
    //下载报表：房间，家具，物品
    triggerDownloadReport(userUUId, startDate, endDate, onlyBookmarks,
                          needAll, downloadType, fileName, fileType) {
      //组装数据
      let data = new FormData()
      data.append('start_date', startDate)
      data.append('end_date', endDate)
      data.append('only_bookmarks', onlyBookmarks)
      data.append('need_all', needAll)
      //收集userUUId, downloadType, fileName, fileType-->调用家具API
      downloadReport(userUUId, downloadType, data).then(res => {
        if (!res) {
          console.log("download field")
          return
        }
        let blob = window.URL.createObjectURL(new Blob([res.data], {type: "application/x-msdownload"}));
        var elink = document.createElement('a');
        elink.download = fileName + fileType;
        elink.style.display = 'none';
        elink.href = blob;
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
      })
    }
  }
}
</script>
