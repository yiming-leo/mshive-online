<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <div id="chartdiv" ref="chartdiv">
    </div>
  </v-container>
</template>
<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_animated from "@amcharts/amcharts5/themes/Animated";

import rawData from "@/json/statisticRawData.json"


export default {
  name: 'StatisticView',
  components: {},
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root.setThemes([am5themes_animated.new(root)]);
    // Create custom theme...
    var myTheme = am5.Theme.new(root);
    var data = rawData;
    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    }));

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
      singleBranchOnly: false,
      downDepth: 3,
      topDepth: 1,
      initialDepth: 3,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      idField: "name",
      linkWithField: "linkWith",
      manyBodyStrength: -30,
      centerStrength: 1
    }));

    series.get("colors").setAll({
      step: 2
    });

    series.links.template.set("strength", 1);

    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);


// Make stuff animate on load
    series.appear(1000, 100);
  }
}
</script>
<style>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
