<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <v-row>
      <v-col>
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-card-text>
                <div>Template</div>
                <p class="text-h4 text--primary">Template of Stuff</p>
                <p>.xls document</p>
                <div class="text--primary">
                 Click to download the template for uploading stuff
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="teal accent-4">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-card-text>
                <div>Import</div>
                <p class="text-h4 text--primary">Import Your Stuff</p>
                <p>.xl / .xls / .csv document</p>
                <div class="text--primary">
                  Click to upload stuff
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{hover}">
          <template>
            <v-card :elevation="hover? 12:2" class="mx-auto my-2 transition-swing">
              <v-card-text>
                <div>Export</div>
                <p class="text-h4 text--primary">Export</p>
                <p>.xls document</p>
                <div class="text--primary">
                  Click to export your stuff what you already have
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="blue accent-4">Download</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'ImportView',
  components: {},
}
</script>
