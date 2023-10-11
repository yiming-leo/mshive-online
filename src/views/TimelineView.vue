<template>
  <v-col :cols="10">
    <v-sheet rounded elevation="2">
      <v-container>
        <v-timeline dense clipped>
          <!--          <v-timeline-item fill-dot class="white&#45;&#45;text mb-12" color="orange" large>-->
          <!--            <template v-slot:icon>-->
          <!--              <span>YL</span>-->
          <!--            </template>-->
          <!--            <v-text-field v-model="input" hide-details label="Leave a comment..." solo @keydown.enter="comment">-->
          <!--              <template v-slot:append>-->
          <!--                <v-btn class="mx-0" depressed @click="comment">Post</v-btn>-->
          <!--              </template>-->
          <!--            </v-text-field>-->
          <!--          </v-timeline-item>-->
          <!--          <v-slide-x-transition group>-->
          <!--            <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-4" color="pink" small>-->
          <!--              <v-row justify="space-between">-->
          <!--                <v-col cols="7" v-text="event.text"></v-col>-->
          <!--                <v-col class="text-right" cols="5" v-text="event.time"></v-col>-->
          <!--              </v-row>-->
          <!--            </v-timeline-item>-->
          <!--          </v-slide-x-transition>-->
          <!--          <v-timeline-item class="mb-6" hide-dot>-->
          <!--            <span>TODAY</span>-->
          <!--          </v-timeline-item>-->
          <v-timeline-item class="mb-4" small v-for="item in stuff">
            <template v-slot:icon>
              <v-chip small :style="`background: linear-gradient(0.45turn,`+item.mainColor+`,`+item.minorColor+`)`">
              </v-chip>
            </template>
            <v-row justify="space-between">
              <v-col cols="7">
                <v-row>
                  <v-col cols="5">
                    <v-chip class="white--text mx-1"
                            :color="operationColor(item.operation)" label small>{{ item.operation }}
                    </v-chip>
                    <v-chip class="white--text mx-1" color="gray" label small>{{ item.attribute }}</v-chip>
                    <v-icon :color="item.isBookmarks? 'green' : 'red'">
                      {{ item.isBookmarks ? 'mdi-book-check' : 'mdi-book-cancel' }}
                    </v-icon>
                  </v-col>
                  <v-col cols="3">
                    {{ item.name }}
                  </v-col>
                  <v-col cols="3">
                    {{ item.index }}
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="text-right" cols="5">{{ item.modifyDate }}</v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-sheet>
  </v-col>
</template>
<script>

export default {
  name: 'TimelineView',
  components: {},
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
    stuff: [
      {
        index: '648fe2130df02d3007092a64',
        name: '劳力士',
        mainColor: '#ffaaaa',
        minorColor: '#aaffff',
        attribute: '手表',
        isBookmarks: true,
        operation: 'Insert',
        modifyDate: new Date().toLocaleString("en-US"),
      },
      {
        index: '648fe2130df02d3007092a63',
        name: '充电宝',
        mainColor: '#eeeeee',
        minorColor: '#242631',
        attribute: '电器',
        isBookmarks: false,
        operation: 'Insert',
        modifyDate: new Date().toLocaleString("en-US"),
      },
      {
        index: '648fe2130df02d3007092a63',
        name: '充电宝',
        mainColor: '#eeeeee',
        minorColor: '#242631',
        attribute: '电器',
        isBookmarks: false,
        operation: 'Delete',
        modifyDate: new Date().toLocaleString("en-US"),
      },
      {
        index: '648fe2130df02d3007092a64',
        name: '劳力士',
        mainColor: '#b71515',
        minorColor: '#143333',
        attribute: '手表',
        isBookmarks: true,
        operation: 'Update',
        modifyDate: new Date().toLocaleString("en-US"),
      },
    ],
  }),
  computed: {
    timeline() {
      return this.events.slice().reverse()
    },
  },
  methods: {
    comment() {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        }),
      })
      this.input = null
    },
    operationColor(operation) {
      if (operation == 'Insert') {
        return 'green'
      } else if (operation == 'Delete') {
        return 'red'
      } else if (operation == 'Update') {
        return 'warning'
      } else return 'gray'
    },
  },
}
</script>
